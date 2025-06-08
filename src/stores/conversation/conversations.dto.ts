// Conversations
export interface GetConversationRequest {
  id: string;
}

export interface GetConversationResponse {
  messages: GetMessageResponse[];
}

export interface CreateConversationRequest {
  message: CreateMessageRequest;
}

export interface CreateConversationResponse {
  id: string;
}

// Messages
export enum MessageType {
  BOT = 'bot',
  HUMAN = 'human',
}

export interface GetMessageResponse {
  type: MessageType;
  text: string;
  payload: Record<string, any>;
}

export interface CreateMessageRequest {
  text: string;
}
