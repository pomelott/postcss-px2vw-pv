const TRANSFER_UNIT = ['pv', 'rem'];

function getUnitRegStr (units) {
    let temp = '(';
    units.forEach((item) => {
        if (temp === '(') {
            temp += `${item})`;
        } else {
            temp += `|(${item})`;
        }
    })
    return temp;
}

function unitTransfer (unit, opts) {
    switch (unit) {
        case 'pv':
            return 'vw';
        case 'rem':
            if (opts.remMigration === true) {
                return 'vw';
            }
            return 'rem';
        default:
            return '';
    }
}

function numberTransferSyntax (num, unit, opts) {
    switch (unit) {
        case 'pv':
            return (num/opts.width) * 100;
        case 'rem':
            if (opts.remMigration === true) {
                return num * 10;
            }
            return num;
        default:
            return 0;
    }
}

function getRemCompatibleStr (prop, vmNum, opts) {
    let targetNum = (vmNum / 10).toFixed(opts.decimal);
    return `${prop}: ${targetNum}rem`;
}

function checkIsInt (num) {
    if (String(num).indexOf('.') === -1) {
        return true;
    }
    return false;
}

module.exports.parseValue = (decl, opts, units = TRANSFER_UNIT) => {
    let unitRegStr = getUnitRegStr(units);
    let value = decl.value;
    let reg = new RegExp(`(?<=.*?)([\\.\\d]+(${unitRegStr}+\\b))(?:.*?)`, 'g');
    let itemReg = /([\\.\d]+)(\w+)/;
    value = value.replace(reg, (item) => {
        let itemTemp = item.match(itemReg),
            targetNum = numberTransferSyntax(itemTemp[1], itemTemp[2], opts),
            targetUnit = unitTransfer(itemTemp[2], opts);
        if (!checkIsInt(targetNum)) {
            targetNum = Number(targetNum).toFixed(opts.decimal);
        }
        if (itemTemp[2] === 'pv' && opts.rem === true) {
            decl.before(getRemCompatibleStr(decl.prop, targetNum, opts));
        }
        return targetNum + targetUnit;
    })
    return value;
}



module.exports.checkUnit = (value) => {
    let unitRegStr = getUnitRegStr(TRANSFER_UNIT);
    let reg = new RegExp(unitRegStr)
    if (reg.test(value)) {
        return true;
    }
    return false;
}