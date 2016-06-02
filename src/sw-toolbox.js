import React from 'react';
import CodeSlide from 'spectacle-code-slide';

const swFastestFirst = <div className='note-white'>
  <img src="static/sw-fastest-first.png"/>
  <text>First request</text>
</div>

const swFastestRest = <div className='note-white'>
  <img src="static/sw-fastest-rest.png"/>
  <text>All other requests</text>
</div>

export default <CodeSlide
  transition={[]}
  lang='js'
  code={require('raw!../assets/sw-toolbox.js')}
  ranges={[
    { loc: [8, 8], title: 'Service Worker toolbox' },
    { loc: [0, 1], note: 'import sw-toolbox code' },
    { loc: [2, 4] },
    { loc: [5, 9] },
    { loc: [10, 11], note: 'precache' },
    { loc: [12, 17], note: 'Resources from CDN' },
    { loc: [13, 14] },
    { loc: [15, 16] },
    { loc: [14, 15] },
    { loc: [14, 15], title: 'toolbox.fastest', note: swFastestFirst },
    { loc: [14, 15], title: 'toolbox.fastest', note: swFastestRest },
    { loc: [18, 22], note: 'App root' },
    { loc: [20, 21] },
  ]}/>
