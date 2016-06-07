import React from 'react';
import {Slide, Heading, Link, List, ListItem} from 'spectacle';

export default <Slide transition={['slide']}>
  <Heading lineHeight={2} size={4}>Whats Missing?</Heading>
  <List>
    <ListItem>Differentiate PWA from existing websites</ListItem>
    <ListItem>Control 'Add to Homescreen' Prompt(overkill)</ListItem>
    <ListItem>Ambient Badging</ListItem>
  </List>
  <Link className='link' textSize={22} href="https://infrequently.org/2016/06/pwa-discovery-you-aint-seen-nothin-yet/">PWA Discovery by Alex Russell</Link>
</Slide>
