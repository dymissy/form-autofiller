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
     * - password -
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
                //console.log(field);
            } else {
                field.value = _getValueByType( type, field.id, field.name );
            }
        }

        //console.log(field);
    },

    /**
     * Return the right field value according its type
     */
    _getValueByType = function( type, id, name ) {
        var value = null;

        //TODO serve the right value according to type
        if( type == 'password' ) {
            if( options.password_type == 'custom' ) {
                value = options.password_custom
            } else {
                value = _generateRandomPassword( 8 );
            }

            console.log( "AutoFiller password: " + value );
        }

        return value;
    },


    /**
     * Generate random password
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