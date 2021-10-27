import {CSSProperties, MouseEvent, ReactNode} from 'react';

export interface AnchorPoint {
    x: number;
    y: number;
}

export interface ContextMenuState {
    x: number;
    y: number;
    visible: boolean;
}

export interface ContextMenuProps {
    className?: string;
    anchorPoint: AnchorPoint;
    visible: boolean;
    children?: ReactNode;
    onShow?: () => void;
    onHide?: () => void;
}

export interface ContextMenuItemProps {
    disabled?: boolean;
    className?: string;
    children: ReactNode;
    onClick?: (event?: MouseEvent) => void;
    style?: CSSProperties;
}

export interface useContextMenuProps {
    onShow?: () => void;
    onHide?: () => void;
}

export const DF = () => {};