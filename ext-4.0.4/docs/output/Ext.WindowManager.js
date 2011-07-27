Ext.data.JsonP.Ext_WindowManager({
  "href": "ZIndexManager.html#Ext-WindowManager",
  "component": false,
  "singleton": true,
  "code_type": "assignment",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.ZIndexManager"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Brings the specified Component to the front of any other active Components in this ZIndexManager. ...",
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
            "name": "comp"
          }
        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-bringToFront",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the dialog was brought to the front, else false\nif it was already in front</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ZIndexManager.html",
        "linenr": 227,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "bringToFront",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Brings the specified Component to the front of any other active Components in this ZIndexManager.</p>\n"
      },
      {
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": true,
        "inheritable": false,
        "html_filename": "Base3.html",
        "linenr": 269,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n"
      },
      {
        "shortDoc": "Call the parent's overridden method. ...",
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "inheritable": false,
        "html_filename": "Base3.html",
        "linenr": 124,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n"
      },
      {
        "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to execute for each item</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Component in the iteration.</p>\n",
            "name": "scope"
          }
        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-each",
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
        "html_filename": "ZIndexManager.html",
        "linenr": 345,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "each",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.</p>\n"
      },
      {
        "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to execute for each item</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function\nis executed. Defaults to the current Component in the iteration.</p>\n",
            "name": "scope"
          }
        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-eachBottomUp",
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
        "html_filename": "ZIndexManager.html",
        "linenr": 361,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "eachBottomUp",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.\nThe components are passed to the function starting at the bottom and proceeding to the top.</p>\n"
      },
      {
        "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to execute for each item</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function\nis executed. Defaults to the current Component in the iteration.</p>\n",
            "name": "scope"
          }
        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-eachTopDown",
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
        "html_filename": "ZIndexManager.html",
        "linenr": 382,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "eachTopDown",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.\nThe components are passed to the function starting at the top and proceeding to the bottom.</p>\n"
      },
      {
        "shortDoc": "Gets a registered Component by id. ...",
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
            "name": "id"
          }
        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-get",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ZIndexManager.html",
        "linenr": 218,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "get",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Gets a registered Component by id.</p>\n"
      },
      {
        "shortDoc": "Gets the currently-active Component in this ZIndexManager. ...",
        "params": [

        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-getActive",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The active Component</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ZIndexManager.html",
        "linenr": 313,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "getActive",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Gets the currently-active Component in this ZIndexManager.</p>\n"
      },
      {
        "shortDoc": "Returns zero or more Components in this ZIndexManager using the custom search function passed to this method. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The search function</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Component being tested.\nthat gets passed to the function if not specified)</p>\n",
            "name": "scope"
          }
        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-getBy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An array of zero or more matching windows</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ZIndexManager.html",
        "linenr": 321,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "getBy",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Returns zero or more Components in this ZIndexManager using the custom search function passed to this method.\nThe function should accept a single <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> reference as its only argument and should\nreturn true if the Component matches the search criteria, otherwise it should return false.</p>\n"
      },
      {
        "shortDoc": "Hides all Components managed by this ZIndexManager. ...",
        "params": [

        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-hideAll",
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
        "html_filename": "ZIndexManager.html",
        "linenr": 260,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "hideAll",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Hides all Components managed by this ZIndexManager.</p>\n"
      },
      {
        "shortDoc": "Initialize configuration for this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "inheritable": false,
        "html_filename": "Base3.html",
        "linenr": 63,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n"
      },
      {
        "shortDoc": "Registers a floating Ext.Component with this ZIndexManager. ...",
        "params": [
          {
            "type": "Component",
            "optional": false,
            "doc": "<p>The Component to register.</p>\n",
            "name": "comp"
          }
        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-register",
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
        "html_filename": "ZIndexManager.html",
        "linenr": 178,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "register",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Registers a floating <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> with this ZIndexManager. This should not\nneed to be called under normal circumstances. Floating Components (such as Windows, BoundLists and Menus) are automatically registered\nwith a <a href=\"#/api/Ext.Component-property-zIndexManager\" rel=\"Ext.Component-property-zIndexManager\" class=\"docClass\">zIndexManager</a> at render time.</p>\n\n\n<p>Where this may be useful is moving Windows between two ZIndexManagers. For example,\nto bring the <a href=\"#/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a> dialog under the same manager as the Desktop's\nZIndexManager in the desktop sample app:</p>\n\n\n<p><code></p>\n\n<pre>MyDesktop.getDesktop().getManager().register(Ext.MessageBox);\n</pre>\n\n\n<p></code></p>\n"
      },
      {
        "shortDoc": "Sends the specified Component to the back of other active Components in this ZIndexManager. ...",
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
            "name": "comp"
          }
        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-sendToBack",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The Component</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "ZIndexManager.html",
        "linenr": 247,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "sendToBack",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Sends the specified Component to the back of other active Components in this ZIndexManager.</p>\n"
      },
      {
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "inheritable": false,
        "html_filename": "Base3.html",
        "linenr": 199,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n"
      },
      {
        "shortDoc": "Unregisters a Ext.Component from this ZIndexManager. ...",
        "params": [
          {
            "type": "Component",
            "optional": false,
            "doc": "<p>The Component to unregister.</p>\n",
            "name": "comp"
          }
        ],
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-unregister",
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
        "html_filename": "ZIndexManager.html",
        "linenr": 200,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "name": "unregister",
        "owner": "Ext.ZIndexManager",
        "doc": "<p>Unregisters a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> from this ZIndexManager. This should not\nneed to be called. Components are automatically unregistered upon destruction.\nSee <a href=\"#/api/Ext.WindowManager-method-register\" rel=\"Ext.WindowManager-method-register\" class=\"docClass\">register</a>.</p>\n\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "type": "Class",
        "href": "Base3.html#Ext-Base-property-self",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": true,
        "inheritable": false,
        "html_filename": "Base3.html",
        "linenr": 18,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n"
      }
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
  "html_filename": "ZIndexManager.html",
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
  "author": null,
  "subclasses": [

  ],
  "linenr": 410,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
  "private": false,
  "xtypes": [

  ],
  "name": "Ext.WindowManager",
  "doc": "<p>The default global floating Component group that is available automatically.</p>\n\n\n<p>This manages instances of floating Components which were rendered programatically without\nbeing added to a <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>, and for floating Components which were added into non-floating Containers.</p>\n\n\n<p><i>Floating</i> Containers create their own instance of ZIndexManager, and floating Components added at any depth below\nthere are managed by that ZIndexManager.</p>\n\n",
  "extends": "Ext.ZIndexManager",
  "docauthor": null
});