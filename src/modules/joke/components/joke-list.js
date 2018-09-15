import React from 'react';
import PropTypes from 'prop-types';
import { MessageList, MessageGroup } from '@livechat/ui-kit';
import JokeDetail from './joke-detail';

const JokeList = ({ jokes, parseUrl, getAvatarForUser, ownId, users }) => (
  <div
    style={{
      flexGrow: 1,
      minHeight: 0,
      height: 'calc(100vh - 170px)',
      overflowY: 'scroll',
    }}
  >
    <MessageList active containScrollInSubtree>
      {jokes.map(message => (
        <MessageGroup key={message.timestamp} onlyFirstWithMeta>
          <JokeDetail
            message={message}
            parseUrl={parseUrl}
            getAvatarForUser={getAvatarForUser}
            users={users}
            ownId={ownId}
          />
        </MessageGroup>
      ))}
    </MessageList>
  </div>
);

JokeList.propTypes = {
  parseUrl: PropTypes.func.isRequired,
  getAvatarForUser: PropTypes.func.isRequired,
  ownId: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired,
  jokes: PropTypes.array.isRequired,
};
export default JokeList;
