import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const ArticleList = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={ article } >
      <Article {...article} />
    </li>
  ));

  return (
    <ul>
      {articleElements}
    </ul>
  );
};

Article.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  published: PropTypes.number.isRequired
};

export default ArticleList;
