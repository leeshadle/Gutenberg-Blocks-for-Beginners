const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px'
}

const blockStyleFront = {
	backgroundColor: '#000',
	color: '#fff',
	padding: '20px'
}

// my-plugin/block-name
registerBlockType( 'block-examples/block-examples-01-basic-block', {
	title: __( 'Basic Block'),
	icon: 'universal-access-alt',
	category: 'layout',
	// used in editor
	edit() {
		return <div style={ blockStyle }> TESTING 1 2 3, my name is Lee!!! THE Basic example with JSX! (editor)</div>;
	},
	// used in the frontend
	save() {
		return <div style={ blockStyle }>Hello, I'm the frontend. Basic example with JSX! (frontend)</div>;
	}
});