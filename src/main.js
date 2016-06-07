import React, {Component} from 'react';
import {render} from 'react-dom';
import {Spectacle, Slide, Image, Deck} from 'spectacle';

import theme from './theme';

import Title from './title';
import Definition from './definition';
import Capability from './capability';
import Safe from './safe';
import Manifest from './manifest';
import SampleSW from './sample-sw';
import SWToolbox from './sw-toolbox';
import Push from './sample-push';
import BrowserSupport from './browsers';
import Future from './future';
import {Thankyou} from './trivial';

// small slides
const DefineSW = <Slide transition={['slide']} bgImage='/static/service-worker.jpg'/>

const manifestExample = <Slide transition={['slide']}>
  <Image src={'./static/airhorner.gif'} height={window.innerHeight - 100} />
</Slide>;

const slidesOrder = [
  Title,
  Definition,
  Capability,
  Manifest,
  manifestExample,
  Safe,
  DefineSW,
  SampleSW,
  SWToolbox,
  Push,
  BrowserSupport,
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
