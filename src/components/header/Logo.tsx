import { type JSX } from 'react';
import { Stack, SvgIcon, Typography } from '@mui/material';
import { Message } from '../../utils/types/enums/message.enum.js';
import { useTranslation } from 'react-i18next';

import LogoIcon from '../../assets/icons/logo.svg?react';
import { useNavigate } from 'react-router-dom';

export function Logo(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap="16px"
      sx={{ cursor: 'pointer' }}
      onClick={() => navigate('/')}
    >
      <Typography variant="h3">
        <SvgIcon color="primary" fontSize="inherit">
          <LogoIcon />
        </SvgIcon>
      </Typography>

      <Typography component="div" variant="h3">
        <b>{t(Message.GLOBAL_VIBE)}</b>
        {t(Message.GLOBAL_GO)}
      </Typography>
    </Stack>
  );
}
