import React from 'react';
import PropTypes from 'prop-types';
import Layout from '.';
import { Helmet } from 'react-helmet';
export default function BlogLayout({ children, pageContext }) {
  const { title, date } = pageContext.frontmatter;
  return (
    <article>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header>
        <h1>{title}</h1>
        <time>{date}</time>
      </header>
      <hr />
      {children}
    </article>
  );
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
