import React from 'react';
import { Link } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: `${theme.spacing(3)}px`,
  },
  icon: {
    flex: 0,
    hieght: '100px',
    width: '100px',
  },
  content: {
    flex: 1,
  },
}));
const BlogPage = ({ data }) => {
  const classes = useStyles();
  const posts = data.allMdx.edges;
  return (
    <div>
      {posts.map(({ node }) => (
        <Card className={classes.card}>
          <CardMedia
            className={classes.icon}
            component="img"
            alt="Blog Topic"
            image="https://via.placeholder.com/100"
            title=""
          />
          <CardContent className={classes.content}>
            <Typography variant="h5">
              <div>{node.frontmatter.title}</div>
            </Typography>
            <Typography variant="body">
              <div>{node.frontmatter.description}</div>
              <div>
                <Link to={node.frontmatter.path}>Read</Link>
              </div>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogPage;

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
