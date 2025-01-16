let registerBlockType = wp.blocks.registerBlockType;

registerBlockType("alkozp/gutblock",{
    edit: function (){
        return "Edit";
    },
    save: function (){
        return "Save";
    }
});
