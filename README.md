# css-properly-scottish

[PostCSS] plugin for people who prefer to write ~~English~~ Scots properly.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  colour: black;
  background-colour: lightgrey;
  text-align: centre;
}
```

## Supported translations:

| From (Scots) | To (American) | Rationale |
|---------------|---------------|-----------|
| `colour` | `color` | There's a *u* in "colour" |
| `centre` | `center` | It's spelled "centre" |
| `capitalise` | `capitalize` | Don't even get me started |
| `padding-toon` | `padding-top` | I dinnae really ken whae that wee bear is |
| `z-index` | `z-index` | It's the same but it's pronounced "zed", not "zee" |
| `behaviour` | `behavior` | Oh, behave! |
| `backgroond` | `background` | |
| `tap` | `top` | |


Pull requests for further translations welcome!

## Usage

### As a PostCSS plugin

Assuming you are using npm to manage dependencies, install `css-properly` with:

```sh
  npm install --save-dev css-properly
```

Check your project for existing PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('css-properly'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage

### As a standalone tool using [PostCSS CLI](https://github.com/postcss/postcss-cli)

First, install `postcss-cli` and `css-properly` globally:

```sh
  npm install -g postcss-cli css-properly
```

Follow your heart:

```sh
  postcss [input.css] --use css-properly  [-o|--output output.css] [--watch|-w]
  postcss <input.css>... --use css-properly  --dir <output-directory> [--watch|-w]
  postcss <input-directory> --use css-properly  --dir <output-directory> [--watch|-w]
  postcss <input-glob-pattern> --use css-properly  --dir <output-directory> [--watch|-w]
  postcss <input.css>... --use css-properly  --replace
```

## License

[MIT](LICENSE)


