import { FC, PropsWithChildren } from 'react';
import { Button, ButtonProps } from '@mui/base';
import clsx from 'clsx';

export const IconButton: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className={clsx(
        'hover:bg-secondary/10 active:bg-secondary/20 h-8 w-8 rounded-full border border-outline-variant',
        props.className,
      )}
    >
      {children}
    </Button>
  );
};
