import React from 'react';
import { PropTypes } from 'prop-types';
import {
  TextInput,
  TextComposer,
  Row,
  Fill,
  Fit,
  SendButton,
} from '@livechat/ui-kit';

const JokeInput = ({ handleMessageSend }) => (
  <TextComposer onSend={handleMessageSend}>
    <Row align="center">
      <Fill>
        <TextInput />
      </Fill>
      <Fit>
        <SendButton />
      </Fit>
    </Row>
  </TextComposer>
);
JokeInput.propTypes = {
  handleMessageSend: PropTypes.func.isRequired,
};
export default JokeInput;
