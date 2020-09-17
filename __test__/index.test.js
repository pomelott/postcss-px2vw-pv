
const firstTimeToUseCall  = require('./firstTimeToUse.test');
const migrateFromRemCall = require('./migrateFromRem.test');
const changeDesignDraftCall = require('./changeDesignDraft.test');

test("[example] first time to use OR use default options", firstTimeToUseCall);

test("[example] change design draft of 1080px & decimal point precision of 5", changeDesignDraftCall);

test("[example] migrate from rem with a 65px-root-fontSize", migrateFromRemCall);

