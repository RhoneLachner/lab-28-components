import React, { Component } from 'react';
import Search from '../components/Search';
import ArticleList from '../components/articles/ArticleList';
import { getArticleBySearch } from '../services/ArticleApi';

export default class NewsSearch extends Component {

    state = {
      search: '',
      articles: []
    }
    handleChange = ({ target }) => {
      this.setState({ search:target.value });
      getArticleBySearch(target.value)
        .then(articles => this.setState({ articles }));
    }
 
    render() {
      const { loading, search, articles } = this.state;
      if(loading) return <h1>loading</h1>;
      else return (
        <>
          <div>
            <Search
              search={search}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <ArticleList 
              articles={articles}
            />
          </div>

        </>
      );
    }
}
