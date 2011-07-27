/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @author Ed Spencer
 *
 * A Model represents some object that your application manages. For example, one might define a Model for Users,
 * Products, Cars, or any other real-world object that we want to model in the system. Models are registered via the
 * {@link Ext.ModelManager model manager}, and are used by {@link Ext.data.Store stores}, which are in turn used by many
 * of the data-bound components in Ext.
 *
 * Models are defined as a set of fields and any arbitrary methods and properties relevant to the model. For example:
 *
 *     Ext.define('User', {
 *         extend: 'Ext.data.Model',
 *         fields: [
 *             {name: 'name',  type: 'string'},
 *             {name: 'age',   type: 'int'},
 *             {name: 'phone', type: 'string'},
 *             {name: 'alive', type: 'boolean', defaultValue: true}
 *         ],
 *
 *         changeName: function() {
 *             var oldName = this.get('name'),
 *                 newName = oldName + " The Barbarian";
 *
 *             this.set('name', newName);
 *         }
 *     });
 *
 * The fields array is turned into a {@link Ext.util.MixedCollection MixedCollection} automatically by the {@link
 * Ext.ModelManager ModelManager}, and all other functions and properties are copied to the new Model's prototype.
 *
 * Now we can create instances of our User model and call any model logic we defined:
 *
 *     var user = Ext.ModelManager.create({
 *         name : 'Conan',
 *         age  : 24,
 *         phone: '555-555-5555'
 *     }, 'User');
 *
 *     user.changeName();
 *     user.get('name'); //returns "Conan The Barbarian"
 *
 * # Validations
 *
 * Models have built-in support for validations, which are executed against the validator functions in {@link
 * Ext.data.validations} ({@link Ext.data.validations see all validation functions}). Validations are easy to add to
 * models:
 *
 *     Ext.define('User', {
 *         extend: 'Ext.data.Model',
 *         fields: [
 *             {name: 'name',     type: 'string'},
 *             {name: 'age',      type: 'int'},
 *             {name: 'phone',    type: 'string'},
 *             {name: 'gender',   type: 'string'},
 *             {name: 'username', type: 'string'},
 *             {name: 'alive',    type: 'boolean', defaultValue: true}
 *         ],
 *
 *         validations: [
 *             {type: 'presence',  field: 'age'},
 *             {type: 'length',    field: 'name',     min: 2},
 *             {type: 'inclusion', field: 'gender',   list: ['Male', 'Female']},
 *             {type: 'exclusion', field: 'username', list: ['Admin', 'Operator']},
 *             {type: 'format',    field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}
 *         ]
 *     });
 *
 * The validations can be run by simply calling the {@link #validate} function, which returns a {@link Ext.data.Errors}
 * object:
 *
 *     var instance = Ext.ModelManager.create({
 *         name: 'Ed',
 *         gender: 'Male',
 *         username: 'edspencer'
 *     }, 'User');
 *
 *     var errors = instance.validate();
 *
 * # Associations
 *
 * Models can have associations with other Models via {@link Ext.data.BelongsToAssociation belongsTo} and {@link
 * Ext.data.HasManyAssociation hasMany} associations. For example, let's say we're writing a blog administration
 * application which deals with Users, Posts and Comments. We can express the relationships between these models like
 * this:
 *
 *     Ext.define('Post', {
 *         extend: 'Ext.data.Model',
 *         fields: ['id', 'user_id'],
 *
 *         belongsTo: 'User',
 *         hasMany  : {model: 'Comment', name: 'comments'}
 *     });
 *
 *     Ext.define('Comment', {
 *         extend: 'Ext.data.Model',
 *         fields: ['id', 'user_id', 'post_id'],
 *
 *         belongsTo: 'Post'
 *     });
 *
 *     Ext.define('User', {
 *         extend: 'Ext.data.Model',
 *         fields: ['id'],
 *
 *         hasMany: [
 *             'Post',
 *             {model: 'Comment', name: 'comments'}
 *         ]
 *     });
 *
 * See the docs for {@link Ext.data.BelongsToAssociation} and {@link Ext.data.HasManyAssociation} for details on the
 * usage and configuration of associations. Note that associations can also be specified like this:
 *
 *     Ext.define('User', {
 *         extend: 'Ext.data.Model',
 *         fields: ['id'],
 *
 *         associations: [
 *             {type: 'hasMany', model: 'Post',    name: 'posts'},
 *             {type: 'hasMany', model: 'Comment', name: 'comments'}
 *         ]
 *     });
 *
 * # Using a Proxy
 *
 * Models are great for representing types of data and relationships, but sooner or later we're going to want to load or
 * save that data somewhere. All loading and saving of data is handled via a {@link Ext.data.proxy.Proxy Proxy}, which
 * can be set directly on the Model:
 *
 *     Ext.define('User', {
 *         extend: 'Ext.data.Model',
 *         fields: ['id', 'name', 'email'],
 *
 *         proxy: {
 *             type: 'rest',
 *             url : '/users'
 *         }
 *     });
 *
 * Here we've set up a {@link Ext.data.proxy.Rest Rest Proxy}, which knows how to load and save data to and from a
 * RESTful backend. Let's see how this works:
 *
 *     var user = Ext.ModelManager.create({name: 'Ed Spencer', email: 'ed@sencha.com'}, 'User');
 *
 *     user.save(); //POST /users
 *
 * Calling {@link #save} on the new Model instance tells the configured RestProxy that we wish to persist this Model's
 * data onto our server. RestProxy figures out that this Model hasn't been saved before because it doesn't have an id,
 * and performs the appropriate action - in this case issuing a POST request to the url we configured (/users). We
 * configure any Proxy on any Model and always follow this API - see {@link Ext.data.proxy.Proxy} for a full list.
 *
 * Loading data via the Proxy is equally easy:
 *
 *     //get a reference to the User model class
 *     var User = Ext.ModelManager.getModel('User');
 *
 *     //Uses the configured RestProxy to make a GET request to /users/123
 *     User.load(123, {
 *         success: function(user) {
 *             console.log(user.getId()); //logs 123
 *         }
 *     });
 *
 * Models can also be updated and destroyed easily:
 *
 *     //the user Model we loaded in the last snippet:
 *     user.set('name', 'Edward Spencer');
 *
 *     //tells the Proxy to save the Model. In this case it will perform a PUT request to /users/123 as this Model already has an id
 *     user.save({
 *         success: function() {
 *             console.log('The User was updated');
 *         }
 *     });
 *
 *     //tells the Proxy to destroy the Model. Performs a DELETE request to /users/123
 *     user.destroy({
 *         success: function() {
 *             console.log('The User was destroyed!');
 *         }
 *     });
 *
 * # Usage in Stores
 *
 * It is very common to want to load a set of Model instances to be displayed and manipulated in the UI. We do this by
 * creating a {@link Ext.data.Store Store}:
 *
 *     var store = new Ext.data.Store({
 *         model: 'User'
 *     });
 *
 *     //uses the Proxy we set up on Model to load the Store data
 *     store.load();
 *
 * A Store is just a collection of Model instances - usually loaded from a server somewhere. Store can also maintain a
 * set of added, updated and removed Model instances to be synchronized with the server via the Proxy. See the {@link
 * Ext.data.Store Store docs} for more information on Stores.
 *
 * @constructor
 * Creates new Model instance.
 * @param {Object} data An object containing keys corresponding to this model's fields, and their associated values
 * @param {Number} id (optional) Unique ID to assign to this model instance
 */
Ext.define('Ext.data.Model', {
    alternateClassName: 'Ext.data.Record',
    
    mixins: {
        observable: 'Ext.util.Observable'
    },

    requires: [
        'Ext.ModelManager',
        'Ext.data.Field',
        'Ext.data.Errors',
        'Ext.data.Operation',
        'Ext.data.validations',
        'Ext.data.proxy.Ajax',
        'Ext.util.MixedCollection'
    ],

    onClassExtended: function(cls, data) {
        var onBeforeClassCreated = data.onBeforeClassCreated;

        data.onBeforeClassCreated = function(cls, data) {
            var me = this,
                name = Ext.getClassName(cls),
                prototype = cls.prototype,
                superCls = cls.prototype.superclass,

                validations = data.validations || [],
                fields = data.fields || [],
                associations = data.associations || [],
                belongsTo = data.belongsTo,
                hasMany = data.hasMany,

                fieldsMixedCollection = new Ext.util.MixedCollection(false, function(field) {
                    return field.name;
                }),

                associationsMixedCollection = new Ext.util.MixedCollection(false, function(association) {
                    return association.name;
                }),

                superValidations = superCls.validations,
                superFields = superCls.fields,
                superAssociations = superCls.associations,

                association, i, ln,
                dependencies = [];

            // Save modelName on class and its prototype
            cls.modelName = name;
            prototype.modelName = name;

            // Merge the validations of the superclass and the new subclass
            if (superValidations) {
                validations = superValidations.concat(validations);
            }

            data.validations = validations;

            // Merge the fields of the superclass and the new subclass
            if (superFields) {
                fields = superFields.items.concat(fields);
            }

            for (i = 0, ln = fields.length; i < ln; ++i) {
                fieldsMixedCollection.add(new Ext.data.Field(fields[i]));
            }

            data.fields = fieldsMixedCollection;

            //associations can be specified in the more convenient format (e.g. not inside an 'associations' array).
            //we support that here
            if (belongsTo) {
                belongsTo = Ext.Array.from(belongsTo);

                for (i = 0, ln = belongsTo.length; i < ln; ++i) {
                    association = belongsTo[i];

                    if (!Ext.isObject(association)) {
                        association = {model: association};
                    }

                    association.type = 'belongsTo';
                    associations.push(association);
                }

                delete data.belongsTo;
            }

            if (hasMany) {
                hasMany = Ext.Array.from(hasMany);
                for (i = 0, ln = hasMany.length; i < ln; ++i) {
                    association = hasMany[i];

                    if (!Ext.isObject(association)) {
                        association = {model: association};
                    }

                    association.type = 'hasMany';
                    associations.push(association);
                }

                delete data.hasMany;
            }

            if (superAssociations) {
                associations = superAssociations.items.concat(associations);
            }

            for (i = 0, ln = associations.length; i < ln; ++i) {
                dependencies.push('association.' + associations[i].type.toLowerCase());
            }

            if (data.proxy) {
                if (typeof data.proxy === 'string') {
                    dependencies.push('proxy.' + data.proxy);
                }
                else if (typeof data.proxy.type === 'string') {
                    dependencies.push('proxy.' + data.proxy.type);
                }
            }

            Ext.require(dependencies, function() {
                Ext.ModelManager.registerType(name, cls);

                for (i = 0, ln = associations.length; i < ln; ++i) {
                    association = associations[i];

                    Ext.apply(association, {
                        ownerModel: name,
                        associatedModel: association.model
                    });

                    if (Ext.ModelManager.getModel(association.model) === undefined) {
                        Ext.ModelManager.registerDeferredAssociation(association);
                    } else {
                        associationsMixedCollection.add(Ext.data.Association.create(association));
                    }
                }

                data.associations = associationsMixedCollection;

                onBeforeClassCreated.call(me, cls, data);

                cls.setProxy(cls.prototype.proxy || cls.prototype.defaultProxyType);

                // Fire the onModelDefined template method on ModelManager
                Ext.ModelManager.onModelDefined(cls);
            });
        };
    },

    inheritableStatics: {
        /**
         * Sets the Proxy to use for this model. Accepts any options that can be accepted by
         * {@link Ext#createByAlias Ext.createByAlias}.
         * @param {String/Object/Ext.data.proxy.Proxy} proxy The proxy
         * @return {Ext.data.proxy.Proxy}
         * @static
         * @inheritable
         */
        setProxy: function(proxy) {
            //make sure we have an Ext.data.proxy.Proxy object
            if (!proxy.isProxy) {
                if (typeof proxy == "string") {
                    proxy = {
                        type: proxy
                    };
                }
                proxy = Ext.createByAlias("proxy." + proxy.type, proxy);
            }
            proxy.setModel(this);
            this.proxy = this.prototype.proxy = proxy;

            return proxy;
        },

        /**
         * Returns the configured Proxy for this Model
         * @return {Ext.data.proxy.Proxy} The proxy
         * @static
         * @inheritable
         */
        getProxy: function() {
            return this.proxy;
        },

        /**
         * Asynchronously loads a model instance by id. Sample usage:
         *
         *     MyApp.User = Ext.define('User', {
         *         extend: 'Ext.data.Model',
         *         fields: [
         *             {name: 'id', type: 'int'},
         *             {name: 'name', type: 'string'}
         *         ]
         *     });
         *
         *     MyApp.User.load(10, {
         *         scope: this,
         *         failure: function(record, operation) {
         *             //do something if the load failed
         *         },
         *         success: function(record, operation) {
         *             //do something if the load succeeded
         *         },
         *         callback: function(record, operation) {
         *             //do something whether the load succeeded or failed
         *         }
         *     });
         *
         * @param {Number} id The id of the model to load
         * @param {Object} config (optional) config object containing success, failure and callback functions, plus
         * optional scope
         * @static
         * @inheritable
         */
        load: function(id, config) {
            config = Ext.apply({}, config);
            config = Ext.applyIf(config, {
                action: 'read',
                id    : id
            });

            var operation  = Ext.create('Ext.data.Operation', config),
                scope      = config.scope || this,
                record     = null,
                callback;

            callback = function(operation) {
                if (operation.wasSuccessful()) {
                    record = operation.getRecords()[0];
                    Ext.callback(config.success, scope, [record, operation]);
                } else {
                    Ext.callback(config.failure, scope, [record, operation]);
                }
                Ext.callback(config.callback, scope, [record, operation]);
            };

            this.proxy.read(operation, callback, this);
        }
    },

    statics: {
        PREFIX : 'ext-record',
        AUTO_ID: 1,
        EDIT   : 'edit',
        REJECT : 'reject',
        COMMIT : 'commit',

        /**
         * Generates a sequential id. This method is typically called when a record is {@link Ext.ModelManager#create
         * create}d and {@link #constructor no id has been specified}. The id will automatically be assigned to the
         * record. The returned id takes the form: {PREFIX}-{AUTO_ID}.
         *
         * - **PREFIX** : String - Ext.data.Model.PREFIX (defaults to 'ext-record')
         * - **AUTO_ID** : String - Ext.data.Model.AUTO_ID (defaults to 1 initially)
         *
         * @param {Ext.data.Model} rec The record being created. The record does not exist, it's a {@link #phantom}.
         * @return {String} auto-generated string id, `"ext-record-i++"`;
         * @static
         */
        id: function(rec) {
            var id = [this.PREFIX, '-', this.AUTO_ID++].join('');
            rec.phantom = true;
            rec.internalId = id;
            return id;
        }
    },
    
    /**
     * @property {Boolean} editing
     * Internal flag used to track whether or not the model instance is currently being edited. Read-only.
     */
    editing : false,

    /**
     * @property {Boolean} dirty
     * True if this Record has been modified. Read-only.
     */
    dirty : false,

    /**
     * @cfg {String} persistenceProperty
     * The property on this Persistable object that its data is saved to. Defaults to 'data'
     * (e.g. all persistable data resides in this.data.)
     */
    persistenceProperty: 'data',

    evented: false,
    isModel: true,

    /**
     * @property {Boolean} phantom
     * True when the record does not yet exist in a server-side database (see {@link #setDirty}).
     * Any record which has a real database pk set as its id property is NOT a phantom -- it's real.
     */
    phantom : false,

    /**
     * @cfg {String} idProperty
     * The name of the field treated as this Model's unique id. Defaults to 'id'.
     */
    idProperty: 'id',

    /**
     * @cfg {String} defaultProxyType
     * The string type of the default Model Proxy. Defaults to 'ajax'.
     */
    defaultProxyType: 'ajax',

    // Fields config and property
    /**
     * @cfg {[Object/String]} fields
     * The fields for this model.
     */
    /**
     * @property {Ext.util.MixedCollection} fields
     * The fields defined on this model.
     */
    
    /**
     * @cfg {[Object]} validations
     * An array of {@link Ext.data.validations validations} for this model.
     */
    
    // Associations configs and properties
    /**
     * @cfg {[Object]} associations
     * An array of {@link Ext.data.Association associations} for this model.
     */
    /**
     * @cfg {String/Object/Array} hasMany
     * One or more {@link Ext.data.HasManyAssociation HasMany associations} for this model.
     */
    /**
     * @cfg {String/Object/Array} belongsTo
     * One or more {@link Ext.data.BelongsToAssociation BelongsTo associations} for this model.
     */
    /**
     * @property {Ext.util.MixedCollection} associations
     * {@link Ext.data.Association Associations} defined on this model.
     */

    /**
     * @cfg {String/Object/Ext.data.proxy.Proxy} proxy
     * The {@link Ext.data.proxy.Proxy proxy} to use for this model.
     */

    // raw not documented intentionally, meant to be used internally.
    constructor: function(data, id, raw) {
        data = data || {};
        
        var me = this,
            fields,
            length,
            field,
            name,
            i,
            isArray = Ext.isArray(data),
            newData = isArray ? {} : null; // to hold mapped array data if needed

        /**
         * An internal unique ID for each Model instance, used to identify Models that don't have an ID yet
         * @property internalId
         * @type String
         * @private
         */
        me.internalId = (id || id === 0) ? id : Ext.data.Model.id(me);
        
        /**
         * @property {Object} raw The raw data used to create this model if created via a reader.
         */
        me.raw = raw;

        Ext.applyIf(me, {
            data: {}    
        });
        
        /**
         * @property {Object} modified Key: value pairs of all fields whose values have changed
         */
        me.modified = {};

        // Deal with spelling error in previous releases
        if (me.persistanceProperty) {
            //<debug>
            if (Ext.isDefined(Ext.global.console)) {
                Ext.global.console.warn('Ext.data.Model: persistanceProperty has been deprecated. Use persistenceProperty instead.');
            }
            //</debug>
            me.persistenceProperty = me.persistanceProperty;
        }
        me[me.persistenceProperty] = {};

        me.mixins.observable.constructor.call(me);

        //add default field values if present
        fields = me.fields.items;
        length = fields.length;

        for (i = 0; i < length; i++) {
            field = fields[i];
            name  = field.name;

            if (isArray){ 
                // Have to map array data so the values get assigned to the named fields
                // rather than getting set as the field names with undefined values.
                newData[name] = data[i];
            }
            else if (data[name] === undefined) {
                data[name] = field.defaultValue;
            }
        }

        me.set(newData || data);
        // clear any dirty/modified since we're initializing
        me.dirty = false;
        me.modified = {};

        if (me.getId()) {
            me.phantom = false;
        }

        if (typeof me.init == 'function') {
            me.init();
        }

        me.id = me.modelName + '-' + me.internalId;
    },
    
    /**
     * Returns the value of the given field
     * @param {String} fieldName The field to fetch the value for
     * @return {Mixed} The value
     */
    get: function(field) {
        return this[this.persistenceProperty][field];
    },
    
    /**
     * Sets the given field to the given value, marks the instance as dirty
     * @param {String|Object} fieldName The field to set, or an object containing key/value pairs
     * @param {Mixed} value The value to set
     */
    set: function(fieldName, value) {
        var me = this,
            fields = me.fields,
            modified = me.modified,
            convertFields = [],
            field, key, i, currentValue;

        /*
         * If we're passed an object, iterate over that object. NOTE: we pull out fields with a convert function and
         * set those last so that all other possible data is set before the convert function is called
         */
        if (arguments.length == 1 && Ext.isObject(fieldName)) {
            for (key in fieldName) {
                if (fieldName.hasOwnProperty(key)) {
                
                    //here we check for the custom convert function. Note that if a field doesn't have a convert function,
                    //we default it to its type's convert function, so we have to check that here. This feels rather dirty.
                    field = fields.get(key);
                    if (field && field.convert !== field.type.convert) {
                        convertFields.push(key);
                        continue;
                    }
                    
                    me.set(key, fieldName[key]);
                }
            }

            for (i = 0; i < convertFields.length; i++) {
                field = convertFields[i];
                me.set(field, fieldName[field]);
            }

        } else {
            if (fields) {
                field = fields.get(fieldName);

                if (field && field.convert) {
                    value = field.convert(value, me);
                }
            }
            currentValue = me.get(fieldName);
            me[me.persistenceProperty][fieldName] = value;
            
            if (field && field.persist && !me.isEqual(currentValue, value)) {
                if (me.isModified(fieldName)) {
                    if (me.isEqual(modified[fieldName], value)) {
                        // the original value in me.modified equals the new value, so the
                        // field is no longer modified
                        delete modified[fieldName];
                        // we might have removed the last modified field, so check to see if
                        // there are any modified fields remaining and correct me.dirty:
                        me.dirty = false;
                        for (key in modified) {
                            if (modified.hasOwnProperty(key)){
                                me.dirty = true;
                                break;
                            }
                        }
                    }
                } else {
                    me.dirty = true;
                    modified[fieldName] = currentValue;
                }
            }

            if (!me.editing) {
                me.afterEdit();
            }
        }
    },
    
    /**
     * Checks if two values are equal, taking into account certain
     * special factors, for example dates.
     * @private
     * @param {Object} a The first value
     * @param {Object} b The second value
     * @return {Boolean} True if the values are equal
     */
    isEqual: function(a, b){
        if (Ext.isDate(a) && Ext.isDate(b)) {
            return a.getTime() === b.getTime();
        }
        return a === b;
    },
    
    /**
     * Begins an edit. While in edit mode, no events (e.g.. the `update` event) are relayed to the containing store.
     * When an edit has begun, it must be followed by either {@link #endEdit} or {@link #cancelEdit}.
     */
    beginEdit : function(){
        var me = this;
        if (!me.editing) {
            me.editing = true;
            me.dirtySave = me.dirty;
            me.dataSave = Ext.apply({}, me[me.persistenceProperty]);
            me.modifiedSave = Ext.apply({}, me.modified);
        }
    },
    
    /**
     * Cancels all changes made in the current edit operation.
     */
    cancelEdit : function(){
        var me = this;
        if (me.editing) {
            me.editing = false;
            // reset the modified state, nothing changed since the edit began
            me.modified = me.modifiedSave;
            me[me.persistenceProperty] = me.dataSave;
            me.dirty = me.dirtySave;
            delete me.modifiedSave;
            delete me.dataSave;
            delete me.dirtySave;
        }
    },
    
    /**
     * Ends an edit. If any data was modified, the containing store is notified (ie, the store's `update` event will
     * fire).
     * @param {Boolean} silent True to not notify the store of the change
     */
    endEdit : function(silent){
        var me = this;
        if (me.editing) {
            me.editing = false;
            delete me.modifiedSave;
            delete me.dataSave;
            delete me.dirtySave;
            if (silent !== true && me.dirty) {
                me.afterEdit();
            }
        }
    },
    
    /**
     * Gets a hash of only the fields that have been modified since this Model was created or commited.
     * @return {Object}
     */
    getChanges : function(){
        var modified = this.modified,
            changes  = {},
            field;

        for (field in modified) {
            if (modified.hasOwnProperty(field)){
                changes[field] = this.get(field);
            }
        }

        return changes;
    },
    
    /**
     * Returns true if the passed field name has been `{@link #modified}` since the load or last commit.
     * @param {String} fieldName {@link Ext.data.Field#name}
     * @return {Boolean}
     */
    isModified : function(fieldName) {
        return this.modified.hasOwnProperty(fieldName);
    },
    
    /**
     * Marks this **Record** as `{@link #dirty}`. This method is used interally when adding `{@link #phantom}` records
     * to a {@link Ext.data.proxy.Server#writer writer enabled store}.
     *
     * Marking a record `{@link #dirty}` causes the phantom to be returned by {@link Ext.data.Store#getUpdatedRecords}
     * where it will have a create action composed for it during {@link Ext.data.Model#save model save} operations.
     */
    setDirty : function() {
        var me = this,
            name;
        
        me.dirty = true;

        me.fields.each(function(field) {
            if (field.persist) {
                name = field.name;
                me.modified[name] = me.get(name);
            }
        }, me);
    },

    //<debug>
    markDirty : function() {
        if (Ext.isDefined(Ext.global.console)) {
            Ext.global.console.warn('Ext.data.Model: markDirty has been deprecated. Use setDirty instead.');
        }
        return this.setDirty.apply(this, arguments);
    },
    //</debug>
    
    /**
     * Usually called by the {@link Ext.data.Store} to which this model instance has been {@link #join joined}. Rejects
     * all changes made to the model instance since either creation, or the last commit operation. Modified fields are
     * reverted to their original values.
     *
     * Developers should subscribe to the {@link Ext.data.Store#update} event to have their code notified of reject
     * operations.
     *
     * @param {Boolean} silent (optional) True to skip notification of the owning store of the change.
     * Defaults to false.
     */
    reject : function(silent) {
        var me = this,
            modified = me.modified,
            field;

        for (field in modified) {
            if (modified.hasOwnProperty(field)) {
                if (typeof modified[field] != "function") {
                    me[me.persistenceProperty][field] = modified[field];
                }
            }
        }

        me.dirty = false;
        me.editing = false;
        me.modified = {};

        if (silent !== true) {
            me.afterReject();
        }
    },

    /**
     * Usually called by the {@link Ext.data.Store} which owns the model instance. Commits all changes made to the
     * instance since either creation or the last commit operation.
     *
     * Developers should subscribe to the {@link Ext.data.Store#update} event to have their code notified of commit
     * operations.
     *
     * @param {Boolean} silent (optional) True to skip notification of the owning store of the change.
     * Defaults to false.
     */
    commit : function(silent) {
        var me = this;
        
        me.dirty = false;
        me.editing = false;

        me.modified = {};

        if (silent !== true) {
            me.afterCommit();
        }
    },

    /**
     * Creates a copy (clone) of this Model instance.
     *
     * @param {String} id (optional) A new id, defaults to the id of the instance being copied.
     * See `{@link Ext.data.Model#id id}`. To generate a phantom instance with a new id use:
     *
     *     var rec = record.copy(); // clone the record
     *     Ext.data.Model.id(rec); // automatically generate a unique sequential id
     *
     * @return {Record}
     */
    copy : function(newId) {
        var me = this;
        
        return new me.self(Ext.apply({}, me[me.persistenceProperty]), newId || me.internalId);
    },

    /**
     * Sets the Proxy to use for this model. Accepts any options that can be accepted by
     * {@link Ext#createByAlias Ext.createByAlias}.
     *
     * @param {String/Object/Ext.data.proxy.Proxy} proxy The proxy
     * @return {Ext.data.proxy.Proxy}
     */
    setProxy: function(proxy) {
        //make sure we have an Ext.data.proxy.Proxy object
        if (!proxy.isProxy) {
            if (typeof proxy === "string") {
                proxy = {
                    type: proxy
                };
            }
            proxy = Ext.createByAlias("proxy." + proxy.type, proxy);
        }
        proxy.setModel(this.self);
        this.proxy = proxy;

        return proxy;
    },

    /**
     * Returns the configured Proxy for this Model.
     * @return {Ext.data.proxy.Proxy} The proxy
     */
    getProxy: function() {
        return this.proxy;
    },

    /**
     * Validates the current data against all of its configured {@link #validations}.
     * @return {Ext.data.Errors} The errors object
     */
    validate: function() {
        var errors      = Ext.create('Ext.data.Errors'),
            validations = this.validations,
            validators  = Ext.data.validations,
            length, validation, field, valid, type, i;

        if (validations) {
            length = validations.length;

            for (i = 0; i < length; i++) {
                validation = validations[i];
                field = validation.field || validation.name;
                type  = validation.type;
                valid = validators[type](validation, this.get(field));

                if (!valid) {
                    errors.add({
                        field  : field,
                        message: validation.message || validators[type + 'Message']
                    });
                }
            }
        }

        return errors;
    },

    /**
     * Checks if the model is valid. See {@link #validate}.
     * @return {Boolean} True if the model is valid.
     */
    isValid: function(){
        return this.validate().isValid();
    },

    /**
     * Saves the model instance using the configured proxy.
     * @param {Object} options Options to pass to the proxy
     * @return {Ext.data.Model} The Model instance
     */
    save: function(options) {
        options = Ext.apply({}, options);

        var me     = this,
            action = me.phantom ? 'create' : 'update',
            record = null,
            scope  = options.scope || me,
            operation,
            callback;

        Ext.apply(options, {
            records: [me],
            action : action
        });

        operation = Ext.create('Ext.data.Operation', options);

        callback = function(operation) {
            if (operation.wasSuccessful()) {
                record = operation.getRecords()[0];
                //we need to make sure we've set the updated data here. Ideally this will be redundant once the
                //ModelCache is in place
                me.set(record.data);
                record.dirty = false;

                Ext.callback(options.success, scope, [record, operation]);
            } else {
                Ext.callback(options.failure, scope, [record, operation]);
            }

            Ext.callback(options.callback, scope, [record, operation]);
        };

        me.getProxy()[action](operation, callback, me);

        return me;
    },

    /**
     * Destroys the model using the configured proxy.
     * @param {Object} options Options to pass to the proxy
     * @return {Ext.data.Model} The Model instance
     */
    destroy: function(options){
        options = Ext.apply({}, options);

        var me     = this,
            record = null,
            scope  = options.scope || me,
            operation,
            callback;

        Ext.apply(options, {
            records: [me],
            action : 'destroy'
        });

        operation = Ext.create('Ext.data.Operation', options);
        callback = function(operation) {
            if (operation.wasSuccessful()) {
                Ext.callback(options.success, scope, [record, operation]);
            } else {
                Ext.callback(options.failure, scope, [record, operation]);
            }
            Ext.callback(options.callback, scope, [record, operation]);
        };

        me.getProxy().destroy(operation, callback, me);
        return me;
    },

    /**
     * Returns the unique ID allocated to this model instance as defined by {@link #idProperty}.
     * @return {Number} The id
     */
    getId: function() {
        return this.get(this.idProperty);
    },

    /**
     * Sets the model instance's id field to the given id.
     * @param {Number} id The new id
     */
    setId: function(id) {
        this.set(this.idProperty, id);
    },

    /**
     * Tells this model instance that it has been added to a store.
     * @param {Ext.data.Store} store The store to which this model has been added.
     */
    join : function(store) {
        /**
         * @property {Ext.data.Store} store
         * The {@link Ext.data.Store Store} to which this Record belongs.
         */
        this.store = store;
    },

    /**
     * Tells this model instance that it has been removed from the store.
     * @param {Ext.data.Store} store The store from which this model has been removed.
     */
    unjoin: function(store) {
        delete this.store;
    },

    /**
     * @private
     * If this Model instance has been {@link #join joined} to a {@link Ext.data.Store store}, the store's
     * afterEdit method is called
     */
    afterEdit : function() {
        this.callStore('afterEdit');
    },

    /**
     * @private
     * If this Model instance has been {@link #join joined} to a {@link Ext.data.Store store}, the store's
     * afterReject method is called
     */
    afterReject : function() {
        this.callStore("afterReject");
    },

    /**
     * @private
     * If this Model instance has been {@link #join joined} to a {@link Ext.data.Store store}, the store's
     * afterCommit method is called
     */
    afterCommit: function() {
        this.callStore('afterCommit');
    },

    /**
     * @private
     * Helper function used by afterEdit, afterReject and afterCommit. Calls the given method on the
     * {@link Ext.data.Store store} that this instance has {@link #join joined}, if any. The store function
     * will always be called with the model instance as its single argument.
     * @param {String} fn The function to call on the store
     */
    callStore: function(fn) {
        var store = this.store;

        if (store !== undefined && typeof store[fn] == "function") {
            store[fn](this);
        }
    },

    /**
     * Gets all of the data from this Models *loaded* associations. It does this recursively - for example if we have a
     * User which hasMany Orders, and each Order hasMany OrderItems, it will return an object like this:
     *
     *     {
     *         orders: [
     *             {
     *                 id: 123,
     *                 status: 'shipped',
     *                 orderItems: [
     *                     ...
     *                 ]
     *             }
     *         ]
     *     }
     *
     * @return {Object} The nested data set for the Model's loaded associations
     */
    getAssociatedData: function(){
        return this.prepareAssociatedData(this, [], null);
    },

    /**
     * @private
     * This complex-looking method takes a given Model instance and returns an object containing all data from
     * all of that Model's *loaded* associations. See (@link #getAssociatedData}
     * @param {Ext.data.Model} record The Model instance
     * @param {Array} ids PRIVATE. The set of Model instance internalIds that have already been loaded
     * @param {String} associationType (optional) The name of the type of association to limit to.
     * @return {Object} The nested data set for the Model's loaded associations
     */
    prepareAssociatedData: function(record, ids, associationType) {
        //we keep track of all of the internalIds of the models that we have loaded so far in here
        var associations     = record.associations.items,
            associationCount = associations.length,
            associationData  = {},
            associatedStore, associatedName, associatedRecords, associatedRecord,
            associatedRecordCount, association, id, i, j, type, allow;

        for (i = 0; i < associationCount; i++) {
            association = associations[i];
            type = association.type;
            allow = true;
            if (associationType) {
                allow = type == associationType;
            }
            if (allow && type == 'hasMany') {

                //this is the hasMany store filled with the associated data
                associatedStore = record[association.storeName];

                //we will use this to contain each associated record's data
                associationData[association.name] = [];

                //if it's loaded, put it into the association data
                if (associatedStore && associatedStore.data.length > 0) {
                    associatedRecords = associatedStore.data.items;
                    associatedRecordCount = associatedRecords.length;

                    //now we're finally iterating over the records in the association. We do this recursively
                    for (j = 0; j < associatedRecordCount; j++) {
                        associatedRecord = associatedRecords[j];
                        // Use the id, since it is prefixed with the model name, guaranteed to be unique
                        id = associatedRecord.id;

                        //when we load the associations for a specific model instance we add it to the set of loaded ids so that
                        //we don't load it twice. If we don't do this, we can fall into endless recursive loading failures.
                        if (Ext.Array.indexOf(ids, id) == -1) {
                            ids.push(id);

                            associationData[association.name][j] = associatedRecord.data;
                            Ext.apply(associationData[association.name][j], this.prepareAssociatedData(associatedRecord, ids, type));
                        }
                    }
                }
            } else if (allow && type == 'belongsTo') {
                associatedRecord = record[association.instanceName];
                if (associatedRecord !== undefined) {
                    id = associatedRecord.id;
                    if (Ext.Array.indexOf(ids, id) == -1) {
                        ids.push(id);
                        associationData[association.name] = associatedRecord.data;
                        Ext.apply(associationData[association.name], this.prepareAssociatedData(associatedRecord, ids, type));
                    }
                }
            }
        }

        return associationData;
    }
});
