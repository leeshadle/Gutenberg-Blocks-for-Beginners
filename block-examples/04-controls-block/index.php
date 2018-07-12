<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'block_examples_04_controls_block_enqueue_block_editor_assets' );

function block_examples_04_controls_block_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'block-examples-04-controls-block-editor-script',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-editor'),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);

	wp_enqueue_style(
		'block-examples-04-controls-block-editor-style',
		plugins_url( 'editor.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
}

add_action( 'enqueue_block_assets', 'block_examples_04_controls_block_enqueue_block_assets' );

function block_examples_04_controls_block_enqueue_block_assets() {
	wp_enqueue_style(
		'block-examples-04-controls-block-style',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
