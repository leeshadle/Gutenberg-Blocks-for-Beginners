const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar } = wp.editor;

registerBlockType( 'block-examples/block-examples-04-controls-block', {
	title: __( 'Controls Block' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'h1',
		},
		alignment: {
			type:'string'
		}
	},
	edit: ({ className, attributes: { content, alignment }, setAttributes }) => {

		const onChangeContent = content => {
			setAttributes( { content: content } );
		};

		const onChangeAlignment = newAlignment => {
			setAttributes( { alignment: newAlignment } );
		};

		return [
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>,
			<RichText
				tagName="h1"
				className={ className }
				onChange={ onChangeContent }
				value={ content }
				style={ { textAlign: alignment } }
				/>
		]
	},
	save: ({ className, attributes: { content, alignment }}) => {		
		return (
			<RichText.Content 
				tagName="h1" 
				className={ className } 
				value={ content }
				style={ { textAlign: alignment } }
				/>
		);
	},
} );
