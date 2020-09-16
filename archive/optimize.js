const critical = require('critical');
critical.generate({
  inline: true,
  base: 'test/',
  src: 'index.html',
  target: {
    html: 'index-critical.html',
    css: 'critical.css',
  },
  width: 1300,
  height: 900,
});