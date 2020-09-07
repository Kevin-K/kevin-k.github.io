import React from 'react';
export default {
  h1: props => <h1 style={{ fontSize: '2em', marginTop: '6em' }} {...props} />,
  h2: props => <h2 style={{ marginTop: '3em' }} {...props} />,
  h3: props => <h3 style={{ marginTop: '2em' }} {...props} />,
  h4: props => <h4 style={{ marginBottom: '-0.5em' }} {...props} />,
  h5: props => <h5 style={{ marginBottom: '-0.5em' }} {...props} />,
  h6: props => <h6 style={{ marginBottom: '-0.5em' }} {...props} />,
  p: props => <p {...props} />,
  code: props => <code style={{ borderRadius: 0 }} {...props} />,
  hr: props => <hr style={{ margin: '2em auto' }} {...props} />,
};
