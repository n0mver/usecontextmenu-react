import {HTMLAttributes, MouseEvent, ReactNode, RefObject} from 'react';

export interface AnchorPoint {
    x: number;
    y: number;
}

export interface ContextMenuState {
    x: number;
    y: number;
    visible: boolean;
}

export interface ContextMenuProps extends HTMLAttributes<HTMLElement> {
    anchorPoint: AnchorPoint;
    visible: boolean;
    children?: ReactNode;
    onShow?: () => void;
    onHide?: () => void;
}

export interface ContextMenuItemProps extends HTMLAttributes<HTMLElement> {
    disabled?: boolean;
    children: ReactNode;
}

export interface useContextMenuProps {
    onShow?: () => void;
    onHide?: () => void;
}
export interface BindMenuProps {
    visible: boolean;
    anchorPoint: AnchorPoint;
    ref: RefObject<HTMLDivElement>;
}
export interface ContextMenuReturn {
    menuProps: BindMenuProps;
    onContextMenu: (event: MouseEvent) => void;
    visibleOnPosition: (points: AnchorPoint) => void;
}

export const DF = () => {};