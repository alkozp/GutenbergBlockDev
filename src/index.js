//let registerBlockType = wp.blocks.registerBlockType;
//let createElement = wp.element.createElement;
import { registerBlockType } from '@wordpress/blocks';
// /*import { useBlockProps } from '@wordpress/block-editor';*/
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType( 'alkozp/gutblock', {
	edit: Edit,
	save: Save,
} );
