import {MouseEvent, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {positionContextMenu} from '../utils';
import {AnchorPoint, ContextMenuState, DF, ContextMenuReturn, useContextMenuProps} from '../types';
import {usePrevious} from './usePrevious';

export const useContextMenu = ({onShow = DF, onHide = DF}: useContextMenuProps = {}): ContextMenuReturn => {
    const [state, setState] = useState<ContextMenuState>({x: 0, y: 0, visible: false});
    const ref = useRef<HTMLDivElement>(null);
    const wasVisible = usePrevious(state.visible);

    const onContextMenu = (e: MouseEvent) => {
        const {clientX, clientY} = e;
        e.preventDefault();
        setState(prevState => ({...prevState, x: clientX, y: clientY, visible: true}));
    };

    const visibleOnPosition = (points: AnchorPoint) => {
        setState(prevState => ({...prevState, ...points, visible: true}));
    };

    const hide = () => {
        setState(prevState => ({...prevState, visible: false}));
    };

    useLayoutEffect(() => {
        if (state.visible && ref.current) {
            const points = positionContextMenu(ref.current, {x: state.x, y: state.y});
            setState(prevState => ({...prevState, ...points}));
        }
    }, [state.visible, state.x, state.y]);


    useEffect(() => {
        if (state.visible !== wasVisible) {
            state.visible ? onShow() : onHide();
        }
    }, [state.visible, onShow, onHide]);

    useEffect(() => {
        if (state.visible) {
            window.addEventListener('resize', hide);
            window.addEventListener('wheel', hide);
            window.addEventListener('click', hide);
            window.addEventListener('scroll', hide);

            if (process.env.NODE_ENV !== 'development') {
                window.addEventListener('blur', hide);
            }
        }

        return () => {
            window.removeEventListener('resize', hide);
            window.removeEventListener('wheel', hide);
            window.removeEventListener('click', hide);
            window.removeEventListener('scroll', hide);

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