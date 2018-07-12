<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'block_examples_scalable_enqueue_block_editor_assets' );

function block_examples_scalable_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'block-examples-scalable-block-editor-script',
		plugins_url( 'blocks.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-components'),
		filemtime( plugin_dir_path( __FILE__ ) . 'blocks.build.js' )
	);

	wp_enqueue_style(
		'block-examples-scalable-block-editor-style',
		plugins_url( 'editor.build.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.build.css' )
	);
}

add_action( 'enqueue_block_assets', 'block_examples_scalable_block_enqueue_block_assets' );

function block_examples_scalable_block_enqueue_block_assets() {
	wp_enqueue_style(
		'block-examples-scalable-block-style',
		plugins_url( 'style.build.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.build.css' )
	);
}
