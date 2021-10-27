import {ForwardedRef, forwardRef} from 'react';
import './style.scss';
import {ContextMenuProps} from '../types/types';
import cn from 'classnames';

export const ContextMenu = forwardRef(({
                                    anchorPoint,
                                    visible,
                                    children,
                                    className,
                                    ...rest
                                }: ContextMenuProps, ref: ForwardedRef<HTMLDivElement>) => {

    const classNames = cn('contextmenu', className);

    return (
        <>
            {visible && (
                <div
                    {...rest}
                    className={classNames}
                    style={{
                        top: anchorPoint?.y,
                        left: anchorPoint?.x,
                    }}
                    ref={ref}
                    onContextMenu={(e) => e.preventDefault()}
                >
                    {children}
                </div>
            )}
        </>
    );
});