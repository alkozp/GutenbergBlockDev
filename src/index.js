//let registerBlockType = wp.blocks.registerBlockType;
//let createElement = wp.element.createElement;
import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps} from "@wordpress/block-editor";
import "./style.scss";
import "./editor.scss";

registerBlockType( 'alkozp/gutblock', {
	edit: function () {
		const blockProps = useBlockProps();
		console.log(blockProps);
		return <h1 {...blockProps}>Edit 2025-2</h1>;
	},
	save: function () {
		const blockProps = useBlockProps.save();
		console.log(blockProps);
		return <h1 {...blockProps}>Save 2025-2</h1>;
	},
} );
