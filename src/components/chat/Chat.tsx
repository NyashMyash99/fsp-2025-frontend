import { type JSX, useState } from 'react';
import { Card, CardActions, CardContent, Icon } from '@mui/material';
import { orUndefined } from '../../utils/helpers/сondition.helpers.js';
import { ChatMessage } from './ChatMessage.js';
import { Message } from '../../utils/types/enums/message.enum.js';
import { useTranslation } from 'react-i18next';
import { IconedInput } from '../input/IconedInput.js';
import { type GetMessageResponse } from '../../stores/conversation/conversations.dto.js';
import {
  useLazyCreateConversationQuery,
  useLazyCreateMessageQuery,
} from '../../stores/conversation/conversations.api.js';
import { useNavigate } from 'react-router-dom';

export interface IChatProps {
  id?: string;
  fullwidth?: boolean;
  fullscreen?: boolean;
  messages?: GetMessageResponse[];
}

export function Chat({
  id,
  fullwidth = false,
  fullscreen = false,
  messages: initMessages = [],
}: IChatProps): JSX.Element {
  const [text, setText] = useState<string>('');
  // Надо переписать, слишком части триггериться.
  const [messages, setMessages] = useState<GetMessageResponse[]>(initMessages);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const [createConversation] = useLazyCreateConversationQuery();
  const [createMessage] = useLazyCreateMessageQuery();

  async function onCreateConversation() {
    const { isError, data } = await createConversation({
      message: { text },
    });

    if (isError || !data) return;

    navigate(data.id);
  }

  async function sendMessage() {
    if (!text) return;
    if (!messages?.length) return onCreateConversation();
    if (!id) return;

    const { isError, data } = await createMessage({ id, text });
    if (isError || !data) return;

    setMessages(data.messages);
    setText('');
  }

  return (
    <Card
      sx={{
        width: '100%',
        height: orUndefined(fullscreen, '100%'),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: orUndefined(fullwidth, 1),
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          padding: '32px !important',
          overflowY: 'auto',
          flexGrow: 1,
          minHeight: 0,
        }}
      >
        <ChatMessage sender="bot">{t(Message.CHAT_FIRST_MESSAGE)}</ChatMessage>

        {messages?.map((message) => (
          <ChatMessage
            key={`${message.text}${new Date()}`}
            sender={message.type}
          >
            {message.text}
          </ChatMessage>
        ))}
      </CardContent>

      <CardActions sx={{ padding: '0 32px 32px 32px !important' }}>
        <IconedInput
          value={text}
          placeholder={t(Message.CHAT_INPUT_LABEL)}
          fullWidth
          endIcon={
            <Icon
              baseClassName="fas"
              className="fa-paper-plane"
              color="primary"
              fontSize="medium"
              sx={{ cursor: 'pointer' }}
              onClick={sendMessage}
            />
          }
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== 'Enter') return;

            e.preventDefault();
            void sendMessage();
          }}
        />
      </CardActions>
    </Card>
  );
}
