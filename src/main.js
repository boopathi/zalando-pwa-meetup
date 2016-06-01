import React from 'react';
import {render} from 'react-dom';
import {Spectacle, Deck} from 'spectacle';

import theme from './theme';

import Title from './title';
import {Pass} from './fetch';
import {Thankyou} from './trivial';

const slidesOrder = [
  Title,
  Pass,
  Thankyou
];

class Show extends React.Component {
  render() {
    return <Spectacle theme={theme}>
      <Deck
        transition={['slide']}
        transitionDuration={250}
        children={slidesOrder} />
    </Spectacle>
  }
}

const slideshow = document.getElementById('slideshow');

render(<Show/>, slideshow);
