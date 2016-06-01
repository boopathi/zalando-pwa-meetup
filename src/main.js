import React from 'react';
import {render} from 'react-dom';
import {
  Spectacle,
  Deck,
  Link,
  Slide,
  Heading
} from 'spectacle';

import theme from './theme';

import Title from './title';
import {Pass} from './fetch';

class Show extends React.Component {
  render() {
    return <Spectacle theme={theme}>
      <Deck transition={['zoom', 'slide']} transitionDuration={200}>
        <Title transition={['slide']} bgColor='#00796B' />
        <Pass transition={['slide']} bgColor='#7C4DFF' />
      </Deck>
    </Spectacle>
  }
}

const slideshow = document.getElementById('slideshow');

render(<Show/>, slideshow);
