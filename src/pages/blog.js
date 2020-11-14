import React from 'react';
import Post from '../components/blog/post';
import { graphql } from 'gatsby';

export default function BlogPage({ data }) {
  const posts = data.allMdx.edges;
  return (
    <div>
      {posts.map(({ node }, index) => (
        <React.Fragment key={index}>
          <Post
            {...node.frontmatter}
            slug={node.fields.slug}
            duration={`${node.timeToRead} min read`}
          />
          {index !== posts.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
