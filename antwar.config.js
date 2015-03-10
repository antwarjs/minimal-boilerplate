'use strict';

module.exports = {
  site: {
    output: 'build',
    name: 'Antwar minimal boilerplate',
    author: 'Dr A N Twar',
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
  }
};

