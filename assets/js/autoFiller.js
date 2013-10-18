AutoFiller = function(){};
AutoFiller.prototype = (function(){

    var fields,
        defaultOptions = {
            firstname_fields: '',
            lastname_fields: '',
            username_fields: '',
            email_custom: '',
            email_custom_host: '',
            email_type: 'random',
            name_firstname_custom: '',
            name_gender: 'random',
            name_lastname_custom: '',
            name_type: 'random',
            password_custom: '',
            password_type: 'random',
            save: 'Save settings',
            username_custom: '',
            username_type: 'random'
        },
        options = {};

    var _init = function() {
        //init options
        options = _getOptions();

        //init fields
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
     * - date -
     * - datetime-local -
     * - month -
     * - week -
     * - time -
     * - select -
     * - number -
     * - tel -
     * - range -
     * - color -
     * - password
     * - email
     * - checkbox
     * - radio
     * - textarea
     * - url
     * - search
     * - text => Check the id and/or the name of the field
     *           in order to fill with appropriate value
     */
    _fillField = function( field ) {
        var type = field.type.toLocaleLowerCase();
        if( 'submit' != type && !field.disabled && !field.readOnly ) {
            if( 'checkbox' == type || 'radio' == type ) {
                //TODO: add checked attribute
                //console.log(field);
            } else if( type.indexOf('select') > -1 ) {
                var i = Math.floor(Math.random()* field.options.length );
                field.options[i].selected = true;
            } else {
                field.value = _getValueByType( type, field.id, field.name );
            }
        }

        //console.log(field);
    },

    /**
     * Return the right field value according its type
     *
     * TODO:
     *  - add support for min and max attributes in date types
     *  - add support for min and max attributes in number type
     *  -
     */
    _getValueByType = function( type, id, name ) {
        var value = null;
        var today = new Date();

        //TODO serve the right value according to type
        if( type == 'password' ) {
            if( options.password_type == 'custom' ) {
                value = options.password_custom;
            } else {
                value = _generateRandomPassword( 8 );
            }

            console.log( "AutoFiller password: " + value );
        } else if( 'date' == type ) {
            value = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate();
        } else if( 'datetime-local' == type ) {
            value = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate() +
                    'T' + today.getHours() + ':' + today.getMinutes();
        } else if( 'month' == type ) {
            value = today.getFullYear() + '-' + ( today.getMonth() + 1 );
        } else if( 'week' == type ) {
            value = today.getFullYear() + '-W' + Math.floor(Math.random()*52);
        } else if( 'time' == type ) {
            value = today.getHours() + ':' + today.getMinutes();
        } else if( 'number' == type || 'range' == type ) {
            value = Math.floor(Math.random()*100);
        } else if( 'tel' == type ) {
            value = '(899) 205-9881';
        } else if( 'color' == type ) {
            value = '#ff0000';
        }

        return value;
    },


    /**
     * Generate random password
     *
     * @see http://stackoverflow.com/a/9719823
     */
    _generateRandomPassword = function( length ) {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
            randomString = '',
            charCount = 0,
            numCount = 0,
            rnum;

        for (var i=0; i<length; i++) {
            // If random bit is 0, there are less than 3 digits already saved,
            // and there are not already 5 characters saved, generate a numeric value.
            if((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
                rnum = Math.floor(Math.random() * 10);
                randomString += rnum;
                numCount += 1;
            } else {
            // If any of the above criteria fail, go ahead and generate an
            // alpha character from the chars string
                rnum = Math.floor(Math.random() * chars.length);
                randomString += chars.substring(rnum,rnum+1);
                charCount += 1;
            }
        }

        return randomString;
    },


    /**
     * Save options in local storage
     */
    _saveOptions = function( opts ) {
        options = opts;
        localStorage['options'] = JSON.stringify(options);
        return options;
    },

    /**
     * Retrieve options from local storage
     */
    _getOptions = function() {
        //if the Object options is not empty
        if( Object.keys(options).length !== 0 ) {
            return options;
        } else {
            var localOptions = localStorage['options'];

            if( localOptions ) {
                return JSON.parse(localOptions);
            } else {
                return defaultOptions;
            }
        }
    };

    //public methods
    return {
        saveOptions : function( options ) {
            return _saveOptions( options );
        },

        getOptions : function() {
            return _getOptions();
        },

        init : function() {
            _init();
        }
    }
}());

var autoFiller = new AutoFiller();
autoFiller.init();