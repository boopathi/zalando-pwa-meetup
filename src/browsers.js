import React from 'react';
import {
  List,
  Link,
  ListItem,
  Heading,
  Slide
} from 'spectacle';

export default <Slide bgColor='#673AB7' transition={['slide']}>
  <Heading size={4}>Browser Support</Heading>
  <List>
    <ListItem>Chrome - 45+</ListItem>
    <ListItem>Firefox - 44+</ListItem>
    <ListItem>Opera - 37+</ListItem>
    <ListItem>Edge -&nbsp;
      <Link target="_blank" className='link' href="https://developer.microsoft.com/en-us/microsoft-edge/platform/status/serviceworker">
        In Development
      </Link>
    </ListItem>
    <ListItem>Safari -&nbsp;
      <Link target="_blank" className='link' href="https://webkit.org/status/#specification-service-workers">
        Under consideration
      </Link>
    </ListItem>
</List>
</Slide>
