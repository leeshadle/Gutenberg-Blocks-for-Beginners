const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor;
const { Button } = wp.components;
import './editor.css';
import './style.css';

registerBlockType( 'block-examples/block-examples-05-media-upload-block', {
	title: __( 'Media Upload Block' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h1',
		},
		ingredients: {
			type: 'array',
			source: 'children',
			selector: '.ingredients',
		},
		instructions: {
			type: 'array',
			source: 'children',
			selector: '.instructions'
		},
		mediaID: {
			type: 'number'
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		}
	},
	edit: ({ className, setAttributes, attributes: { title, ingredients, instructions, mediaID, mediaURL }  }) => {
		
		const onChangeTitle = newTitle => {
			setAttributes( { title: newTitle } );
		};
		const onChangeIngredients = newIngredients => {
			setAttributes( { ingredients: newIngredients } );
		};
		const onChangeInstructions = newInstructions => {
			setAttributes( { instructions: newInstructions } );
		};
		const onSelectImage = newImage => {
			setAttributes( { 
				mediaID: newImage.id,
				mediaURL: newImage.url
			} );
		};

		return (
			<div className={ className }>
				<div className="column">
					<RichText
						tagName="h1"
						className="title"
						isSelected={false}
						placeholder={ __('Write a recipe title')}
						value={ title }
						onChange={ onChangeTitle }
						/>

					<h3>{ __('Ingredients')}</h3>
					<RichText
						tagName="ul"
						multiline="li"
						className="ingredients"
						isSelected={false}
						placeholder={ __('Write a list of ingredients...')}
						value={ ingredients }
						onChange={ onChangeIngredients }
						/>
						
					<h3>{ __('Instructions')}</h3>
					<RichText
						tagName="div"
						multiline="p"
						className="instructions"
						isSelected={false}
						placeholder={ __('Write the instructions...')}
						value={ instructions }
						onChange={ onChangeInstructions }
						/>

				</div>
				<div className="column">
					<div className="recipe-image">
						<MediaUpload
							onSelect={ onSelectImage }
							type="image"
							value={ mediaID }
							render={ ( { open } ) => (
								<Button 
									onClick={ open }
									className={ mediaID ? 'image-button': 'button button-large' }
								>
									{ ! mediaID ? __( 'Upload Image'): <img src={mediaURL} /> }
								</Button>
							) }
						/>
					</div>
				</div>
			</div>

			
		)
	},
	save: ({ className, attributes: { title, ingredients, instructions, mediaURL }  }) => {		
		return (
			<div className={ className }>
				<div className="column">
					<RichText.Content
						tagName="h1"
						className="title"
						placeholder={ __('Write a recipe title')}
						value={ title }
						/>

					<h3>{ __('Ingredients')}</h3>
					<RichText.Content
						tagName="ul"
						multiline="li"
						className="ingredients"
						placeholder={ __('Write a list of ingredients...')}
						value={ ingredients }
						/>
						
					<h3>{ __('Instructions')}</h3>
					<RichText.Content
						tagName="div"
						multiline="p"
						className="instructions"
						placeholder={ __('Write the instructions...')}
						value={ instructions }
						/>
				</div>
				<div className="column">
					<div className="recipe-image">
						{
							mediaURL && (
								<img src={ mediaURL } />
							)
						}
					</div>
				</div>
			</div>
			
		);
	},
} );
