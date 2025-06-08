import { type JSX } from 'react';
import { Typography } from '@mui/material';
import { Message } from '../utils/types/enums/message.enum.js';
import { useTranslation } from 'react-i18next';

export function Logo(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Typography variant="h3">
      <b>{t(Message.GLOBAL_VIBE)}</b>
      {t(Message.GLOBAL_GO)}
    </Typography>
  );
}
