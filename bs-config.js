const historyApiFallback = require('connect-history-api-fallback');

module.exports = {
  port: 3000,
  files: [
      './**/*.{html,js,css}'      
    ],
  server: {
    baseDir: './',
    middleware: [
      historyApiFallback({index: '/index.html', verbose: true})
    ]
  },
  open:true,
  notify:true,
  browser: 'default'
}
