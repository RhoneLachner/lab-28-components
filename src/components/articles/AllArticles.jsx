import React, { Component } from 'react';
import { getTopArticles } from './ArticleApi';
import ArticleList from './ArticleList';

export default class AllArticles extends Component {

    state = {
      articles: []
    }

    componentDidMount() {
      getTopArticles()
        .then(articles => this.setState({ articles }));
    }

    render() {
      const { articles } = this.state;
      console.log(articles, 'state');

      return (
        <div>
          <ArticleList articles={articles} />
        </div>
      );
    }
}
