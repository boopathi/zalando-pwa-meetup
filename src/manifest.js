import React from 'react';
import {
	Heading,
	CodePane,
	Text,
  Slide
} from 'spectacle';

import manifestFile from 'raw!../assets/sample-manifest';
const link = '<link rel="manifest" href="manifest.json"/>';

export default <Slide transition={['slide']}>
  <Heading size={4} lineHeight={1.5}>
    Add to Home Screen
  </Heading>
  <Text lineHeight={1.5}>{link}</Text>
  <CodePane className='code' lang={'javascript'} source={manifestFile}/>
</Slide>
