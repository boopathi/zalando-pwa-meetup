import React from 'react';
import {
  Heading,
  List,
  ListItem,
  Slide
} from 'spectacle';

export default <Slide transition={['slide']} bgColor='#303F9F'>
  <Heading>A few things to note</Heading>
  <List>
    <ListItem>~24 hour refresh</ListItem>
    <ListItem>{'fetching sw.js doesn\'t go through service worker'}</ListItem>
    <ListItem>{'Panic button (or) SW Kill Switch'}</ListItem>
    <ListItem>{'301 - never'}</ListItem>
    <ListItem>{'If you get offline wrong, it\'s hard to make it right'}</ListItem>
  </List>
</Slide>
