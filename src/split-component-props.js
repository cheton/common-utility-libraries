// https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js
const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
const keys = Reflect.ownKeys;
function objectEntries(O) {
    return reduce(
        keys(O),
        (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []),
        []
    );
}

const splitComponentProps = (props, Component) => {
    const { propTypes: componentPropTypes } = Component;
    const parentProps = {};
    const childProps = {};

    objectEntries(props).forEach(entry => {
        const [propName, propValue] = entry;

        if (componentPropTypes[propName]) {
            parentProps[propName] = propValue;
        } else {
            childProps[propName] = propValue;
        }
    });

    return [parentProps, childProps];
};

module.exports = splitComponentProps;
