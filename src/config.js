require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: "Alexoner's homepage",
    description: 'Github Pages using React to split Front-end and Back-end.',
    head: {
      titleTemplate: 'Alexoner\'s homepage: %s',
      meta: [
        {name: 'description', content: 'Github Pages using React to split Front-end and Back-end.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Alexoner\'s homepage'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Alexoner\'s homepage'},
        {property: 'og:description', content: 'Just for fun.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@Alexoner'},
        {property: 'og:creator', content: '@Alexoner'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
