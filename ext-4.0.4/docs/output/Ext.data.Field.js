Ext.data.JsonP.Ext_data_Field({
  "href": "Field3.html#Ext-data-Field",
  "component": false,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "members": {
    "method": [

    ],
    "css_mixin": [

    ],
    "property": [

    ],
    "cfg": [
      {
        "shortDoc": "A function which converts the value provided by the Reader into an object that will be stored in the Model. ...",
        "type": "Function",
        "href": "Field3.html#Ext-data-Field-cfg-convert",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Field3.html",
        "linenr": 154,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "convert",
        "owner": "Ext.data.Field",
        "doc": "<p>A function which converts the value provided by the Reader into an object that will be stored in the Model.\nIt is passed the following parameters:</p>\n\n<ul>\n<li><p><strong>v</strong> : Mixed</p>\n\n<p>The data value as read by the Reader, if undefined will use the configured <code><a href=\"#/api/Ext.data.Field-cfg-defaultValue\" rel=\"Ext.data.Field-cfg-defaultValue\" class=\"docClass\">defaultValue</a></code>.</p></li>\n<li><p><strong>rec</strong> : Ext.data.Model</p>\n\n<p>The data object containing the Model as read so far by the Reader. Note that the Model may not be fully populated\nat this point as the fields are read in the order that they are defined in your\n<a href=\"#/api/Ext.data.Model-cfg-fields\" rel=\"Ext.data.Model-cfg-fields\" class=\"docClass\">fields</a> array.</p></li>\n</ul>\n\n\n<p>Example of convert functions:</p>\n\n<pre><code>function fullName(v, record){\n    return record.name.last + ', ' + record.name.first;\n}\n\nfunction location(v, record){\n    return !record.city ? '' : (record.city + ', ' + record.state);\n}\n\nExt.define('Dude', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'fullname',  convert: fullName},\n        {name: 'firstname', mapping: 'name.first'},\n        {name: 'lastname',  mapping: 'name.last'},\n        {name: 'city', defaultValue: 'homeless'},\n        'state',\n        {name: 'location',  convert: location}\n    ]\n});\n\n// create the data store\nvar store = new Ext.data.Store({\n    reader: {\n        type: 'json',\n        model: 'Dude',\n        idProperty: 'key',\n        root: 'daRoot',\n        totalProperty: 'total'\n    }\n});\n\nvar myData = [\n    { key: 1,\n      name: { first: 'Fat',    last:  'Albert' }\n      // notice no city, state provided in data object\n    },\n    { key: 2,\n      name: { first: 'Barney', last:  'Rubble' },\n      city: 'Bedrock', state: 'Stoneridge'\n    },\n    { key: 3,\n      name: { first: 'Cliff',  last:  'Claven' },\n      city: 'Boston',  state: 'MA'\n    }\n];\n</code></pre>\n"
      },
      {
        "shortDoc": "Used when converting received data into a Date when the type is specified as \"date\". ...",
        "type": "String",
        "href": "Field3.html#Ext-data-Field-cfg-dateFormat",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Field3.html",
        "linenr": 220,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "dateFormat",
        "owner": "Ext.data.Field",
        "doc": "<p>Used when converting received data into a Date when the <a href=\"#/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">type</a> is specified as <code>\"date\"</code>.</p>\n\n<p>A format string for the <a href=\"#/api/Ext.Date-method-parse\" rel=\"Ext.Date-method-parse\" class=\"docClass\">Ext.Date.parse</a> function, or \"timestamp\" if the value provided by\nthe Reader is a UNIX timestamp, or \"time\" if the value provided by the Reader is a javascript millisecond\ntimestamp. See <a href=\"#/api/Ext.Date\" rel=\"Ext.Date\" class=\"docClass\">Ext.Date</a>.</p>\n"
      },
      {
        "shortDoc": "The default value used when a Model is being created by a Reader\nwhen the item referenced by the mapping does not exi...",
        "type": "Mixed",
        "href": "Field3.html#Ext-data-Field-cfg-defaultValue",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Field3.html",
        "linenr": 239,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "defaultValue",
        "owner": "Ext.data.Field",
        "doc": "<p>The default value used <strong>when a Model is being created by a <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Reader</a></strong>\nwhen the item referenced by the <code><a href=\"#/api/Ext.data.Field-cfg-mapping\" rel=\"Ext.data.Field-cfg-mapping\" class=\"docClass\">mapping</a></code> does not exist in the data object\n(i.e. undefined). Defaults to \"\".</p>\n"
      },
      {
        "shortDoc": "(Optional) A path expression for use by the Ext.data.reader.Reader implementation that is creating the\nModel to extra...",
        "type": "String/Number",
        "href": "Field3.html#Ext-data-Field-cfg-mapping",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Field3.html",
        "linenr": 248,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "mapping",
        "owner": "Ext.data.Field",
        "doc": "<p>(Optional) A path expression for use by the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> implementation that is creating the\n<a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> to extract the Field value from the data object. If the path expression is the same\nas the field name, the mapping may be omitted.</p>\n\n<p>The form of the mapping expression depends on the Reader being used.</p>\n\n<ul>\n<li><p><a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">Ext.data.reader.Json</a></p>\n\n<p>The mapping is a string containing the javascript expression to reference the data from an element of the data\nitem's <a href=\"#/api/Ext.data.reader.Json-cfg-root\" rel=\"Ext.data.reader.Json-cfg-root\" class=\"docClass\">root</a> Array. Defaults to the field name.</p></li>\n<li><p><a href=\"#/api/Ext.data.reader.Xml\" rel=\"Ext.data.reader.Xml\" class=\"docClass\">Ext.data.reader.Xml</a></p>\n\n<p>The mapping is an <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">Ext.DomQuery</a> path to the data item relative to the DOM element that represents the\n<a href=\"#/api/Ext.data.reader.Xml-cfg-record\" rel=\"Ext.data.reader.Xml-cfg-record\" class=\"docClass\">record</a>. Defaults to the field name.</p></li>\n<li><p><a href=\"#/api/Ext.data.reader.Array\" rel=\"Ext.data.reader.Array\" class=\"docClass\">Ext.data.reader.Array</a></p>\n\n<p>The mapping is a number indicating the Array index of the field's value. Defaults to the field specification's\nArray position.</p></li>\n</ul>\n\n\n<p>If a more complex value extraction strategy is required, then configure the Field with a <a href=\"#/api/Ext.data.Field-cfg-convert\" rel=\"Ext.data.Field-cfg-convert\" class=\"docClass\">convert</a>\nfunction. This is passed the whole row object, and may interrogate it in whatever way is necessary in order to\nreturn the desired data.</p>\n"
      },
      {
        "shortDoc": "The name by which the field is referenced within the Model. ...",
        "type": "String",
        "href": "Field3.html#Ext-data-Field-cfg-name",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Field3.html",
        "linenr": 124,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "name",
        "owner": "Ext.data.Field",
        "doc": "<p>The name by which the field is referenced within the Model. This is referenced by, for example, the <code>dataIndex</code>\nproperty in column definition objects passed to <a href=\"#/api/Ext.grid.property.HeaderContainer\" rel=\"Ext.grid.property.HeaderContainer\" class=\"docClass\">Ext.grid.property.HeaderContainer</a>.</p>\n\n<p>Note: In the simplest case, if no properties other than <code>name</code> are required, a field definition may consist of\njust a String for the field name.</p>\n"
      },
      {
        "shortDoc": "False to exclude this field from the Ext.data.Model.modified fields in a model. ...",
        "type": "Boolean",
        "href": "Field3.html#Ext-data-Field-cfg-persist",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Field3.html",
        "linenr": 318,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "persist",
        "owner": "Ext.data.Field",
        "doc": "<p>False to exclude this field from the <a href=\"#/api/Ext.data.Model-property-modified\" rel=\"Ext.data.Model-property-modified\" class=\"docClass\">Ext.data.Model.modified</a> fields in a model. This will also exclude\nthe field from being written using a <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a>. This option is useful when model fields are\nused to keep state on the client but do not need to be persisted to the server. Defaults to true.</p>\n"
      },
      {
        "shortDoc": "Initial direction to sort (\"ASC\" or \"DESC\"). ...",
        "type": "String",
        "href": "Field3.html#Ext-data-Field-cfg-sortDir",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Field3.html",
        "linenr": 302,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "sortDir",
        "owner": "Ext.data.Field",
        "doc": "<p>Initial direction to sort (<code>\"ASC\"</code> or <code>\"DESC\"</code>). Defaults to <code>\"ASC\"</code>.</p>\n"
      },
      {
        "shortDoc": "A function which converts a Field's value to a comparable value in order to ensure correct sort ordering. ...",
        "type": "Function",
        "href": "Field3.html#Ext-data-Field-cfg-sortType",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Field3.html",
        "linenr": 278,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "sortType",
        "owner": "Ext.data.Field",
        "doc": "<p>A function which converts a Field's value to a comparable value in order to ensure correct sort ordering.\nPredefined functions are provided in <a href=\"#/api/Ext.data.SortTypes\" rel=\"Ext.data.SortTypes\" class=\"docClass\">Ext.data.SortTypes</a>. A custom sort example:</p>\n\n<pre><code>// current sort     after sort we want\n// +-+------+          +-+------+\n// |1|First |          |1|First |\n// |2|Last  |          |3|Second|\n// |3|Second|          |2|Last  |\n// +-+------+          +-+------+\n\nsortType: function(value) {\n   switch (value.toLowerCase()) // native toLowerCase():\n   {\n      case 'first': return 1;\n      case 'second': return 2;\n      default: return 3;\n   }\n}\n</code></pre>\n"
      },
      {
        "shortDoc": "The data type for automatic conversion from received data to the stored value if\nconvert has not been specified. ...",
        "type": "Mixed",
        "href": "Field3.html#Ext-data-Field-cfg-type",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Field3.html",
        "linenr": 134,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "type",
        "owner": "Ext.data.Field",
        "doc": "<p>The data type for automatic conversion from received data to the <em>stored</em> value if\n<code><a href=\"#/api/Ext.data.Field-cfg-convert\" rel=\"Ext.data.Field-cfg-convert\" class=\"docClass\">convert</a></code> has not been specified. This may be specified as a string value.\nPossible values are</p>\n\n<ul>\n<li>auto (Default, implies no conversion)</li>\n<li>string</li>\n<li>int</li>\n<li>float</li>\n<li>boolean</li>\n<li>date</li>\n</ul>\n\n\n<p>This may also be specified by referencing a member of the <a href=\"#/api/Ext.data.Types\" rel=\"Ext.data.Types\" class=\"docClass\">Ext.data.Types</a> class.</p>\n\n<p>Developers may create their own application-specific data types by defining new members of the <a href=\"#/api/Ext.data.Types\" rel=\"Ext.data.Types\" class=\"docClass\">Ext.data.Types</a> class.</p>\n"
      },
      {
        "shortDoc": "Use when converting received data into a Number type (either int or float). ...",
        "type": "Boolean",
        "href": "Field3.html#Ext-data-Field-cfg-useNull",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Field3.html",
        "linenr": 231,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
        "private": false,
        "name": "useNull",
        "owner": "Ext.data.Field",
        "doc": "<p>Use when converting received data into a Number type (either int or float). If the value cannot be\nparsed, null will be used if useNull is true, otherwise the value will be 0. Defaults to false.</p>\n"
      }
    ],
    "event": [

    ],
    "css_var": [

    ]
  },
  "deprecated": null,
  "tagname": "class",
  "mixins": [

  ],
  "static": false,
  "alias": null,
  "allMixins": [

  ],
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [

  ],
  "html_filename": "Field3.html",
  "statics": {
    "method": [

    ],
    "css_mixin": [

    ],
    "property": [

    ],
    "cfg": [

    ],
    "event": [

    ],
    "css_var": [

    ]
  },
  "author": "Ed Spencer",
  "subclasses": [

  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Field.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.data.Field",
  "doc": "<p>Fields are used to define what a Model is. They aren't instantiated directly - instead, when we create a class that\nextends <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>, it will automatically create a Field instance for each field configured in a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>. For example, we might set up a model like this:</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        'name', 'email',\n        {name: 'age', type: 'int'},\n        {name: 'gender', type: 'string', defaultValue: 'Unknown'}\n    ]\n});\n</code></pre>\n\n<p>Four fields will have been created for the User Model - name, email, age and gender. Note that we specified a couple\nof different formats here; if we only pass in the string name of the field (as with name and email), the field is set\nup with the 'auto' type. It's as if we'd done this instead:</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'name', type: 'auto'},\n        {name: 'email', type: 'auto'},\n        {name: 'age', type: 'int'},\n        {name: 'gender', type: 'string', defaultValue: 'Unknown'}\n    ]\n});\n</code></pre>\n\n<h1>Types and conversion</h1>\n\n<p>The <a href=\"#/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">type</a> is important - it's used to automatically convert data passed to the field into the correct format.\nIn our example above, the name and email fields used the 'auto' type and will just accept anything that is passed\ninto them. The 'age' field had an 'int' type however, so if we passed 25.4 this would be rounded to 25.</p>\n\n<p>Sometimes a simple type isn't enough, or we want to perform some processing when we load a Field's data. We can do\nthis using a <a href=\"#/api/Ext.data.Field-cfg-convert\" rel=\"Ext.data.Field-cfg-convert\" class=\"docClass\">convert</a> function. Here, we're going to create a new field based on another:</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        'name', 'email',\n        {name: 'age', type: 'int'},\n        {name: 'gender', type: 'string', defaultValue: 'Unknown'},\n\n        {\n            name: 'firstName',\n            convert: function(value, record) {\n                var fullName  = record.get('name'),\n                    splits    = fullName.split(\" \"),\n                    firstName = splits[0];\n\n                return firstName;\n            }\n        }\n    ]\n});\n</code></pre>\n\n<p>Now when we create a new User, the firstName is populated automatically based on the name:</p>\n\n<pre><code>var ed = Ext.ModelManager.create({name: 'Ed Spencer'}, 'User');\n\nconsole.log(ed.get('firstName')); //logs 'Ed', based on our convert function\n</code></pre>\n\n<p>In fact, if we log out all of the data inside ed, we'll see this:</p>\n\n<pre><code>console.log(ed.data);\n\n//outputs this:\n{\n    age: 0,\n    email: \"\",\n    firstName: \"Ed\",\n    gender: \"Unknown\",\n    name: \"Ed Spencer\"\n}\n</code></pre>\n\n<p>The age field has been given a default of zero because we made it an int type. As an auto field, email has defaulted\nto an empty string. When we registered the User model we set gender's <a href=\"#/api/Ext.data.Field-cfg-defaultValue\" rel=\"Ext.data.Field-cfg-defaultValue\" class=\"docClass\">defaultValue</a> to 'Unknown' so we see\nthat now. Let's correct that and satisfy ourselves that the types work as we expect:</p>\n\n<pre><code>ed.set('gender', 'Male');\ned.get('gender'); //returns 'Male'\n\ned.set('age', 25.4);\ned.get('age'); //returns 25 - we wanted an int, not a float, so no decimal places allowed\n</code></pre>\n",
  "extends": "Object",
  "docauthor": null
});