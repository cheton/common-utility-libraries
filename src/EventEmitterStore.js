import get from 'lodash/get';
import set from 'lodash/set';
import unset from 'lodash/unset';
import isEqual from 'lodash/isEqual';
import events from 'events';

class EventEmitterStore extends events.EventEmitter {
    _state = {};

    constructor(state) {
        super();
        this.state = state;
    }
    set state(state) {
        this._state = { ...state };
    }
    get state() {
        return { ...this._state };
    }
    get(key, defaultValue) {
        return (key === undefined) ? this._state : get(this._state, key, defaultValue);
    }
    set(key, value) {
        const prevValue = this.get(key);
        if (typeof value === 'object' && isEqual(value, prevValue)) {
            return this._state;
        }
        if (value === prevValue) {
            return this._state;
        }

        merge(this._state, set({}, key, value));
        this.emit('change', this._state);
        return this._state;
    }
    unset(key) {
        unset(this._state, key);
        this.emit('change', this._state);
        return this._state;
    }
    replace(key, value) {
        const prevValue = this.get(key);
        if (typeof value === 'object' && isEqual(value, prevValue)) {
            return this._state;
        }
        if (value === prevValue) {
            return this._state;
        }
        this.unset(key);
        this.set(key, value);
        return this._state;
    }
    clear() {
        this._state = {};
        this.emit('change', this._state);
        return this._state;
    }
}

module.exports = EventEmitterStore;
