AutoFillerOptions = function(){};
AutoFillerOptions.prototype = (function(){

    /*
    var _deps = function() {
        $('.dep').each(function(){
            var dep = $(this).data('dep'),
                value = $(this).data('value');

            if( $('input[name=' + dep + ']').val() == value ) {
                $(this).show();
            }
        });
    };
    */
    var _events = function() {
            //dependencies handler
            $('[data-dep]').each(function(){
                var t = $(this),
                    dep = $('input[name=' + $(this).data('dep')+ ']'),
                    dep_value = $(this).data('value');

                dep.on('change', function(){
                    var input_val = $(this).val();

                    if( dep.is(':radio') ) {
                        input_val = dep.filter(function(){ return $(this).is(':checked') }).val();
                    }

                    _dependencies( t, dep_value, input_val );
                }).change();
            });
        },

        /**
         * Manage dependencies
         */
        _dependencies = function( dep, dep_value, input_val ) {
            if( input_val == dep_value ) {
                dep.parents('.dep').show();
            } else {
                dep.parents('.dep').hide();
            }
        };

    return {
        init : function() {
            _events();
        }
    }
}());

$(function(){
    var autoFillerOptions = new AutoFillerOptions();
    autoFillerOptions.init();
});