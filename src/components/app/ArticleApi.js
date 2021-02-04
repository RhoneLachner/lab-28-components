import Article from "./Article";



export const getArticleBySearch = (search) => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?apiKey=eedb5d29a8404b0fb7441fba4fc85c96&q=${search}`)
    .then(res => res.json())
    .then(json => json.articles);
};
