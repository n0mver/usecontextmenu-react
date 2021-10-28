import {ContextMenuItemProps, DF} from '../types';
import cn from 'classnames';
import {MouseEvent} from 'react';

export const ContextMenuItem = ({
                                    disabled = false,
                                    children,
                                    onClick = DF,
                                    className,
                                    style,
                                    ...rest
                                }: ContextMenuItemProps) => {
    const classNames = cn('contextmenu__item', {'contextmenu__item--disabled': disabled}, className);

    const handleClickEvent = (e: MouseEvent<HTMLElement>) => {
        disabled ?  e.stopPropagation() : onClick(e);
    };

    return (
        <div {...rest}
            className={classNames}
            style={style}
            onClick={handleClickEvent}
            aria-disabled={disabled}
        >
            {children}
        </div>
    );
};