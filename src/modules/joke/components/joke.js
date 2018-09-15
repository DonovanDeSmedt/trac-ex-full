import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JokeHeader from './joke-header';
import JokeList from './joke-list';
import JokeInput from './joke-input';

class Joke extends Component {
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
        <JokeList
          jokes={jokes}
          parseUrl={this.parseUrl}
          getAvatarForUser={this.getAvatarForUser}
          users={users}
          ownId={ownId}
        />
        <JokeInput handleMessageSend={this.onMessageSend} />
      </div>
    );
  }
}
Joke.propTypes = {
  addMessage: PropTypes.func.isRequired,
  jokes: PropTypes.array.isRequired,
};
export default Joke;
