import { FC, PropsWithChildren } from 'react';
import { Button, ButtonProps } from '@mui/base';
import { cn } from '~/lib/utils';

export const IconButton: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className={cn(
        'h-8 w-8 rounded-full border border-outline-variant hover:bg-secondary/10 active:bg-secondary/20',
        props.className,
      )}
    >
      {children}
    </Button>
  );
};
