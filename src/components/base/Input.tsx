import { FC } from 'react';
import { Input as BaseInput, InputProps } from '@mui/base';
import { cn } from '~/lib/utils';

export const Input: FC<InputProps> = (props) => {
  return (
    <BaseInput
      slotProps={{
        input: {
          ...props.slotProps?.input,
          className: cn(
            'body-large rounded-[32px] border-none px-4 py-3 text-on-surface w-full outline outline-[0.5px] outline-outline-variant focus:outline-primary',
          ),
        },
      }}
      {...props}
    />
  );
};
