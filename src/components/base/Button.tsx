import { FC, PropsWithChildren } from 'react';
import { Button as BaseButton, ButtonProps } from '@mui/base';
import { cn } from '~/lib/utils';

type Props = ButtonProps & {
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
};

export const Button: FC<PropsWithChildren<Props>> = ({ children, variant = 'text', color = 'primary', ...props }) => {
  const className = cn(
    'py-2.5 px-6',
    {
      'hover:bg-primary/10 active:bg-primary/20': color === 'primary',
      'hover:bg-secondary/10 active:bg-secondary/10': color === 'secondary',
      'bg-primary text-on-primary': variant === 'contained' && color === 'primary',
      'bg-secondary text-on-secondary': variant === 'contained' && color === 'secondary',
      'bg-on-surface/10 text-on-surface': variant === 'outlined',
      'text-primary': variant === 'text' && color === 'primary',
      'text-secondary': variant === 'text' && color === 'secondary',
      'bg-on-surface/15 text-on-surface cursor-not-allowed': props.disabled,
    },
    props.className,
  );

  return (
    <BaseButton {...props} className={className}>
      {children}
    </BaseButton>
  );
};
