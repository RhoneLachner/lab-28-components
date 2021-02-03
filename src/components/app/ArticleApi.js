export const getTopArticles = () => {
  // eslint-disable-next-line max-len
  return fetch('https://newsapi.org/v2top-headlines?country=us&apiKey=eedb5d29a8404b0fb7441fba4fc85c96')
    .then(res => res.json());
};
