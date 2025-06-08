import { type JSX, type PropsWithChildren } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';

import robotEgypt from '../../assets/images/robot-egypt.png';
import { useThemeState } from '../../stores/theme/theme.slice.js';
import { ThemeMode } from '../../utils/types/enums/theme-mode.enum.js';
import { BACKGROUND_COLOR } from '../../utils/constants/color.constants.js';

export interface IChatMessageProps extends PropsWithChildren {
  sender: 'bot' | 'human';
}

export function ChatMessage({
  sender,
  children,
}: IChatMessageProps): JSX.Element {
  const { theme } = useThemeState();

  if (sender === 'human') {
    return (
      <Stack
        width="70%"
        padding="16px 32px"
        borderRadius="10px"
        alignSelf="self-end"
        sx={{
          background:
            theme === ThemeMode.LIGHT ? BACKGROUND_COLOR.darken : '#323232',
        }}
      >
        {children}
      </Stack>
    );
  }

  return (
    <Stack gap="8px">
      <Stack direction="row" alignItems="center" gap="16px">
        <Avatar src={robotEgypt} />
        <Typography variant="h5">VibeGo</Typography>
      </Stack>

      <Stack direction="row" gap="16px">
        <Avatar sx={{ visibility: 'hidden' }} />
        <Typography variant="h6">{children}</Typography>
      </Stack>
    </Stack>
  );
}
