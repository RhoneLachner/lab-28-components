import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const ArticleList = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.title} >
      <Article {...article} />
    </li>

  ));
  console.log(articles);
  return (
    <ul>
      {articleElements}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    published: PropTypes.number.isRequired
  })).isRequired
};

export default ArticleList;
