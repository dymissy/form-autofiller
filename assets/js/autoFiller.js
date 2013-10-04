AutoFiller = function(){};
AutoFiller.prototype = (function(){

    var fields,
    _init = function() {
        fields = document.querySelectorAll('input, textarea, select');
        [].forEach.call(
            fields,
            function(input){
                _fillField(input);
            }
        );
    },


    /**
     * Fill each field according to its type and id/name
     *
     * Types:
     *
     * - password
     * - date
     * - month
     * - email
     * - checkbox
     * - radio
     * - textarea
     * - select
     * - number
     * - tel
     * - url
     * - range
     * - text => Check the id and/or the name of the field
     *           in order to fill with appropriate value
     */
    _fillField = function( field ) {
        var type = field.type.toLocaleLowerCase();
        if( type != 'submit' && !field.disabled && !field.readOnly ) {
            if( type == 'checkbox' || type == 'radio' ) {
                //TODO: add checked attribute
                console.log(field);
            } else {
                field.value = _getValueByType( type, field.id, field.name );
            }
        }

        console.log(field);
    },

    /**
     * Return the right field value according its type
     */
    _getValueByType = function( type, id, name ) {
        var value = null;

        //TODO serve the right value according to type
        if( type == '' ) {

        }

        return value;
    }

    return {
        init : function() {
            _init();
        }
    }
}());

var autoFiller = new AutoFiller();
autoFiller.init();