import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default <CodeSlide
  transition={[]}
  lang='js'
  code={require('raw!../assets/sample-sw.js')}
  ranges={[
    { loc: [8, 8], title: 'Sample Service Worker' },
    { loc: [0, 2] },
    { loc: [3, 7] },

    // install event
    { loc: [8, 14], note: 'Install event' },
    { loc: [9, 13], note: 'Precache resources' },
    { loc: [9, 10] },
    { loc: [10, 11] },
    { loc: [11, 12] },

    // activate event
    { loc: [15, 27], note: 'Activate event' },
    { loc: [16, 26], note: 'Remove old cache' },
    { loc: [17, 18] },
    { loc: [18, 24] },
    { loc: [20, 22] },

    // fetch event
    { loc: [49, 67], note: 'Fetch event'},
    { loc: [51, 56], note: 'static resources' },
    { loc: [52, 53] },

    // Read through cache
    { loc: [53, 54] },
    { loc: [43, 48] },
    { loc: [45, 46] },
    { loc: [46, 47] },

    //Read through network
    { loc: [28, 42] },
    { loc: [29, 30] },
    { loc: [31, 36] },
    { loc: [33, 34] },
    { loc: [34, 35] },
    { loc: [37, 41] },

    { loc: [57, 62], note: 'app root' },
    { loc: [59, 60] },
    { loc: [63, 65], note: 'everything else - network only' },

  ]}/>
