const UNIT = ['pv'];

function getUnitRegStr () {
    let temp = '(';
    UNIT.forEach((item) => {
        if (temp === '(') {
            temp += `${item})`;
        } else {
            temp += `|(${item})`;
        }
    })
    return temp;
}

function unitTransfer (unit) {
    switch (unit) {
        case 'pv':
            return 'vw';
        default:
            return false;
    }
}

module.exports.parseValue = (value, opts) => {
    let unitRegStr = getUnitRegStr();
    let reg = new RegExp(`(?<=.*?)([\\.\\d]+(${unitRegStr}+\\b))(?:.*?)`, 'g');
    let itemReg = /([\\.\d]+)(\w+)/;
    value = value.replace(reg, (item) => {
        let itemTemp = item.match(itemReg),
            targetNum = (itemTemp[1]/opts.width) * 100,
            targetUnit = unitTransfer(itemTemp[2]);
        targetNum = targetNum.toFixed(opts.decimal);
        return targetNum + targetUnit;
    })
    return value;
}



module.exports.checkUnit = (value) => {
    let unitRegStr = getUnitRegStr();
    let reg = new RegExp(unitRegStr)
    if (reg.test(value)) {
        return true;
    }
    return false;
}