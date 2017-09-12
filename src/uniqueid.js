const uniqueid = (prefix = '', suffix = '') => {
    let id = 0;
    return function() {
        return `${prefix}${id++}${suffix}`;
    };
};

module.exports = uniqueid;
