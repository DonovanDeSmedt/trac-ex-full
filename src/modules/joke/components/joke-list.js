import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MessageList, MessageGroup } from '@livechat/ui-kit';
import JokeHeader from './joke-header';
import Joke from './joke';
import JokeInput from './joke-input';

class JokeList extends Component {
  state = {
    ownId: 'S1536239757.f81d2f734b',
    users: {
      'S1536239757.f81d2f734b': {
        id: 'S1536239757.f81d2f734b',
        name: 'Client',
      },
      bot: {
        id: 'bot',
        name: 'Bot',
        avatarUrl:
          'https://static.staging.livechatinc.com/1520/P10064EDGF/7970c9d036275c2ee9282d15535ef57b/botengine-avatar.png',
      },
    },
  };

  onMessageSend = text => {
    this.props.addMessage({
      authorId: this.state.ownId,
      id: this.state.ownId,
      parsedDate: '13 Sep 14:54',
      text,
      timestamp: new Date().getTime(),
    });
  };

  getAvatarForUser = (userId, users) => {
    const foundUser = users[userId];
    if (foundUser && foundUser.avatarUrl) {
      return foundUser.avatarUrl;
    }
    return null;
  };

  parseUrl = url => {
    const res =
      url &&
      `https://${url.replace(/^(http(s)?:\/\/)/, '').replace(/^\/\//, '')}`;
    return res;
  };

  render() {
    const { jokes } = this.props;
    const { ownId, users } = this.state;
    const currentAgent = {
      avatarUrl:
        'https://static.staging.livechatinc.com/1520/P10064EDGF/7970c9d036275c2ee9282d15535ef57b/botengine-avatar.png',
      id: 'bot',
      name: 'Joke Bot',
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <JokeHeader currentAgent={currentAgent} parseUrl={this.parseUrl} />
        <div
          style={{
            flexGrow: 1,
            minHeight: 0,
            height: 'calc(100vh - 170px)',
            overflowY: 'scroll',
          }}
        >
          <MessageList active containScrollInSubtree>
            {jokes.map((message, index) => (
              <MessageGroup key={index} onlyFirstWithMeta>
                <Joke
                  message={message}
                  parseUrl={this.parseUrl}
                  getAvatarForUser={this.getAvatarForUser}
                  users={users}
                  ownId={ownId}
                />
              </MessageGroup>
            ))}
          </MessageList>
        </div>
        <JokeInput handleMessageSend={this.onMessageSend} />
      </div>
    );
  }
}
JokeList.propTypes = {
  addMessage: PropTypes.func.isRequired,
  jokes: PropTypes.array.isRequired,
};
export default JokeList;
