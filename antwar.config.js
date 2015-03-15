'use strict';

module.exports = {
  output: 'build',
  name: 'Antwar minimal boilerplate',
  author: {
    name: 'Dr A N Twar',
    email: 'antwar@antwar.com'
  },
  deploy: {
    branch: 'gh-pages',
  },
  theme: {
    name: 'antwar-minimal-theme',
    navigation: [
      {title: 'Home', path: '/'},
      {title: 'Blog', path: '/blog'},
      {title: 'Page', path: '/page'},
      {title: 'MarkdownPage', path: '/markdownpage'}
    ]
  }
};

