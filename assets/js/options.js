AutoFillerOptions = function(){};
AutoFillerOptions.prototype = (function(){

    var instance,
        options,

        _events = function() {
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

            //save options
            $('[name=save]').on('click', function(e){
                e.preventDefault();
                _saveOptions();
            });

            //close message
            $('#message').find('button').click(function(){
                $('#message').hide();
            });

            //merge options
            options = _getOptions();
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
        },

        _saveOptions = function() {
            var options = {};
            $('input, select, textarea').each(function(){
                var name = this.name,
                    value = this.value;

                if( $(this).is(':radio') ) {
                    options[name] = $('[name='+name+']:checked').val();
                } else {
                    options[name] = value;
                }
            });

            if( instance.saveOptions( options ) ) {
                _displayMessage();
            }
        },

        _displayMessage = function() {
            $('#message').show()
        },

        _getOptions = function() {
            return instance.getOptions();
        },

        _populateOptions = function() {
            $('input, select, textarea').each(function(){
                var name = this.name;

                if( $(this).is(':radio')  ) {
                    if( this.value == options[name] ) {
                        $(this).prop('checked', true);
                    }
                } else {
                    this.value = options[name];
                }

                $(this).change();
            });
        };

    return {
        init : function( inst ) {
            instance = inst;
            _events();
            _populateOptions();
        }
    }
}());

$(function(){
    var autoFillerOptions = new AutoFillerOptions();
    autoFillerOptions.init( autoFiller );
});