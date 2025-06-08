import { type JSX } from 'react';
import {
  Box,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Robot } from '../components/Robot.js';
import { Message } from '../utils/types/enums/message.enum.js';
import { useTranslation } from 'react-i18next';
import { Chat } from '../components/chat/Chat.js';
import { Plane } from '../components/Plane.js';
import { Navigate, useParams } from 'react-router';
import { orEmpty } from '../utils/helpers/сondition.helpers.js';
import { useGetConversationByIdQuery } from '../stores/conversation/conversations.api.js';

const Underscored = styled('span')(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '10px',
    backgroundColor: theme.palette.primary.main,
  },
}));

function EmptyChatPage(): JSX.Element {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down('xl'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <>
      {orEmpty(!isLaptop, <Robot />)}

      <Stack
        justifyContent="space-around"
        gap="48px"
        sx={{
          width: {
            xs: '100%',
            xl: '47%',
          },
        }}
      >
        <Stack position="relative" gap="32px">
          <Typography variant={isMobile ? 'h3' : 'h1'}>
            {t(Message.HOME_TITLE)}{' '}
            <Underscored>{t(Message.HOME_TITLE_ACCENT)}</Underscored>
          </Typography>

          <Typography variant={isMobile ? 'body1' : 'h5'}>
            <Box component="span" color="primary.main" fontWeight="bold">
              {t(Message.HOME_DESCRIPTION_ACCENT)}
            </Box>{' '}
            {t(Message.HOME_DESCRIPTION)}
          </Typography>

          {orEmpty(!isLaptop, <Plane />)}
        </Stack>

        <Chat fullwidth={isLaptop} />
      </Stack>
    </>
  );
}

export function ChatPage(): JSX.Element {
  const { id } = useParams();

  if (!id) {
    return (
      <Stack direction="row" justifyContent="space-around" flexGrow={1}>
        <EmptyChatPage />
      </Stack>
    );
  }

  const {
    isLoading,
    isError,
    data: conversation,
  } = useGetConversationByIdQuery({ id });

  if (isLoading) return <></>;
  if (isError || !conversation) return <Navigate to=".." relative="route" />;

  return (
    <Stack direction="row" justifyContent="space-around" flexGrow={1}>
      <Chat id={id} fullscreen messages={conversation.messages} />
    </Stack>
  );
}
