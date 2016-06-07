import React from 'react';
import {
  Heading,
  Text,
  Image,
  Slide
} from 'spectacle';

export default <Slide transition={['slide']}>
  <Heading size={4}>
    Secure SSL/HTTPS
  </Heading>
  <Text fit lineHeight={3}>
    A service worker has a lot of power. We wouldn't want it to fall into the wrong hands.
  </Text>
  <Image src={'./static/padlock.jpg'} width={300} height={300} />
</Slide>
