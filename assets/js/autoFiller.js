AutoFiller = function(){};
AutoFiller.prototype = (function(){

    var fields,
    _init = function() {
        fields = document.querySelectorAll('input, textarea, select');
        [].forEach.call(
            fields,
            function(input){
                _fillField({
                    field : input,
                    tagName : input.tagName.toLowerCase(),
                    name : input.name,
                    id : input.id,
                    type : input.type
                });
            }
        );
    },

    _fillField = function( field ) {
        console.log(field);
    }

    return {
        init : function() {
            _init();
        }
    }
}());

var autoFiller = new AutoFiller();
autoFiller.init();