import React from 'react';
import {
  List,
  ListItem,
  Heading,
  Slide
} from 'spectacle';

export default <Slide transition={['slide']}>
  <Heading size={4}>Browser Support</Heading>
  <List>
    <ListItem>Chrome - 45+</ListItem>
    <ListItem>Firefox - 44+</ListItem>
    <ListItem>Opera - 37+</ListItem>
    <ListItem>Edge - In Development</ListItem>
    <ListItem>Safari - Under consideration</ListItem>
</List>
</Slide>
