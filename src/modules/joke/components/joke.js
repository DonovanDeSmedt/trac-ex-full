import React from 'react';
import PropTypes from 'prop-types';
import {
  Message,
  MessageText,
  MessageButtons,
  MessageButton,
  MessageTitle,
  MessageMedia,
} from '@livechat/ui-kit';

const Joke = ({ message, parseUrl, getAvatarForUser, users, ownId }) => (
  <Message
    avatarUrl={parseUrl(getAvatarForUser(message.authorId, users))}
    isOwn={message.authorId === ownId || message.own === true}
    key={message.id}
  >
    {message.title && <MessageTitle title={message.title} />}
    {message.text && <MessageText>{message.text}</MessageText>}
    {message.imageUrl && (
      <MessageMedia>
        <img src={message.imageUrl} />
      </MessageMedia>
    )}
    {message.buttons &&
      message.buttons.length !== 0 && (
        <MessageButtons>
          {message.buttons.map((button, buttonIndex) => (
            <MessageButton
              key={buttonIndex}
              label={button.title}
              onClick={() => {
                this.sendMessage(button.postback);
              }}
            />
          ))}
        </MessageButtons>
      )}
  </Message>
);
Joke.propTypes = {
  message: PropTypes.object.isRequired,
  parseUrl: PropTypes.func.isRequired,
  getAvatarForUser: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  ownId: PropTypes.string.isRequired,
};
export default Joke;
