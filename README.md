# Common Utility Libraries

### Chained Function
[chained-function.js](src/chained-function.js)

```js
React.Children.map(this.props.children, child => {
    if (!React.isValidElement(child)) {
        return child;
    }
    
    return React.cloneElement(child, {
        ...child.props,
        onClick: chainedFunction(
            child.props.onClick,
            this.handleClick
        )
    });
});
```

### CSS
[css.js](src/css.js)

```js
css.stringify({
    lineHeight: 2,
    padding: '2px 0',
    color: '#3B5998',
    background: '#EDEFF4'
});
// → 'line-height:2px;padding:2px 0;color:#3B5998;background:#EDEFF4;'
```

### DOM Events
[dom-events.js](src/dom-events.js)

```js
const onClick = (event) => {
    preventDefault(event);
    stopPropagation(event);
};

addEventListener(target, 'click', onClick);
removeEventListener(target, 'click', onClick);
```

### Ensure Array
[ensure-array.js](src/ensure-array.js)

### Ensure Positive Number
[ensure-positive-number.js](src/ensure-positive-number.js)

### Event Emitter Store
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

### Extend
[extend.js](src/extend.js)

### Get
[get.js](src/get.js)

#### Log
[log.js](src/log.js)

See [universal-logger](https://github.com/cheton/universal-logger) and [universal-logger-browser](https://github.com/cheton/universal-logger-browser) for details.

```js
log.setLevel(TRACE);
log.log(INFO, 'The logger has initialized');
log.trace(emoji.get('mostly_sunny'));
log.debug(emoji.get('sun_small_cloud'));
log.info(emoji.get('barely_sunny'));
log.warn(emoji.get('rain_cloud'));
log.error(emoji.get('lightning_cloud'));
```

![image](https://cloud.githubusercontent.com/assets/447801/25939476/96bd5568-3665-11e7-9b6f-b96fe0dc73d8.png)

### Match Balanced Parentheses
[match-balanced-parentheses][src/match-balanced-parentheses.js]

### Normalize Range
[normalize-range.js](src/normalize-range.js)

### Numeral
[numeral.js](src/numeral.js)

### Portal
[portal.jsx](src/portal.jsx)

```jsx
import chainedFunction from 'chained-function';

portal(({ onClose }) => (
    <Modal onClose={onClose}>
        <Modal.Header>
            <Modal.Title>
                {'Delete Account'}
            </Modal.Title>
        </Modal.Header>
         <Modal.Body>
             <p>{'Are you sure you want to delete this account?'}</p>
         </Modal.Body>
         <Modal.Footer>
             <Button onClick={onClose}>
                 {'No'}
             </Button>
             <Button
                 btnStyle="danger"
                 onClick={chainedFunction(
                     () => {
                         action.deleteAccount(id);
                     },
                     onClose
                )}
            >
                {'Yes'}
            </Button>
        </Modal.Footer>
    </Modal>
));
```

### Promise Series
[promise-series.js](src/promise-series.js)

```js
import series from './promise-series';

const sleep = (fn, timeout) => new Promise(resolve => {
    setTimeout(() => {
        fn();
        resolve();
    }, timeout);
});

series([
    () => sleep(console.log(Date.now()), 1000),
    () => sleep(console.log(Date.now()), 2000)
]).then(() => {
    console.log('Completed');
}).catch(err => {
    console.error(err);
});
```

**Output**

```js
// → 1510307749306
// → 1510307751318
// → Completed
```

### Promisify
[promisify.js](src/promisify.js)

```js
async sync(source, target) {
    try {
        const content = await promisify(fs.readFile)(`${source}/package.json`, 'utf8');
        const pkg = JSON.parse(content);
        await promisify(fs.writeFile)(`${target}/package.json`, JSON.stringify(pkg, null, 4), 'utf8');
    } catch (err) {
        console.error(err);
    }
}
```

```js
async refresh() {
    const fetchPorts = promisify(controller.getPorts, { errorFirst: true, thisArg: controller });
    const fetchBaudRates = promisify(controller.getBaudRates, { errorFirst: false, thisArg: controller });
    
    try {
        const ports = await fetchPorts();
        const baudRates = await fetchBaudRates();
        console.log('Ports:', ports);
        console.log('Baud rates:', baudRates);
    } catch(err) {
        console.error(err);
    }
}
```

### Random IP
[random-ip.js](src/random-ip.js)

```js
> randomip('0.0.0.0');
// → '108.52.74.162'
> randomip('10.0.0.0');
// → '10.102.167.63'
> randomip('10.1.0.0');
// → '10.1.105.93'
> randomip('172.16.0.0');
// → '172.16.130.7'
```

### Random Mac
[random-mac.js](src/random-mac.js)

```js
> randommac();
// → '54:52:00:d5:7d:ca'
> randommac();
// → '54:52:00:f7:b4:08'
> randommac('10:FE:90');
// → '10:FE:90:b9:90:76'
```

### Reset Context
[reset-context.styl](src/reset-context.styl)

```css
@import "./reset-context";

.container {
    reset-context();
}
```

**Recommended Readings**
* https://www.paulirish.com/2012/box-sizing-border-box-ftw/
* https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

### Resize Observer
[ResizeObserver.js](src/ResizeObserver.js)

```js
new ResizeObserver(() => {
    // Callback
}).observe(document.body);
```

### Short ID
[shortid.js](src/shortid.js)

### Split Component Props
[split-component-props.js](src/split-component-props.js)

### Trim
[trim.js](src/trim.js)

### Unique ID
[uniqueid.js](src/uniqueid.js)

### Units
[units.js](src/units.js)
