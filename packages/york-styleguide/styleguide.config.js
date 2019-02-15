const path = require('path');

module.exports = {
  title: 'Qlean Design System',
  components: '../york-web/src/components/**/*.js',
  exampleMode: 'collapse',
  // usageMode: 'expand',
  pagePerSection: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.basename(path.dirname(componentPath))
    return `import { ${dir} } from '@qlean/york-react-native';`
  },
  theme: {
    color: {
      link: '#222222',
      linkHover: '#20A052',
      sidebarBackground: '#F8F8F8',
      border: '#D9D9D9',
    },
    fontFamily: {
      base: 'Museo Sans'
    },
    borderRadius: 5,
    sidebarWidth: 250,

  },
  styles: {
    Logo: {
      logo: {
        color: '#222222',
        fontSize: '20px',
      },
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
