let postcss = require('postcss')

module.exports = postcss.plugin('css-properly', () => {
  return css => {
    css.walkDecls(d => {
      d.prop = d.prop
        .replace('colour', 'color')
        .replace('padding-toon', 'padding-top')
        .replace('behaviour', 'behavior')
      d.value = d.value
        .replace('centre', 'center')
        .replace('capitalise', 'capitalize')
    })
  }
})
