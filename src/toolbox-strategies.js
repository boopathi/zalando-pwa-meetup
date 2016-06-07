import React from 'react';
import {
  Slide, Heading, List, ListItem
} from 'spectacle';

export default <Slide bgColor='#616161' transition={['slide']}>
  <Heading>Strategies</Heading>
  <List>
    <ListItem>CacheOnly</ListItem>
    <ListItem>NetworkOnly</ListItem>
    <ListItem>CacheFirst</ListItem>
    <ListItem>NetworkFirst</ListItem>
    <ListItem>Fastest</ListItem>
  </List>
</Slide>
