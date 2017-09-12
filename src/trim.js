const trim = (str, chars = ' \f\n\r\t\v') => {
    while (chars.indexOf(str[0]) >= 0) {
        str = str.slice(1);
    }
    while (chars.indexOf(str[str.length - 1]) >= 0) {
        str = str.slice(0, -1);
    }
    return str;
};

module.exports = trim;
