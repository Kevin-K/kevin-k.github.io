import React from 'react';
import { Redirect } from '@reach/router';

export default function Index() {
    return (<Redirect to="/resume" noThrow />);
}
