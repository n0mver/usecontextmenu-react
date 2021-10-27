import {ContextMenuItemProps} from '../types/types';
import cn from 'classnames';
import {MouseEvent} from 'react';

export const ContextMenuItem = ({disabled = false ,children, onClick, className, style, ...rest}: ContextMenuItemProps) => {
    const classNames = cn('contextmenu__item', {'contextmenu__item--disabled': disabled}, className);

    const handleClickEvent = (e: MouseEvent) => {
        if (disabled || !onClick) return;
        onClick(e);
    };

    return (
        <div {...rest} className={classNames} style={style} onClick={handleClickEvent}>
            {children}
        </div>
    );
};