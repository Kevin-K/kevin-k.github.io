import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import MdxComponents from '../blog/mdx-components';

export default function BlogLayout({ pageContext, data: { mdx } }) {
  const { title, date } = mdx.frontmatter;
  const duration = `${mdx.timeToRead || 1} min read`;
  return (
    <article>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="p">
          {date} - {duration}
        </Typography>
      </header>
      <hr />

      <MDXProvider components={MdxComponents}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </article>
  );
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
