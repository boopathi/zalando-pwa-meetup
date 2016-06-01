import React from 'react';
import {
	Heading,
	CodePane,
  Slide
} from 'spectacle';

import manifestFile from 'raw!../assets/sample-manifest';

export default <Slide transition={['slide']}>
	<Heading size={3} lineHeight={2}>
		Manifest.json
	</Heading>
	<CodePane className='code' lang={'javascript'} source={manifestFile}/>
</Slide>
