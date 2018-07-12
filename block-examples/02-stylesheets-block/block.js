const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// my-plugin/block-name
registerBlockType( 'block-examples/block-examples-02-stylesheets-block', {
	title: __( 'Stylesheets Block'),
	icon: 'universal-access-alt',
	category: 'layout',
	edit: ({ className }) => {
		return (
			<p className={ className }>
				{ __('Hello world, this is the Stylesheets Block (from the editor)') }
			</p>
		);
	},
	save: ({ className }) => {
		return (
			<p className={ className }>
				{ __('Hello world, this is the Stylesheets Block (from the frontend, in red)') }
			</p>
		);
	}
});