import React from 'react';
import { Redirect } from '@reach/router'
// Build out the styles from the common libraries

const IndexPage = props => {

  return (
    <Redirect to="/resume" noThrow />
  );
};

export default IndexPage;
