import React from 'react';
import {
  Slide,
  Heading
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
// import Prism from 'prismjs';

export const Pass = class extends React.Component {
  render() {
    return <CodeSlide
      {...this.props}
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
      >
    </CodeSlide>
  }
}
