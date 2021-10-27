import {MouseEvent, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {positionContextMenu} from '../utils/utils';
import {AnchorPoint, ContextMenuState, DF, useContextMenuProps} from '../types/types';

export const useContextMenu = ({onShow = DF, onHide = DF}: useContextMenuProps = {}) => {
    const [state, setState] = useState<ContextMenuState>({x: 0, y: 0, visible: false});
    const ref = useRef<HTMLDivElement>(null);
    const onContextMenu = (event: MouseEvent) => {
        const {clientX, clientY} = event;
        event.preventDefault();
        setState(prevState => ({...prevState, x: clientX, y: clientY, visible: true}));
    };

    const visibleOnPosition = (points: AnchorPoint) => {
        setState(prevState => ({...prevState, ...points, visible: true}));
    };

    const hide = () => {
        setState(state => ({...state, visible: state.visible ? false : state.visible}));
        onHide();
    };

    useLayoutEffect(() => {
        if (state.visible && ref.current) {
            const points = positionContextMenu(ref.current, {x: state.x, y: state.y});
            setState(prevState => ({...prevState, x: points.x, y: points.y}));
            onShow();
        }
    }, [state.visible, state.x, state.y]);


    useEffect(() => {
        if (state.visible) {
            window.addEventListener('resize', hide);
            window.addEventListener('wheel', hide);
            // window.addEventListener('contextmenu', hide);
            window.addEventListener('click', hide);
            window.addEventListener('scroll', hide);
            if (process.env.NODE_ENV !== 'development') {
                window.addEventListener('blur', hide);
            }
        }

        return () => {
            window.removeEventListener('resize', hide);
            window.removeEventListener('wheel', hide);
            // window.removeEventListener('contextmenu', hide);
            window.removeEventListener('click', hide);
            window.removeEventListener('scroll', hide);
            // window.removeEventListener('blur', hide);

            if (process.env.NODE_ENV !== 'development') {
                window.removeEventListener('blur', hide);
            }
        };
    });

    const menuProps = {
        visible: state.visible,
        anchorPoint: {
            x: state.x,
            y: state.y
        },
        ref
    };
    return {
        menuProps,
        onContextMenu,
        visibleOnPosition
    };
};