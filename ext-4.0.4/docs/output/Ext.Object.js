Ext.data.JsonP.Ext_Object({
  "href": "Object.html#Ext-Object",
  "component": false,
  "singleton": true,
  "code_type": "nop",
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "members": {
    "method": [
      {
        "shortDoc": "Iterate through an object and invoke the given callback function for each iteration. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The object to iterate</p>\n",
            "name": "object"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The callback function. Passed arguments for each iteration are:</p>\n\n<ul>\n<li>{String} <code>key</code></li>\n<li>{Mixed} <code>value</code></li>\n<li>{Object} <code>object</code> The object itself</li>\n</ul>\n\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n",
            "name": "scope"
          }
        ],
        "href": "Object.html#Ext-Object-method-each",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 275,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "each",
        "owner": "Ext.Object",
        "doc": "<p>Iterate through an object and invoke the given callback function for each iteration. The iteration can be stop\nby returning <code>false</code> in the callback function. For example:</p>\n\n<pre><code>var person = {\n    name: 'Jacky'\n    hairColor: 'black'\n    loves: ['food', 'sleeping', 'wife']\n};\n\nExt.Object.each(person, function(key, value, myself) {\n    console.log(key + \":\" + value);\n\n    if (key === 'hairColor') {\n        return false; // stop the iteration\n    }\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "Converts a query string back into an object. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The query string to decode</p>\n",
            "name": "queryString"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) Whether or not to recursively decode the string. This format is supported by\nPHP / Ruby on Rails servers and similar. Defaults to false</p>\n",
            "name": "recursive"
          }
        ],
        "href": "Object.html#Ext-Object-method-fromQueryString",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 156,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "fromQueryString",
        "owner": "Ext.Object",
        "doc": "<p>Converts a query string back into an object.</p>\n\n<ul>\n<li><p>Non-recursive:</p>\n\n<p>  Ext.Object.fromQueryString(foo=1&amp;bar=2); // returns {foo: 1, bar: 2}\n  Ext.Object.fromQueryString(foo=&amp;bar=2); // returns {foo: null, bar: 2}\n  Ext.Object.fromQueryString(some%20price=%24300); // returns {'some price': '$300'}\n  Ext.Object.fromQueryString(colors=red&amp;colors=green&amp;colors=blue); // returns {colors: ['red', 'green', 'blue']}</p></li>\n<li><p>Recursive:</p>\n\n<p>  Ext.Object.fromQueryString(\"username=Jacky&amp;dateOfBirth[day]=1&amp;dateOfBirth[month]=2&amp;dateOfBirth[year]=1911&amp;hobbies[0]=coding&amp;hobbies[1]=eating&amp;hobbies[2]=sleeping&amp;hobbies[3][0]=nested&amp;hobbies[3][1]=stuff\", true);</p>\n\n<p>  // returns\n  {</p>\n\n<pre><code>  username: 'Jacky',\n  dateOfBirth: {\n      day: '1',\n      month: '2',\n      year: '1911'\n  },\n  hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]\n</code></pre>\n\n<p>  }</p></li>\n</ul>\n\n"
      },
      {
        "shortDoc": "Returns the first matching key corresponding to the given value. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "object"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The value to find</p>\n",
            "name": "value"
          }
        ],
        "href": "Object.html#Ext-Object-method-getKey",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 388,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "getKey",
        "owner": "Ext.Object",
        "doc": "<p>Returns the first matching key corresponding to the given value.\nIf no matching value is found, null is returned.</p>\n\n<pre><code>var person = {\n    name: 'Jacky',\n    loves: 'food'\n};\n\nalert(Ext.Object.getKey(sencha, 'loves')); // alerts 'food'\n</code></pre>\n"
      },
      {
        "shortDoc": "Gets all keys of the given object as an array. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "object"
          }
        ],
        "href": "Object.html#Ext-Object-method-getKeys",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An array of keys from the object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 438,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "getKeys",
        "owner": "Ext.Object",
        "doc": "<p>Gets all keys of the given object as an array.</p>\n\n<pre><code>var values = Ext.Object.getKeys({\n    name: 'Jacky',\n    loves: 'food'\n}); // ['name', 'loves']\n</code></pre>\n"
      },
      {
        "shortDoc": "Gets the total number of this object's own properties\n\nvar size = Ext.Object.getSize({\n    name: 'Jacky',\n    loves: ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "object"
          }
        ],
        "href": "Object.html#Ext-Object-method-getSize",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "<p>size</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 463,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "getSize",
        "owner": "Ext.Object",
        "doc": "<p>Gets the total number of this object's own properties</p>\n\n<pre><code>var size = Ext.Object.getSize({\n    name: 'Jacky',\n    loves: 'food'\n}); // size equals 2\n</code></pre>\n"
      },
      {
        "shortDoc": "Gets all values of the given object as an array. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "object"
          }
        ],
        "href": "Object.html#Ext-Object-method-getValues",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An array of values from the object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 413,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "getValues",
        "owner": "Ext.Object",
        "doc": "<p>Gets all values of the given object as an array.</p>\n\n<pre><code>var values = Ext.Object.getValues({\n    name: 'Jacky',\n    loves: 'food'\n}); // ['Jacky', 'food']\n</code></pre>\n"
      },
      {
        "shortDoc": "Merges any number of objects recursively without referencing them or their children. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>,...</p>\n",
            "name": "object"
          }
        ],
        "href": "Object.html#Ext-Object-method-merge",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>merged The object that is created as a result of merging all the objects passed in.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 313,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "merge",
        "owner": "Ext.Object",
        "doc": "<p>Merges any number of objects recursively without referencing them or their children.</p>\n\n<pre><code>var extjs = {\n    companyName: 'Ext JS',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer'],\n    isSuperCool: true\n    office: {\n        size: 2000,\n        location: 'Palo Alto',\n        isFun: true\n    }\n};\n\nvar newStuff = {\n    companyName: 'Sencha Inc.',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],\n    office: {\n        size: 40000,\n        location: 'Redwood City'\n    }\n};\n\nvar sencha = Ext.Object.merge(extjs, newStuff);\n\n// extjs and sencha then equals to\n{\n    companyName: 'Sencha Inc.',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],\n    isSuperCool: true\n    office: {\n        size: 30000,\n        location: 'Redwood City'\n        isFun: true\n    }\n}\n</code></pre>\n"
      },
      {
        "shortDoc": "Convert a name - value pair to an array of objects with support for nested structures; useful to construct\nquery stri...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "name"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "\n",
            "name": "value"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "\n",
            "name": "recursive"
          }
        ],
        "href": "Object.html#Ext-Object-method-toQueryObjects",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 15,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "toQueryObjects",
        "owner": "Ext.Object",
        "doc": "<p>Convert a <code>name</code> - <code>value</code> pair to an array of objects with support for nested structures; useful to construct\nquery strings. For example:</p>\n\n<pre><code>var objects = Ext.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);\n\n// objects then equals:\n[\n    { name: 'hobbies', value: 'reading' },\n    { name: 'hobbies', value: 'cooking' },\n    { name: 'hobbies', value: 'swimming' },\n];\n\nvar objects = Ext.Object.toQueryObjects('dateOfBirth', {\n    day: 3,\n    month: 8,\n    year: 1987,\n    extra: {\n        hour: 4\n        minute: 30\n    }\n}, true); // Recursive\n\n// objects then equals:\n[\n    { name: 'dateOfBirth[day]', value: 3 },\n    { name: 'dateOfBirth[month]', value: 8 },\n    { name: 'dateOfBirth[year]', value: 1987 },\n    { name: 'dateOfBirth[extra][hour]', value: 4 },\n    { name: 'dateOfBirth[extra][minute]', value: 30 },\n];\n</code></pre>\n"
      },
      {
        "shortDoc": "Takes an object and converts it to an encoded query string\n\n\nNon-recursive:\n\n  Ext.Object.toQueryString({foo: 1, bar:...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The object to encode</p>\n",
            "name": "object"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Whether or not to interpret the object in recursive format.\n(PHP / Ruby on Rails servers and similar). Defaults to false</p>\n",
            "name": "recursive"
          }
        ],
        "href": "Object.html#Ext-Object-method-toQueryString",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>queryString</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Object.html",
        "linenr": 95,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "name": "toQueryString",
        "owner": "Ext.Object",
        "doc": "<p>Takes an object and converts it to an encoded query string</p>\n\n<ul>\n<li><p>Non-recursive:</p>\n\n<p>  Ext.Object.toQueryString({foo: 1, bar: 2}); // returns \"foo=1&amp;bar=2\"\n  Ext.Object.toQueryString({foo: null, bar: 2}); // returns \"foo=&amp;bar=2\"\n  Ext.Object.toQueryString({'some price': '$300'}); // returns \"some%20price=%24300\"\n  Ext.Object.toQueryString({date: new Date(2011, 0, 1)}); // returns \"date=%222011-01-01T00%3A00%3A00%22\"\n  Ext.Object.toQueryString({colors: ['red', 'green', 'blue']}); // returns \"colors=red&amp;colors=green&amp;colors=blue\"</p></li>\n<li><p>Recursive:</p>\n\n<p>  Ext.Object.toQueryString({</p>\n\n<pre><code>  username: 'Jacky',\n  dateOfBirth: {\n      day: 1,\n      month: 2,\n      year: 1911\n  },\n  hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]\n</code></pre>\n\n  }, true); // returns the following string (broken down and url-decoded for ease of reading purpose):\n\n<pre><code>        // username=Jacky\n        //    &amp;dateOfBirth[day]=1&amp;dateOfBirth[month]=2&amp;dateOfBirth[year]=1911\n        //    &amp;hobbies[0]=coding&amp;hobbies[1]=eating&amp;hobbies[2]=sleeping&amp;hobbies[3][0]=nested&amp;hobbies[3][1]=stuff\n</code></pre></li>\n</ul>\n\n"
      }
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
  "html_filename": "Object.html",
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
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "subclasses": [

  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.Object",
  "doc": "<p>A collection of useful static methods to deal with objects</p>\n",
  "extends": null,
  "docauthor": "Jacky Nguyen <jacky@sencha.com>"
});