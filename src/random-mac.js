const randommac = (prefix) => {
    let mac = prefix || '54:52:00';
    for (let i = 0; i < 6; ++i) {
        if (i % 2 === 0) {
            mac += ':';
        }
        mac += Math.floor(Math.random() * 16).toString(16);
    }
    return mac;
};

module.exports = randommac;
