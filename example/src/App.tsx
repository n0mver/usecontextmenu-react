import React, {MouseEvent} from 'react';
import logo from './logo.svg';
import {ContextMenu, ContextMenuItem, useContextMenu} from 'usecontextmenu-react';

const blockStyle = {
    height: '200px',
    backgroundColor: 'tomato',
    margin: '30px 0'
}

const imgStyle = {
    width: '200px',
    display: 'block',
    margin: '20px auto',
    border: '1px black solid'
}

function App() {
    const {menuProps, onContextMenu, visibleOnPosition} = useContextMenu({onShow, onHide});

    function onShow() {
        console.log('Show');
    }

    function onHide() {
        console.log('Hide');
    }

    const setRandomPosition = (e: MouseEvent) => {
        e.stopPropagation()
        visibleOnPosition({x: Math.random() * window.innerWidth, y: Math.random() * window.innerWidth});
    }

    return (
        <div>
            <button onClick={setRandomPosition}>Set random position</button>
            <h2>Right-click on the block or on the React logo</h2>
            <div onContextMenu={onContextMenu} style={blockStyle}/>
            <img onContextMenu={onContextMenu} src={logo} style={imgStyle} alt=""/>

            <ContextMenu {...menuProps}>
                <ContextMenuItem>Lorem ipsum dolor</ContextMenuItem>
                <ContextMenuItem disabled>Disabled</ContextMenuItem>
                <ContextMenuItem onClick={() => console.log('Click!')}>onClick</ContextMenuItem>
                <ContextMenuItem>Lorem ipsum dolor sit</ContextMenuItem>
            </ContextMenu>
        </div>
    );
}


export default App;
