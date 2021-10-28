<h1 align="center">usecontextmenu-react</h1>

<p align="center"><strong>Contextmenu hook in React</strong></p>

<p align="center">
<a href="https://www.npmjs.com/package/usecontextmenu-react" rel="nofollow"><img alt="NPM Package" src="https://img.shields.io/npm/v/usecontextmenu-react.svg?style=flat-square" /></a>
</p>

## Install

Using npm

```bash
npm install --save usecontextmenu-react
``` 

## Usage

```js
import {ContextMenu, ContextMenuItem, useContextMenu} from 'usecontextmenu-react';
```

## Example

See [example](https://github.com/n0mver/usecontextmenu-react/tree/main/example) folder

```tsx
import React, {useRef} from "react";
import {ContextMenu, ContextMenuItem, useContextMenu} from 'usecontextmenu-react';

const Example = () => {
    const {menuProps, onContextMenu, visibleOnPosition} = useContextMenu();

    const blockStyle = {
        height: '200px',
        backgroundColor: 'tomato',
        margin: '30px 0'
    }
    
    return (
        <div>
            <div onContextMenu={onContextMenu} style={blockStyle}/>

            <ContextMenu {...menuProps}>
                <ContextMenuItem>Lorem ipsum dolor</ContextMenuItem>
                <ContextMenuItem disabled>Disabled</ContextMenuItem>
                <ContextMenuItem onClick={() => console.log('Click!')}>onClick</ContextMenuItem>
                <ContextMenuItem>Lorem ipsum dolor sit</ContextMenuItem>
            </ContextMenu>
        </div>
    );
}
```

## API

### `useContextMenu({onShow, onHide})`

`onShow` - Called when the menu is visible

`onHide` - Called when the menu is hidden

This hook returns an object containing the following properties:

`onContextMenu` - The event that triggered the context menu

`menuProps` - Context menu props

`visibleOnPosition` - Display the context menu on custom position

## License

MIT © [n0mver](https://github.com/n0mver)


