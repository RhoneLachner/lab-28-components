import React, { Component } from 'react';
import Search from '../Search';
import Article from '../Article';
import ArticleList from '../ArticleList';

export default class NewsSearch extends Component {
  render() {
    return (
      <>

        <div>
          <Search/>
        </div>

        <div>
          <Article />
        </div>

        <div>
          <ArticleList />
        </div>

      </>
    );
  }
}
