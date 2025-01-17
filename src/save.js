import {useBlockProps} from "@wordpress/block-editor";
export default function save() {
    const blockProps = useBlockProps.save();
    console.log( blockProps );
    return <h1 { ...blockProps }>Save 2025-2</h1>;
}