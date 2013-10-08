AutoFillerOptions = function(){};
AutoFillerOptions.prototype = (function(){

    var options = {
        'firstname-fields': '',
        'lastname-fields': '',
        'username-fields': '',
        'email-custom': '',
        'email-custom-host': '',
        'email-type': 'random',
        'name-firstname-custom': '',
        'name-gender': 'random',
        'name-lastname-custom': '',
        'name-type': 'random',
        'password-custom': '',
        'password-type': 'random',
        'save': 'Save settings',
        'username-custom': '',
        'username-type': 'random'
    };

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

            //save options
            $('[name=save]').on('click', function(e){
                e.preventDefault();
                _saveOptions();
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

        /**
         * Save options in local storage
         */
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

            localStorage['options'] = JSON.stringify(options);
        },

        _getOptions = function() {
            var localOptions = localStorage['options'];

            if( localOptions ) {
                return JSON.parse(localOptions);
            } else {
                return options;
            }
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
            })
        }

    return {
        init : function() {
            _events();
            _populateOptions();
        }
    }
}());

$(function(){
    var autoFillerOptions = new AutoFillerOptions();
    autoFillerOptions.init();
});