import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  Spectacle, Slide, Image, Deck, Heading, Link, Text
} from 'spectacle';

import theme from './theme';

import Title from './title';
import Definition from './definition';
import Capability from './capability';
import Safe from './safe';
import Manifest from './manifest';

import SampleSW from './sample-sw';
import SWToolbox from './sw-toolbox';
import {SWToolboxStrategies, SWToolboxOptions} from './toolbox-strategies';
import SWGotchas from './gotchas';

import Push from './sample-push';
import BrowserSupport from './browsers';
import Future from './future';
import {Thankyou, Links} from './trivial';

// small slides
const DefineSW = <Slide transition={['slide']} bgImage='static/service-worker.jpg'/>;
const PushNotification = <Slide bgColor='#E64A19' transition={['slide']}>
  <Heading size={1}>Push Notifications</Heading>
</Slide>;
const manifestExample = <Slide bgColor='#8BC34A' transition={['slide']}>
  <Text lineHeight='2'>Launch from Home Screen</Text>
  <Image src={'static/airhorner.gif'} height={window.innerHeight - 200} />
</Slide>;

const installPrompt = <Slide transition={['slide']}>
  <Text lineHeight='2'>Install Prompt</Text>
  <img src={'static/install-prompt.png'} height={window.innerHeight-200}/>
</Slide>

const SWToolboxIntro = <Slide bgColor='#388E3C' transition={['slide']}>
  <Heading>sw-toolbox</Heading>
  <Link className='link' target='_blank' href='https://github.com/GoogleChrome/sw-toolbox'>{'https://github.com/GoogleChrome/sw-toolbox'}</Link>
</Slide>;

const SWNotJustOffline = <Slide transition={['slide']}>
  <Heading>{'It\'s not just about offline'}</Heading>
</Slide>;

const PWADemo = <Slide bgColor='#FFC107' transition={['slide']}>
  <Heading size={4}>
    <Link className='link' target='_blank' href="https://vigneshh.in/zalando-pwa-demo/step4/">DEMO</Link>
  </Heading>
</Slide>;

const slidesOrder = [
  Title,
  Definition,
  Capability,

  Manifest,
  installPrompt,
  manifestExample,
  Safe,

  // service worker
  DefineSW,
  SampleSW,

  // sw-toolbox
  SWToolboxIntro,
  SWToolbox,
  SWToolboxStrategies,
  SWToolboxOptions,

  SWNotJustOffline,
  SWGotchas,

  PushNotification,
  Push,
  PWADemo,
  BrowserSupport,

  Future,
  Links,
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
