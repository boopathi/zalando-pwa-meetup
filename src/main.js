import React, {Component} from 'react';
import {render} from 'react-dom';
import {Spectacle, Deck} from 'spectacle';

import theme from './theme';

import Title from './title';
import Definition from './definition';
import Capability from './capability';
import Safe from './safe';
import Manifest from './manifest';
import DefineSW from './define-sw';
import SampleSW from './sample-sw';
import SWToolbox from './sw-toolbox';
import Push from './sample-push';
import Future from './future';
import {Thankyou} from './trivial';

const slidesOrder = [
  Title,
  Definition,
  Capability,
  Safe,
  Manifest,
  DefineSW,
  SampleSW,
  SWToolbox,
  Push,
  Future,
  Thankyou
];

class Show extends Component {
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
