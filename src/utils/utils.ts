import {AnchorPoint} from '../types/types';

export const positionContextMenu = <T extends HTMLElement>(
    node: T,
    anchorPoint?: Partial<AnchorPoint>,
) => {
    const {innerWidth: windowWidth, innerHeight: windowHeight} = window;
    const {offsetWidth: menuWidth, offsetHeight: menuHeight} = node;

    let {x = 0, y = 0} = anchorPoint || {};
    if (x + menuWidth > windowWidth) {
        x = x - menuWidth - 2;
    }

    if (y + menuHeight > windowHeight) {
        y = y - menuHeight - 2;
    }
    return {x, y};
}