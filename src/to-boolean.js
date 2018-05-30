const toBoolean = (x) => {
    if (x === null || x === undefined) {
        return false;
    }

    x = String(x).toLowerCase();
    
    if (x === 'true' || x === 'yes' || x === '1') {
        return true;
    }
    
    if (x === 'false' || x ==='no' || x === '0') {
        return false;
    }
    
    return Boolean(x);
};

export default toBoolean;
