import PropTypes from 'prop-types';
import React from 'react';
import {
  Avatar,
  TitleBar,
  AgentBar,
  Title,
  Subtitle,
  Row,
  IconButton,
  CloseIcon,
  Column,
} from '@livechat/ui-kit';

const JokeHeader = ({ currentAgent, parseUrl }) => (
  <div>
    <TitleBar
      rightIcons={[
        <IconButton key="close">
          <CloseIcon />
        </IconButton>,
      ]}
      title="Welcome to MWI joke generator"
    />
    {currentAgent && (
      <AgentBar>
        <Row>
          <Column>
            <Avatar imgUrl={parseUrl(currentAgent.avatarUrl)} />
          </Column>
          <Column>
            <Title>{currentAgent.name}</Title>
            <Subtitle>Support hero</Subtitle>
          </Column>
        </Row>
      </AgentBar>
    )}
  </div>
);
JokeHeader.propTypes = {
  currentAgent: PropTypes.object,
  parseUrl: PropTypes.func.isRequired,
};
export default JokeHeader;
