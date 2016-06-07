import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  Spectacle, Slide, Image, Deck, Heading, Link
} from 'spectacle';

import theme from './theme';

import Title from './title';
import Definition from './definition';
import Capability from './capability';
import Safe from './safe';
import Manifest from './manifest';

import SampleSW from './sample-sw';
import SWToolbox from './sw-toolbox';
import SWToolboxStrategies from './toolbox-strategies';

import Push from './sample-push';
import BrowserSupport from './browsers';
import Future from './future';
import {Thankyou} from './trivial';

// small slides
const DefineSW = <Slide transition={['slide']} bgImage='static/service-worker.jpg'/>

const manifestExample = <Slide bgColor='#8BC34A' transition={['slide']}>
  <Image src={'./static/airhorner.gif'} height={window.innerHeight - 100} />
</Slide>;

const SWToolboxIntro = <Slide transitions={['slide']}>
  <Heading>sw-toolbox</Heading>
  <Link className='link' target='_blank' href='https://github.com/GoogleChrome/sw-toolbox'>{'https://github.com/GoogleChrome/sw-toolbox'}</Link>
</Slide>

const slidesOrder = [
  Title,
  Definition,
  Capability,
  Manifest,
  manifestExample,
  Safe,

  // service worker
  DefineSW,
  SampleSW,

  // sw-toolbox
  SWToolboxIntro,
  SWToolbox,
  SWToolboxStrategies,

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
