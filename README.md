# Common Utility Libraries

#### EventEmitterStore
[EventEmitterStore.js](src/EventEmitterStore.js)

```js
const store = new EventEmitterStore({
    widget: {
        console: {
            minimized: false,
            lines: []
        }
    }
});

store.on('change', (state) => {
    // Listen for changes
});

store.set('widget.console.minimized', true);
store.get('widget.console.minimized', false /* defaultValue */);
store.replace('widget.console.lines', ['line 1', 'line 2', 'line 3']);
```

#### Chained Function
[chained-function.js](src/chained-function.js)

```js
React.Children.map(this.props.children, child => {
    if (!React.isValidElement(child)) {
        return child;
    }
    
    return React.cloneElement(child, {
        ref,
        onClick: chainedFunction(
            child.props.onClick,
            this.handleClick
        )
    });
});
```

#### CSS
[css.js](src/css.js)

```js
css({
    lineHeight: 2,
    padding: '2px 0',
    color: '#3B5998',
    background: '#EDEFF4'
});
// → 'line-height:2px;padding:2px 0;color:#3B5998;background:#EDEFF4;'
```

#### DOM Events
[dom-events.js](src/dom-events.js)

#### Ensure Array
[ensure-array.js](src/ensure-array.js)

#### Ensure Positive Number
[ensure-positive-number.js](src/ensure-positive-number.js)

#### Extend
[extend.js](src/extend.js)

#### Get
[get.js](src/get.js)

#### Log
[log.js](src/log.js)

#### Normalize Range
[normalize-range.js](src/normalize-range.js)

#### Numeral
[numeral.js](src/numeral.js)

#### Reset Context
[reset-context.styl](src/reset-context.styl)

#### Short ID
[shortid.js](src/shortid.js)

#### Split Component Props
[split-component-props.js](src/split-component-props.js)

#### Trim
[trim.js](src/trim.js)

#### Unique ID
[uniqueid.js](src/uniqueid.js)

#### Units
[units.js](src/units.js)
