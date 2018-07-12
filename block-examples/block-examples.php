<?php

/**
* Plugin Name: Block Examples
* Description: This is a plugin demonstrating how to build blocks for the Gutenberg editor.
* Text Domain: blocks-examples
* Version: 0.1.0
**/

//Prevent direct access
defined( 'ABSPATH' )  || exit;

include '01-basic-block/index.php';
include '02-stylesheets-block/index.php';
include '03-editable-block/index.php';
include '04-controls-block/index.php';
include '05-media-upload-block/index.php';