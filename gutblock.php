<?php
/*
 * Plugin Name: GutBlock
 * Plugin URI: #
 * Description: NEW Gut Block
 * Author: alkozp
 * Author URI: #
 */

function alkozp_gutblock_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'alkozp_gutblock_init' );