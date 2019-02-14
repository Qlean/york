const path = require('path');

module.exports = {
  title: 'QLEAN',
  components: '../york-web/src/components/**/*.js',
  exampleMode: 'collapse',
  usageMode: 'expand',
  pagePerSection: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.basename(path.dirname(componentPath))
    return `import { ${dir} } from '@qlean/york-react-native';`
  },
  theme: {
    color: {
      link: '#ffffff',
      linkHover: '#ffffff',
      sidebarBackground: '#20A052',
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
        color: '#ffffff',
        fontSize: '26px',
        fontWeight: 'bold',
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
