import React from 'react';
import {Slide, Heading, Link, List, Text, ListItem} from 'spectacle';

export default <Slide bgColor='#455A64' transition={['slide']}>
  <Heading lineHeight={2} size={4}>{'What\'s next?'}</Heading>
  <List>
    <ListItem>Differentiate PWA from existing websites</ListItem>
    <ListItem>Control 'Add to Homescreen' Prompt(overkill)</ListItem>
    <ListItem>Ambient Badging</ListItem>
  </List>
  <Text textSize={25}>
    {'Source: '}
    <Link className='link' target="_blank" href="https://infrequently.org/2016/06/pwa-discovery-you-aint-seen-nothin-yet/">PWA Discovery</Link>
    {' by '}
    <Link className='link' target="_blank" href="https://twitter.com/slightlylate">Alex Russell</Link>
  </Text>
</Slide>
