import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ author, title, description, published, content }) => (
  <figure>
    <figcaption>{author}</figcaption>
    <figcaption>{title}</figcaption>
    <figcaption>{description}</figcaption>
    <figcaption>{published}</figcaption>
    <figcaption>{content}</figcaption>
  </figure>
);

Article.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  published: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
