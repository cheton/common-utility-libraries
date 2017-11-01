// http://codereview.stackexchange.com/questions/45991/balanced-parentheses
const matchBalancedParentheses = (str = '') => {
    const parentheses = '[]{}()';
    const stack = [];
    let bracePosition;
    let start = -1;
    let i = 0;

    str = '' + str; // ensure string
    for (i = 0; i < str.length; ++i) {
        if ((start >= 0) && (stack.length === 0)) {
            return str.substring(start, i);
        }

        bracePosition = parentheses.indexOf(str[i]);
        if (bracePosition < 0) {
            continue;
        }
        if ((bracePosition % 2) === 0) {
            if (start < 0) {
                start = i; // remember the start position
            }
            stack.push(bracePosition + 1); // push next expected brace position
            continue;
        }

        if (stack.pop() !== bracePosition) {
            return str.substring(start, i);
        }
    }

    return str.substring(start, i);
};

export default matchBalancedParentheses;
