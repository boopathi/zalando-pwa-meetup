import React from 'react';
import {render} from 'react-dom';
import {
  Spectacle,
  Deck,
  Link,
  Slide,
  Heading
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import theme from './theme';

import Title from './title';
import {Pass} from './fetch';

class Show extends React.Component {
  render() {
    return <Spectacle theme={theme}>
      <Deck transition={['slide']} transitionDuration={1000}>
        {Title}
        {Pass}
      </Deck>
    </Spectacle>
  }
}

const slideshow = document.getElementById('slideshow');

render(<Show/>, slideshow);
