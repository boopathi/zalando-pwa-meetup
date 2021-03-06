import React from 'react';
import {
  Heading,
  Text,
  Image,
  Slide
} from 'spectacle';

export default <Slide bgColor='#FF9800' transition={['slide']}>
  <Heading size={4}>
    Secure SSL/HTTPS
  </Heading>
  <Text fit lineHeight={3}>
    {'A service worker has a lot of power. We wouldn\'t want it to fall into the wrong hands.'}
  </Text>
  <Image src={'./static/https.png'} height={300} />
</Slide>
