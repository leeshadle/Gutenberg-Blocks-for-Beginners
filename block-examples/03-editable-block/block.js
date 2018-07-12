const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType( 'block-examples/block-examples-03-editable-block', {
	title: __( 'Editable Block' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit: (props) => {

		const onChangeContent = content => {
			props.setAttributes( { content: content } );
		};
		return (
			<RichText
				tagName="p"
				className={ props.className }
				onChange={ onChangeContent }
				value={ props.attributes.content }
				/>
		);
	},
	save: (props) => {		
		return (
			<RichText.Content 
				tagName="p" 
				className={ props.className } 
				value={ props.attributes.content } 
				/>
		);
	},
} );
