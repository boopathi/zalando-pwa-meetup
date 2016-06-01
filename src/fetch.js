import React from 'react';
import {
  Slide,
  Heading
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

export const Pass = <CodeSlide
  transition={[]}
  lang='js'
  code={require('raw!../assets/pass-fetch.js')}
  ranges={[
    { loc: [0, 8] },
    { loc: [1, 2] },
    { loc: [1, 2] },
    { loc: [2, 3] },
    { loc: [3, 4] },
    { loc: [4, 5] },
    { loc: [5, 6] },
  ]}
  />
