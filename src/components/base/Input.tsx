import { FC } from 'react';
import { Input as BaseInput, InputProps } from '@mui/base';

export const Input: FC<InputProps> = (props) => {
  return (
    <BaseInput
      slotProps={{
        input: {
          className:
            'body-large rounded-[32px] border-none px-4 py-3 text-on-surface focus:bg-surface-5 w-full outline active:outline-none outline-outline-variant',
          ...props.slotProps?.input,
        },
      }}
      {...props}
    />
  );
};
