<?php

/**
* Plugin Name: Block Examples Scalable
* Description: This is a plugin demonstrating how to build blocks using a more scalable, easier to maintain architecture.
* Text Domain: block-examples-scalable
* Version: 0.1.0
**/

//Prevent direct access
defined( 'ABSPATH' )  || exit;

add_action('plugins_loaded', 'block_examples_scalable_loader');

function block_examples_scalable_loader() {
	/* Load the blocks */
	require_once plugin_dir_path(__FILE__) . './dist/init.php';
}
