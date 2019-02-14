const path = require('path');

module.exports = {
  title: 'QLEAN STYLE',
  components: '../york-web/src/components/**/*.js',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.basename(path.dirname(componentPath))
    return `import { ${dir} } from '@qlean/york-react-native';`
  },
  theme: {
    color: {
      linkHover: '#20A052'
    },
    fontFamily: {
      base: 'Museo Sans'
    }
  },
  	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
				},
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(woff|eot|ttf)$/i,
          use: 'file-loader',
        },
			],
		},
  },
  require: [
    path.join(__dirname, 'assets/fonts/index.css')
  ]
}
