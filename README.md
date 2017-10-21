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

### Normalize Range
[normalize-range.js](src/normalize-range.js)

### Numeral
[numeral.js](src/numeral.js)

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
    try {
        const ports = await promisify(controller.getPorts, { thisArg: controller })();
        const baudRates = await promisify(controller.getBaudRates, { thisArg: controller })();
        console.log(ports, baudRates);
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
