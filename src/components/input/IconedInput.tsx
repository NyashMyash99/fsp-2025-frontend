import { type ReactNode } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField, type TextFieldProps } from '@mui/material';

interface IconedInputProps {
  icon?: ReactNode;
  endIcon?: ReactNode;
}

export function IconedInput({
  icon,
  endIcon,
  slotProps,
  children,
  ...props
}: IconedInputProps & TextFieldProps) {
  return (
    <TextField
      {...props}
      slotProps={{
        input: {
          ...(endIcon
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    {endIcon || <></>}
                  </InputAdornment>
                ),
              }
            : {}),
          ...slotProps,
          ...(icon
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    {icon || <></>}
                  </InputAdornment>
                ),
              }
            : {}),
        },
      }}
    >
      {children}
    </TextField>
  );
}
