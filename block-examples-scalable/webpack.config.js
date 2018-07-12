const nodeEnv = process.env.NODE_ENV || 'development';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyles = new ExtractTextPlugin('./dist/style.build.css');
const extractEditorStyles = new ExtractTextPlugin('./dist/editor.build.css');

module.exports = {
  mode:nodeEnv,
  devtool:'cheap-eval-source-map',
	entry: './src/blocks.js',
	output: { 
		path: __dirname,
		filename: './dist/blocks.build.js',
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude:[/node_modules/],
				use: {
					loader: 'babel-loader'
				},
			},
			{
        test: /style\.css$/,
        use: extractStyles.extract({
          fallback: "style-loader",
          use: [
          	{
							loader:'css-loader',
							options: { 
								sourceMap: true 
							}
          	}
          ]
        })
      },
      {
        test: /editor\.css$/,
        use: extractEditorStyles.extract({
          fallback: "style-loader",
          use: [
          	{
							loader:'css-loader',
							options: { 
								sourceMap: true 
							}
          	}
          ]
        })
      },
		],
	},
	plugins: [
    extractStyles,
		extractEditorStyles
  ],
};