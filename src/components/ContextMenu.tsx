import {ForwardedRef, forwardRef} from 'react';
import './style.scss';
import {ContextMenuProps} from '../types';
import cn from 'classnames';

export const ContextMenu = forwardRef(({
                                    anchorPoint,
                                    visible,
                                    children,
                                    className,
                                    style,
                                    ...rest
                                }: ContextMenuProps, ref:ForwardedRef<HTMLDivElement>) => {

    const classNames = cn('contextmenu', className);

    const menuStyle = {
        ...style,
        left: anchorPoint.x,
        top: anchorPoint.y,
    };

    return (
        <>
            {visible && (
                <div
                    {...rest}
                    className={classNames}
                    style={menuStyle}
                    ref={ref}
                    onContextMenu={(e) => e.preventDefault()}
                >
                    {children}
                </div>
            )}
        </>
    );
});