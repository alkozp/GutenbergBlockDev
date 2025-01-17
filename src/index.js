//let registerBlockType = wp.blocks.registerBlockType;
//let createElement = wp.element.createElement;
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'alkozp/gutblock', {
	edit: function () {
		return <h1 className="admin_title">Edit 2025-2</h1>;
	},
	save: function () {
		return <h1 className="front_title">Save 2025-2</h1>;
	},
} );
