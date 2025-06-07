import type { JSX } from 'react';
import { CircularProgress, Stack } from '@mui/material';

export function ChatPage(): JSX.Element {
  return (
    <Stack>
      <CircularProgress
        size="25%"
        sx={{ alignSelf: 'center', marginTop: '25%' }}
      />
    </Stack>
  );
}
