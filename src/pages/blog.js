import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  article: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  link: {
    textDecoration: 'none',
  },
}));

const Post = ({ path, title, description, date }) => {
  const classes = useStyles();
  return (
    <div className={classes.article}>
      <Typography variant="h2">
        <Link to={path} className={classes.link}>
          {title}
        </Link>
      </Typography>
      <Typography variant="subtitle1">{date}</Typography>
      <Typography variant="subtitle2">{description}</Typography>
    </div>
  );
};

export default function BlogPage({ data }) {
  const posts = data.allMdx.edges;
  return (
    <div>
      {posts.map(({ node }) => (
        <Post {...node.frontmatter} />
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
