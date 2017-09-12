const randomip = (format = '0.0.0.0') => {
    return format.replace(/(^0)|(\.0)/g, (match, p1, p2, offset) => {
        const val = Math.round(Math.random() * 256);
        return (offset === 0) ? val : `.${val}`;
    });
};

module.exports = randomip;
