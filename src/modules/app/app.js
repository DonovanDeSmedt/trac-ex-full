import React from 'react';
import { Route } from 'react-router-dom';
import {
  ThemeProvider,
  darkTheme,
  elegantTheme,
  purpleTheme,
} from '@livechat/ui-kit';
import Loadable from '../utils/loadable';

const AsyncJoke = Loadable({
  loader: () =>
    import(/* webpackChunkName: "joke" */ '../joke/containers/joke-container'),
});

const themes = {
  defaultTheme: {
    FixedWrapperMaximized: {
      css: {
        boxShadow: '0 0 1em rgba(0, 0, 0, 0.1)',
      },
    },
  },
  purpleTheme: {
    ...purpleTheme,
    TextComposer: {
      ...purpleTheme.TextComposer,
      css: {
        ...purpleTheme.TextComposer.css,
        marginTop: '1em',
      },
    },
    OwnMessage: {
      ...purpleTheme.OwnMessage,
      secondaryTextColor: '#fff',
    },
  },
  elegantTheme: {
    ...elegantTheme,
    Message: {
      ...darkTheme.Message,
      secondaryTextColor: '#fff',
    },
    OwnMessage: {
      ...darkTheme.OwnMessage,
      secondaryTextColor: '#fff',
    },
  },
  darkTheme: {
    ...darkTheme,
    Message: {
      ...darkTheme.Message,
      css: {
        ...darkTheme.Message.css,
        color: '#fff',
      },
    },
    OwnMessage: {
      ...darkTheme.OwnMessage,
      secondaryTextColor: '#fff',
    },
    TitleBar: {
      ...darkTheme.TitleBar,
      css: {
        ...darkTheme.TitleBar.css,
        padding: '1em',
      },
    },
  },
};

const App = () => (
  <div>
    <ThemeProvider theme={themes.defaultTheme}>
      <div>
        <Route exact={true} path="/" component={AsyncJoke} />
      </div>
    </ThemeProvider>
  </div>
);

export default App;
