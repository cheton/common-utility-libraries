const chainedFunction = (...funcs) => {
    return funcs
        .filter(func => (typeof func === 'function'))
        .reduce((accumulator, func) => {
            if (accumulator === null) {
                return func;
            }

            return function (...args) {
                accumulator.apply(this, args);
                func.apply(this, args);
            };
        }, null);
};

export default chainedFunction;
