import React from 'react';
import Post from '../components/blog/post';

export default function BlogPage({ data }) {
  const posts = data.allMdx.edges;
  return (
    <div>
      {posts.map(({ node }, index) => (
        <React.Fragment key={index}>
          <Post {...node.frontmatter} />
          {index !== (posts.length - 1) && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            path
          }
        }
      }
    }
  }
`;
