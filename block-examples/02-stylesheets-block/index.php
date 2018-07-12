<?php

defined( 'ABSPATH' ) || exit;

// add_action enqueue_block_editor_assets
add_action( 'enqueue_block_editor_assets', 'block_examples_02_stylesheets_block_enqueue_block_editor_assets');

// plugin-name_block-name_function-name
function block_examples_02_stylesheets_block_enqueue_block_editor_assets() {
	wp_enqueue_script(
		// name of script
		'block-examples-02-stylesheets-block-editor',
		// full URL of script
		plugins_url( 'block.build.js', __FILE__ ),
		// dependencies this script needs
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		// script version number
		filemtime( plugin_dir_path( __FILE__) . 'block.build.js')
	);

	wp_enqueue_style(
		'block-examples-02-stylesheets-block-editor',
		plugins_url( 'editor.css', __FILE__ ),
		// dependencies this script needs
		array( 'wp-edit-blocks' ),
		// script version number
		filemtime( plugin_dir_path( __FILE__) . 'editor.css')
	);
}

// add_action enqueue_block_assets
add_action( 'enqueue_block_assets', 'block_examples_02_stylesheets_block_enqueue_block_assets');

// plugin-name_block-name_function-name
function block_examples_02_stylesheets_block_enqueue_block_assets() {
	wp_enqueue_style(
		// name of script
		'block-examples-02-stylesheets-block',
		// full URL of script
		plugins_url( 'style.css', __FILE__ ),
		// dependencies this script needs
		array( 'wp-blocks' ),
		// script version number
		filemtime( plugin_dir_path( __FILE__) . 'style.css')
	);
}