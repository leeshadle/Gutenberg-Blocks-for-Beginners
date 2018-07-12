const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
	mode:nodeEnv,
	entry: './block.js',
	output: {
		path: __dirname,
		filename: 'block.build.js',
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
		],
	},
};