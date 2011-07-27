Ext.data.JsonP.Ext_tree_View({
  "href": "View3.html#Ext-tree-View",
  "component": true,
  "singleton": false,
  "code_type": "ext_define",
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.AbstractComponent",
    "Ext.Component",
    "Ext.view.AbstractView",
    "Ext.view.View",
    "Ext.view.Table"
  ],
  "members": {
    "method": [
      {
        "shortDoc": "Creates new Component. ...",
        "params": [
          {
            "type": "Ext.core.Element/String/Object",
            "optional": false,
            "doc": "<p>The configuration options may be specified as either:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>an element</b> :\n<p class=\"sub-desc\">it is set as the internal element and its id used as the component id</p></li>\n<li><b>a string</b> :\n<p class=\"sub-desc\">it is assumed to be the id of an existing element and is used as the component id</p></li>\n<li><b>anything else</b> :\n<p class=\"sub-desc\">it is assumed to be a standard config object and is applied to the component</p></li>\n</ul></div>\n\n",
            "name": "config"
          }
        ],
        "href": "Component2.html#Ext-Component-method-constructor",
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
        "html_filename": "Component2.html",
        "linenr": 1,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "constructor",
        "owner": "Ext.Component",
        "doc": "<p>Creates new Component.</p>\n"
      },
      {
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClass",
        "deprecated": {
          "version": "4.0",
          "tagname": "deprecated",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Time-method-addCls\" rel=\"Ext.picker.Time-method-addCls\" class=\"docClass\">addCls</a></p>\n\n\n\n",
          "doc": "Adds a CSS class to the top level element representing this component."
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2412,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "addClass",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n"
      },
      {
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addCls",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2390,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "addCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n"
      },
      {
        "shortDoc": "Adds a cls to the uiCls array, which will also call addUIClsToElement and adds\nto all elements of this component. ...",
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>A string or an array of strings to add to the uiCls</p>\n",
            "name": "cls"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Boolean) skip True to skip adding it to the class and do it later (via the return)</p>\n",
            "name": "skip"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClsWithUI",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1547,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "addClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a cls to the uiCls array, which will also call <a href=\"#/api/Ext.tree.View-method-addUIClsToElement\" rel=\"Ext.tree.View-method-addUIClsToElement\" class=\"docClass\">addUIClsToElement</a> and adds\nto all elements of this component.</p>\n"
      },
      {
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "name": "o"
          },
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>Optional additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "name": "more"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
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
        "html_filename": "Observable.html",
        "linenr": 494,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n"
      },
      {
        "shortDoc": "Appends an event handler to this object. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.tree.View-method-fireEvent\" rel=\"Ext.tree.View-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addListener",
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
        "html_filename": "Observable.html",
        "linenr": 278,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n"
      },
      {
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
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
        "html_filename": "Observable.html",
        "linenr": 156,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n"
      },
      {
        "shortDoc": "Adds a CSS Class to a specific row. ...",
        "params": [
          {
            "type": "HTMLElement/String/Number/Ext.data.Model",
            "optional": false,
            "doc": "<p>An HTMLElement, index or instance of a model\nrepresenting this row</p>\n",
            "name": "rowInfo"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "cls"
          }
        ],
        "href": "Table3.html#Ext-view-Table-method-addRowCls",
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
        "html_filename": "Table3.html",
        "linenr": 396,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/Table.js",
        "private": false,
        "name": "addRowCls",
        "owner": "Ext.view.Table",
        "doc": "<p>Adds a CSS Class to a specific row.</p>\n"
      },
      {
        "shortDoc": "Add events that will trigger the state to be saved. ...",
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The event name or an array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-method-addStateEvents",
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
        "html_filename": "Stateful.html",
        "linenr": 159,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "addStateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Add events that will trigger the state to be saved.</p>\n"
      },
      {
        "shortDoc": "Method which adds a specified UI + uiCls to the components element. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The UI to remove from the element</p>\n",
            "name": "ui"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addUIClsToElement",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1618,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "addUIClsToElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which adds a specified UI + uiCls to the components element.\nCan be overridden to remove the UI from more than just the components element.</p>\n"
      },
      {
        "shortDoc": " ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "name": "isSetSize"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>Container requesting the layout. Only used when isSetSize is false.</p>\n",
            "name": "callingContainer"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-afterComponentLayout",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2781,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "afterComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "\n"
      },
      {
        "shortDoc": "Aligns this floating Component to the specified element ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element or <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> to align to. If passing a component, it must be a\nomponent instance. If a string id is passed, it will be used as an element id.</p>\n",
            "name": "element"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to (see <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">Ext.core.Element.alignTo</a> for more details).</p>\n",
            "name": "position"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "name": "offsets"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-alignTo",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 177,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "alignTo",
        "owner": "Ext.util.Floating",
        "doc": "<p>Aligns this floating Component to the specified element</p>\n"
      },
      {
        "shortDoc": "Perform custom animation on this object. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing properties which describe the animation's start and end states, and the timeline of the animation.</p>\n",
            "name": "config"
          }
        ],
        "href": "Animate.html#Ext-util-Animate-method-animate",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 207,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "animate",
        "owner": "Ext.util.Animate",
        "doc": "<p>Perform custom animation on this object.<p>\n<p>This method is applicable to both the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class and the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> class.\nIt performs animated transitions of certain properties of this object over a specified timeline.</p>\n<p>The sole parameter is an object which specifies start property values, end property values, and properties which\ndescribe the timeline. Of the properties listed below, only <b><code>to</code></b> is mandatory.</p>\n<p>Properties include<ul>\n<li><code>from</code> <div class=\"sub-desc\">An object which specifies start values for the properties being animated.\nIf not supplied, properties are animated from current settings. The actual properties which may be animated depend upon\nths object being animated. See the sections below on Element and Component animation.<div></li>\n<li><code>to</code> <div class=\"sub-desc\">An object which specifies end values for the properties being animated.</div></li>\n<li><code>duration</code><div class=\"sub-desc\">The duration <b>in milliseconds</b> for which the animation will run.</div></li>\n<li><code>easing</code> <div class=\"sub-desc\">A string value describing an easing type to modify the rate of change from the default linear to non-linear. Values may be one of:<code><ul>\n<li>ease</li>\n<li>easeIn</li>\n<li>easeOut</li>\n<li>easeInOut</li>\n<li>backIn</li>\n<li>backOut</li>\n<li>elasticIn</li>\n<li>elasticOut</li>\n<li>bounceIn</li>\n<li>bounceOut</li>\n</ul></code></div></li>\n<li><code>keyframes</code> <div class=\"sub-desc\">This is an object which describes the state of animated properties at certain points along the timeline.\nit is an object containing properties who's names are the percentage along the timeline being described and who's values specify the animation state at that point.</div></li>\n<li><code>listeners</code> <div class=\"sub-desc\">This is a standard <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration object which may be used\nto inject behaviour at either the <code>beforeanimate</code> event or the <code>afteranimate</code> event.</div></li>\n</ul></p>\n<h3>Animating an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The element's CSS <code>left</code> value. Units must be supplied.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The element's CSS <code>top</code> value. Units must be supplied.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The element's CSS <code>width</code> value. Units must be supplied.</div></li>\n<li><code>height</code> <div class=\"sub-desc\">The element's CSS <code>height</code> value. Units must be supplied.</div></li>\n<li><code>scrollLeft</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>scrollTop</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>opacity</code> <div class=\"sub-desc\">The element's <code>opacity</code> value. This must be a value between <code>0</code> and <code>1</code>.</div></li>\n</ul>\n<p><b>Be aware than animating an Element which is being used by an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> Component without in some way informing the Component about the changed element state\nwill result in incorrect Component behaviour. This is because the Component will be using the old state of the element. To avoid this problem, it is now possible to\ndirectly animate certain properties of Components.</b></p>\n<h3>Animating a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The Component's page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The Component's page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The Component's <code>left</code> value in pixels.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The Component's <code>top</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>dynamic</code> <div class=\"sub-desc\">Specify as true to update the Component's layout (if it is a Container) at every frame\nof the animation. <i>Use sparingly as laying out on every intermediate size change is an expensive operation</i>.</div></li>\n</ul>\n<p>For example, to animate a Window to a new size, ensuring that its internal layout, and any shadow is correct:</p>\n<pre><code>myWindow = Ext.create('Ext.window.Window', {\n    title: 'Test Component animation',\n    width: 500,\n    height: 300,\n    layout: {\n        type: 'hbox',\n        align: 'stretch'\n    },\n    items: [{\n        title: 'Left: 33%',\n        margins: '5 0 5 5',\n        flex: 1\n    }, {\n        title: 'Left: 66%',\n        margins: '5 5 5 5',\n        flex: 2\n    }]\n});\nmyWindow.show();\nmyWindow.header.el.on('click', function() {\n    myWindow.animate({\n        to: {\n            width: (myWindow.getWidth() == 500) ? 700 : 500,\n            height: (myWindow.getHeight() == 300) ? 400 : 300,\n        }\n    });\n});\n</code></pre>\n<p>For performance reasons, by default, the internal layout is only updated when the Window reaches its final <code>\"to\"</code> size. If dynamic updating of the Window's child\nComponents is required, then configure the animation with <code>dynamic: true</code> and the two child items will maintain their proportions during the animation.</p>\n\n"
      },
      {
        "shortDoc": "Applies the state to the object. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The state</p>\n",
            "name": "state"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-method-applyState",
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
        "html_filename": "Stateful.html",
        "linenr": 225,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "applyState",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Applies the state to the object. This should be overridden in subclasses to do\nmore complex state operations. By default it applies the state properties onto\nthe current object.</p>\n"
      },
      {
        "shortDoc": "Occurs before componentLayout is run. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "name": "isSetSize"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>Container requesting sent the layout. Only used when isSetSize is false.</p>\n",
            "name": "callingContainer"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-beforeComponentLayout",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2792,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforeComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the componentLayout\nfrom being executed.</p>\n"
      },
      {
        "shortDoc": "Changes the data store bound to this view and refreshes it. ...",
        "params": [
          {
            "type": "Store",
            "optional": false,
            "doc": "<p>The store to bind to this view</p>\n",
            "name": "store"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-bindStore",
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
        "html_filename": "AbstractView.html",
        "linenr": 536,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "bindStore",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Changes the data store bound to this view and refreshes it.</p>\n"
      },
      {
        "shortDoc": "Bubbles up the component/container heirarchy, calling the specified function with each component. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope of the function (defaults to current node)</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current component)</p>\n",
            "name": "args"
          }
        ],
        "href": "Component2.html#Ext-Component-method-bubble",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 1011,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "bubble",
        "owner": "Ext.Component",
        "doc": "<p>Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe bubble is stopped.</p>\n"
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
        "shortDoc": "Center this Component in its container. ...",
        "params": [

        ],
        "href": "Floating.html#Ext-util-Floating-method-center",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 264,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "center",
        "owner": "Ext.util.Floating",
        "doc": "<p>Center this Component in its container.</p>\n"
      },
      {
        "shortDoc": "Un-highlights the currently highlighted item, if any. ...",
        "params": [

        ],
        "href": "View.html#Ext-view-View-method-clearHighlight",
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
        "html_filename": "View.html",
        "linenr": 574,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "clearHighlight",
        "owner": "Ext.view.View",
        "doc": "<p>Un-highlights the currently highlighted item, if any.</p>\n"
      },
      {
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
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
        "html_filename": "Observable.html",
        "linenr": 425,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n"
      },
      {
        "shortDoc": "Removes all managed listeners for this object. ...",
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
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
        "html_filename": "Observable.html",
        "linenr": 454,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n"
      },
      {
        "shortDoc": "Clone the current component using the original config values passed into this instance by default. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A new config containing any properties to override in the cloned version.\nAn id property can be passed on this object, otherwise one will be generated to avoid duplicates.</p>\n",
            "name": "overrides"
          }
        ],
        "href": "Component2.html#Ext-Component-method-cloneConfig",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>clone The cloned copy of this component</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 951,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "cloneConfig",
        "owner": "Ext.Component",
        "doc": "<p>Clone the current component using the original config values passed into this instance by default.</p>\n"
      },
      {
        "shortDoc": "Collapse a record that is loaded in the view. ...",
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record to collapse</p>\n",
            "name": "record"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to collapse nodes all the way up the tree hierarchy.</p>\n",
            "name": "deep"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) The function to run after the collapse is completed</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope of the callback function.</p>\n",
            "name": "scope"
          }
        ],
        "href": "View3.html#Ext-tree-View-method-collapse",
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
        "html_filename": "View3.html",
        "linenr": 421,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/View.js",
        "private": false,
        "name": "collapse",
        "owner": "Ext.tree.View",
        "doc": "<p>Collapse a record that is loaded in the view.</p>\n"
      },
      {
        "shortDoc": "Function which can be overridden which returns the data object passed to this\nDataView's template to render the whole...",
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>s to be rendered into the DataView.</p>\n",
            "name": "records"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the index number of the Record being prepared for rendering.</p>\n",
            "name": "startIndex"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-collectData",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An Array of data objects to be processed by a repeating XTemplate. May also\ncontain <i>named</i> properties.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 406,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "collectData",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Function which can be overridden which returns the data object passed to this\nDataView's <a href=\"#/api/Ext.tree.View-cfg-tpl\" rel=\"Ext.tree.View-cfg-tpl\" class=\"docClass\">template</a> to render the whole DataView.</p>\n\n\n<p>This is usually an Array of data objects, each element of which is processed by an\n<a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> which uses <tt>'&lt;tpl for=\".\"&gt;'</tt> to iterate over its supplied\ndata object as an Array. However, <i>named</i> properties may be placed into the data object to\nprovide non-repeating data such as headings, totals etc.</p>\n\n"
      },
      {
        "shortDoc": "Deselects a record instance by record instance or index. ...",
        "params": [
          {
            "type": "Ext.data.Model/Index",
            "optional": false,
            "doc": "<p>An array of records or an index</p>\n",
            "name": "records"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Set to false to not fire a deselect event</p>\n",
            "name": "suppressEvent"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-deselect",
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
        "html_filename": "AbstractView.html",
        "linenr": 683,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "deselect",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Deselects a record instance by record instance or index.</p>\n"
      },
      {
        "shortDoc": "Destroys the Component. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-destroy",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2974,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Destroys the Component.</p>\n"
      },
      {
        "shortDoc": "Disable the component. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing true, will supress the 'disable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-disable",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2329,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Disable the component.</p>\n"
      },
      {
        "shortDoc": "Handles autoRender. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doAutoRender",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 987,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "doAutoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Handles autoRender.\nFloating Components may have an ownerCt. If they are asking to be constrained, constrain them within that\nownerCt, and have their z-index managed locally. Floating Components are always rendered to document.body</p>\n"
      },
      {
        "shortDoc": "This method needs to be called whenever you change something on this component that requires the Component's\nlayout t...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "width"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "height"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "isSetSize"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "callingContainer"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doComponentLayout",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2714,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "doComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method needs to be called whenever you change something on this component that requires the Component's\nlayout to be recalculated.</p>\n"
      },
      {
        "shortDoc": "Moves this floating Component into a constrain region. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Optional. The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this Component is\nto be constrained. Defaults to the element into which this floating Component was rendered.</p>\n",
            "name": "constrainTo"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-doConstrain",
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
        "html_filename": "Floating.html",
        "linenr": 136,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "doConstrain",
        "owner": "Ext.util.Floating",
        "doc": "<p>Moves this floating Component into a constrain region.</p>\n\n<p>By default, this Component is constrained to be within the container it was added to, or the element it was\nrendered to.</p>\n\n<p>An alternative constraint may be passed.</p>\n"
      },
      {
        "shortDoc": "Enable the component ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing false will supress the 'enable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-enable",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2306,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable the component</p>\n"
      },
      {
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
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
        "html_filename": "Observable.html",
        "linenr": 609,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "Expand a record that is loaded in the view. ...",
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record to expand</p>\n",
            "name": "record"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to expand nodes all the way down the tree hierarchy.</p>\n",
            "name": "deep"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) The function to run after the expand is completed</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope of the callback function.</p>\n",
            "name": "scope"
          }
        ],
        "href": "View3.html#Ext-tree-View-method-expand",
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
        "html_filename": "View3.html",
        "linenr": 410,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/View.js",
        "private": false,
        "name": "expand",
        "owner": "Ext.tree.View",
        "doc": "<p>Expand a record that is loaded in the view.</p>\n"
      },
      {
        "shortDoc": "Returns the template node the passed child belongs to, or null if it doesn't belong to one. ...",
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-findItemByChild",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>The template node</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 598,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "findItemByChild",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Returns the template node the passed child belongs to, or null if it doesn't belong to one.</p>\n"
      },
      {
        "shortDoc": "This method finds the topmost active layout who's processing will eventually determine the size and position of this\n...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-findLayoutController",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 943,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "findLayoutController",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method finds the topmost active layout who's processing will eventually determine the size and position of this\nComponent.<p>\n<p>This method is useful when dynamically adding Components into Containers, and some processing must take place after the\nfinal sizing and positioning of the Component has been performed.</p>\n\n"
      },
      {
        "shortDoc": "Find a container above this component at any level by a custom function. ...",
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The custom function to call with the arguments (container, this component).</p>\n",
            "name": "fn"
          }
        ],
        "href": "Component2.html#Ext-Component-method-findParentBy",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container for which the custom function returns true</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 982,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "findParentBy",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by a custom function. If the passed function returns\ntrue, the container will be returned.</p>\n"
      },
      {
        "shortDoc": "Find a container above this component at any level by xtype or class\n\n\nSee also the up method. ...",
        "params": [
          {
            "type": "String/Class",
            "optional": false,
            "doc": "<p>The xtype string for a component, or the class of the component directly</p>\n",
            "name": "xtype"
          }
        ],
        "href": "Component2.html#Ext-Component-method-findParentByType",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container which matches the given xtype or class</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 996,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "findParentByType",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by xtype or class</p>\n\n\n<p>See also the <a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">up</a> method.</p>\n\n"
      },
      {
        "shortDoc": "Returns the template node by the Ext.EventObject or null if it is not found. ...",
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "\n",
            "name": "e"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-findTargetByEvent",
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
        "html_filename": "AbstractView.html",
        "linenr": 607,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "findTargetByEvent",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Returns the template node by the <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> or null if it is not found.</p>\n"
      },
      {
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to fire.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object...",
            "optional": false,
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "name": "args"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 233,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.tree.View-method-addListener\" rel=\"Ext.tree.View-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.tree.View-method-enableBubble\" rel=\"Ext.tree.View-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n"
      },
      {
        "shortDoc": "Try to focus this component. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If applicable, true to also select the text in this component</p>\n",
            "name": "selectText"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) Delay the focus this number of milliseconds (true for 10 milliseconds).</p>\n",
            "name": "delay"
          }
        ],
        "href": "Component2.html#Ext-Component-method-focus",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 860,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "focus",
        "owner": "Ext.Component",
        "doc": "<p>Try to focus this component.</p>\n"
      },
      {
        "shortDoc": "Focuses a particular row and brings it into view. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>An HTMLElement template node, index of a template node, the id of a template node or the\nrecord associated with the node.</p>\n",
            "name": "rowIdx"
          }
        ],
        "href": "Table3.html#Ext-view-Table-method-focusRow",
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
        "html_filename": "Table3.html",
        "linenr": 488,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/Table.js",
        "private": false,
        "name": "focusRow",
        "owner": "Ext.view.Table",
        "doc": "<p>Focuses a particular row and brings it into view. Will fire the rowfocus event.</p>\n"
      },
      {
        "shortDoc": "Forces this component to redo its componentLayout. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-forceComponentLayout",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2755,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "forceComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Forces this component to redo its componentLayout.</p>\n"
      },
      {
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-getActiveAnimation",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 377,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "getActiveAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n"
      },
      {
        "shortDoc": "Gets the current box measurements of the component's underlying element. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "href": "Component2.html#Ext-Component-method-getBox",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>box An object in the format {x, y, width, height}</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 542,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "getBox",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current box measurements of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getBubbleTarget",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>the Container which owns this Component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2527,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getBubbleTarget",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.</p>\n"
      },
      {
        "shortDoc": "Retrieves the top level element representing this component. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getEl",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2143,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the top level element representing this component.</p>\n"
      },
      {
        "shortDoc": "Get a reference to a feature ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The id of the feature</p>\n",
            "name": "id"
          }
        ],
        "href": "Table3.html#Ext-view-Table-method-getFeature",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.grid.feature.Feature",
          "doc": "<p>The feature. Undefined if not found</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Table3.html",
        "linenr": 158,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/Table.js",
        "private": false,
        "name": "getFeature",
        "owner": "Ext.view.Table",
        "doc": "<p>Get a reference to a feature</p>\n"
      },
      {
        "shortDoc": "Gets the current height of the component's underlying element. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getHeight",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2881,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current height of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "Retrieves the id of this component. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getId",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2131,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n"
      },
      {
        "shortDoc": "This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insert...",
        "params": [
          {
            "type": "String/Number/Element/HTMLElement",
            "optional": false,
            "doc": "<p>Index, element id or element you want\nto put this component before.</p>\n",
            "name": "position"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getInsertPosition",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>DOM element that you can use in the insertBefore</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 1758,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getInsertPosition",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insertBefore.</p>\n"
      },
      {
        "shortDoc": "Gets the Ext.ComponentLoader for this Component. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getLoader",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.ComponentLoader",
          "doc": "<p>The loader instance, null if it doesn't exist.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2889,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getLoader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> for this Component.</p>\n"
      },
      {
        "shortDoc": "Gets a template node. ...",
        "params": [
          {
            "type": "HTMLElement/String/Number/Ext.data.Model",
            "optional": false,
            "doc": "<p>An HTMLElement template node, index of a template node,\nthe id of a template node or the record associated with the node.</p>\n",
            "name": "nodeInfo"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getNode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>The node or null if it wasn't found</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 692,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "getNode",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets a template node.</p>\n"
      },
      {
        "shortDoc": "Gets a range nodes. ...",
        "params": [
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index of the first node in the range</p>\n",
            "name": "start"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index of the last node in the range</p>\n",
            "name": "end"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getNodes",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An array of nodes</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 731,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "getNodes",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets a range nodes.</p>\n"
      },
      {
        "shortDoc": "Retrieves a plugin by its pluginId which has been bound to this\ncomponent. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "pluginId"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getPlugin",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.AbstractPlugin",
          "doc": "<p>pluginInstance</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 3017,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getPlugin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves a plugin by its pluginId which has been bound to this\ncomponent.</p>\n"
      },
      {
        "shortDoc": "Gets the current XY position of the component's underlying element. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "href": "Component2.html#Ext-Component-method-getPosition",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>The XY position of the element (e.g., [100, 200])</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 607,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "getPosition",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current XY position of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "Gets a record from a node ...",
        "params": [
          {
            "type": "Element/HTMLElement",
            "optional": false,
            "doc": "<p>The node to evaluate</p>\n",
            "name": "node"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getRecord",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Record",
          "doc": "<p>record The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 651,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "getRecord",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets a record from a node</p>\n"
      },
      {
        "shortDoc": "Gets an array of the records from an array of nodes ...",
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The nodes to evaluate</p>\n",
            "name": "nodes"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getRecords",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>records The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 633,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "getRecords",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets an array of the records from an array of nodes</p>\n"
      },
      {
        "shortDoc": "Override this function to apply custom CSS classes to rows during rendering. ...",
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record corresponding to the current row.</p>\n",
            "name": "record"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The row index.</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p><strong>DEPRECATED.</strong> For row body use the\n<a href=\"#/api/Ext.grid.feature.RowBody-method-getAdditionalData\" rel=\"Ext.grid.feature.RowBody-method-getAdditionalData\" class=\"docClass\">getAdditionalData</a> method of the rowbody feature.</p>\n",
            "name": "rowParams"
          },
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>The store this grid is bound to</p>\n",
            "name": "store"
          }
        ],
        "href": "Table3.html#Ext-view-Table-method-getRowClass",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>a CSS class name to add to the row.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Table3.html",
        "linenr": 43,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/Table.js",
        "private": false,
        "name": "getRowClass",
        "owner": "Ext.view.Table",
        "doc": "<p>Override this function to apply custom CSS classes to rows during rendering. This function should return the\nCSS class name (or empty string '' for none) that will be added to the row's wrapping div. To apply multiple\nclass names, simply return them space-delimited within the string (e.g. 'my-class another-class').\nExample usage:</p>\n\n<pre><code>viewConfig: {\n    getRowClass: function(record, rowIndex, rowParams, store){\n        return record.get(\"valid\") ? \"row-valid\" : \"row-error\";\n    }\n}\n</code></pre>\n"
      },
      {
        "shortDoc": "Gets the currently selected nodes. ...",
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getSelectedNodes",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An array of HTMLElements</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 616,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "getSelectedNodes",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets the currently selected nodes.</p>\n"
      },
      {
        "shortDoc": "Gets an array of the selected records ...",
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getSelectedRecords",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array",
          "doc": "<p>An array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 828,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "getSelectedRecords",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets an array of the selected records</p>\n"
      },
      {
        "shortDoc": "Gets the number of selected nodes. ...",
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getSelectionCount",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "<p>The node count</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 817,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "getSelectionCount",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets the number of selected nodes.</p>\n"
      },
      {
        "shortDoc": "Gets the selection model for this view. ...",
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getSelectionModel",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.selection.Model",
          "doc": "<p>The selection model</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 314,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "getSelectionModel",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets the selection model for this view.</p>\n"
      },
      {
        "shortDoc": "Gets the current size of the component's underlying element. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getSize",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2865,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current size of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "The supplied default state gathering method for the AbstractComponent class. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getState",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 809,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getState",
        "owner": "Ext.AbstractComponent",
        "doc": "<p></p>The supplied default state gathering method for the AbstractComponent class.</p>\nThis method returns dimension setings such as <code>flex</code>, <code>anchor</code>, <code>width</code>\nand <code>height</code> along with <code>collapsed</code> state.</p></p>\n\n<p>Subclasses which implement more complex state should call the superclass's implementation, and apply their state\nto the result if this basic state is to be saved.</p>\n\n\n<p>Note that Component state will only be saved if the Component has a <a href=\"#/api/Ext.tree.View-cfg-stateId\" rel=\"Ext.tree.View-cfg-stateId\" class=\"docClass\">stateId</a> and there as a StateProvider\nconfigured for the document.</p>\n\n"
      },
      {
        "shortDoc": "Gets the state id for this object. ...",
        "params": [

        ],
        "href": "Stateful.html#Ext-state-Stateful-method-getStateId",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The state id, null if not found.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 237,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "getStateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Gets the state id for this object.</p>\n"
      },
      {
        "shortDoc": "Returns the store associated with this DataView. ...",
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getStore",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.data.Store",
          "doc": "<p>The store</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 528,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "getStore",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Returns the store associated with this DataView.</p>\n"
      },
      {
        "shortDoc": "Returns the configured chunker or default of Ext.view.TableChunker ...",
        "params": [

        ],
        "href": "Table3.html#Ext-view-Table-method-getTableChunker",
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
        "html_filename": "Table3.html",
        "linenr": 389,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/Table.js",
        "private": false,
        "name": "getTableChunker",
        "owner": "Ext.view.Table",
        "doc": "<p>Returns the configured chunker or default of Ext.view.TableChunker</p>\n"
      },
      {
        "shortDoc": "Gets the base TreeStore from the bound TreePanel. ...",
        "params": [

        ],
        "href": "View3.html#Ext-tree-View-method-getTreeStore",
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
        "html_filename": "View3.html",
        "linenr": 470,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/View.js",
        "private": false,
        "name": "getTreeStore",
        "owner": "Ext.tree.View",
        "doc": "<p>Gets the base TreeStore from the bound TreePanel.</p>\n"
      },
      {
        "shortDoc": "Gets the current width of the component's underlying element. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getWidth",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2873,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current width of the component's underlying element.</p>\n"
      },
      {
        "shortDoc": "Gets the xtype for this component as registered with Ext.ComponentManager. ...",
        "params": [

        ],
        "href": "Component2.html#Ext-Component-method-getXType",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The xtype</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 969,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "getXType",
        "owner": "Ext.Component",
        "doc": "<p>Gets the xtype for this component as registered with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a>. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header. Example usage:</p>\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXType());  // alerts 'textfield'\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Returns this Component's xtype hierarchy as a slash-delimited string. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getXTypes",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>The xtype hierarchy string</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2189,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "getXTypes",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXTypes());  // alerts 'component/field/textfield'\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-hasActiveFx",
        "deprecated": {
          "version": "4.0",
          "tagname": "deprecated",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Time-method-getActiveAnimation\" rel=\"Ext.picker.Time-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a></p>\n\n\n\n",
          "doc": "Returns thq current animation if this object has any effects actively running or queued, else returns false."
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 369,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "hasActiveFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n"
      },
      {
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 530,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n"
      },
      {
        "shortDoc": "Checks if there is currently a specified uiCls ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The cls to check</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-hasUICls",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1607,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hasUICls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Checks if there is currently a specified uiCls</p>\n"
      },
      {
        "shortDoc": "Hides this Component, setting it to invisible using the configured hideMode. ...",
        "params": [
          {
            "type": "String/Element/Component",
            "optional": true,
            "doc": "<p>(optional) <b>only valid for <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b>.\nThe target to which the Component should animate while hiding (defaults to null with no animation)</p>\n",
            "name": "animateTarget"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) A callback function to call after the Component is hidden.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Component2.html#Ext-Component-method-hide",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 755,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "hide",
        "owner": "Ext.Component",
        "doc": "<p>Hides this Component, setting it to invisible using the configured <a href=\"#/api/Ext.tree.View-cfg-hideMode\" rel=\"Ext.tree.View-cfg-hideMode\" class=\"docClass\">hideMode</a>.</p>\n"
      },
      {
        "shortDoc": "Highlights a given item in the DataView. ...",
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item to highlight</p>\n",
            "name": "item"
          }
        ],
        "href": "View.html#Ext-view-View-method-highlightItem",
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
        "html_filename": "View.html",
        "linenr": 561,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "highlightItem",
        "owner": "Ext.view.View",
        "doc": "<p>Highlights a given item in the DataView. This is called by the mouseover handler if <a href=\"#/api/Ext.tree.View-cfg-overItemCls\" rel=\"Ext.tree.View-cfg-overItemCls\" class=\"docClass\">overItemCls</a>\nand <a href=\"#/api/Ext.tree.View-cfg-trackOver\" rel=\"Ext.tree.View-cfg-trackOver\" class=\"docClass\">trackOver</a> are configured, but can also be called manually by other code, for instance to\nhandle stepping through the list via keyboard navigation.</p>\n"
      },
      {
        "shortDoc": "Finds the index of the passed node. ...",
        "params": [
          {
            "type": "HTMLElement/String/Number/Record",
            "optional": false,
            "doc": "<p>An HTMLElement template node, index of a template node, the id of a template node\nor a record associated with a node.</p>\n",
            "name": "nodeInfo"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-indexOf",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Number",
          "doc": "<p>The index of the node or -1</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 756,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "indexOf",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Finds the index of the passed node.</p>\n"
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
        "shortDoc": "Tests whether this Component matches the selector string. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector string to test against.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-is",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this Component matches the selector.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 1970,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "is",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether this Component matches the selector string.</p>\n"
      },
      {
        "shortDoc": "Determines whether this component is the descendant of a particular container. ...",
        "params": [
          {
            "type": "Ext.Container",
            "optional": false,
            "doc": "\n",
            "name": "container"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDescendantOf",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>isDescendant</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 3033,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isDescendantOf",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Determines whether this component is the descendant of a particular container.</p>\n"
      },
      {
        "shortDoc": "Method to determine whether this Component is currently disabled. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDisabled",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>the disabled state of this Component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2366,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently disabled.</p>\n"
      },
      {
        "shortDoc": "Method to determine whether this Component is draggable. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDraggable",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>the draggable state of this component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2543,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isDraggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is draggable.</p>\n"
      },
      {
        "shortDoc": "Method to determine whether this Component is droppable. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDroppable",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>the droppable state of this component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2551,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isDroppable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is droppable.</p>\n"
      },
      {
        "shortDoc": "Method to determine whether this Component is floating. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isFloating",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>the floating state of this component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2535,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isFloating",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is floating.</p>\n"
      },
      {
        "shortDoc": "Method to determine whether this Component is currently set to hidden. ...",
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isHidden",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>the hidden state of this Component.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2382,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isHidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently set to hidden.</p>\n"
      },
      {
        "shortDoc": "Returns true if the passed node is selected, else false. ...",
        "params": [
          {
            "type": "HTMLElement/Number/Ext.data.Model",
            "optional": false,
            "doc": "<p>The node, node index or record to check</p>\n",
            "name": "node"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-isSelected",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if selected, else false</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 662,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "isSelected",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Returns true if the passed node is selected, else false.</p>\n"
      },
      {
        "shortDoc": "Returns true if this component is visible. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>. <p>Optional. Pass <code>true</code> to interrogate the visibility status of all\nparent Containers to determine whether this Component is truly visible to the user.</p></p>\n\n<p>Generally, to determine whether a Component is hidden, the no argument form is needed. For example\nwhen creating dynamically laid out UIs in a hidden Container before showing them.</p>\n\n",
            "name": "deep"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isVisible",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component is visible, false otherwise.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2266,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns true if this component is visible.</p>\n"
      },
      {
        "shortDoc": "Tests whether or not this Component is of a specific xtype. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The xtype to check for this Component</p>\n",
            "name": "xtype"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) False to check whether this Component is descended from the xtype (this is\nthe default), or true to check whether this Component is directly of the specified xtype.</p>\n",
            "name": "shallow"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isXType",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component descends from the specified xtype, false otherwise.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2158,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "isXType",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended\nfrom the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>For a list of all available xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nvar isText = t.isXType('textfield');        // true\nvar isBoxSubclass = t.isXType('field');       // true, descended from <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\nvar isBoxInstance = t.isXType('field', true); // false, not a direct <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> instance\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Shorthand for addManagedListener. ...",
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "addManagedListener",
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 681,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.tree.View-method-addManagedListener\" rel=\"Ext.tree.View-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n"
      },
      {
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "removeManagedListener",
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 687,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.tree.View-method-removeManagedListener\" rel=\"Ext.tree.View-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.tree.View-method-mon\" rel=\"Ext.tree.View-method-mon\" class=\"docClass\">mon</a> method.</p>\n"
      },
      {
        "shortDoc": "Returns the next node in the Component tree in tree traversal order. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following nodes.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextNode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>The next node (or the next node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2096,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "nextNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree to attempt to find a match. Contrast with <a href=\"#/api/Ext.tree.View-method-nextSibling\" rel=\"Ext.tree.View-method-nextSibling\" class=\"docClass\">nextSibling</a>.</p>\n\n"
      },
      {
        "shortDoc": "Returns the next sibling of this Component. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following items.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextSibling",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>The next sibling (or the next sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2000,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "nextSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next sibling of this Component.</p>\n\n\n<p>Optionally selects the next sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>next()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.tree.View-method-nextNode\" rel=\"Ext.tree.View-method-nextNode\" class=\"docClass\">nextNode</a></p>\n\n"
      },
      {
        "shortDoc": "Shorthand for addListener. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.tree.View-method-fireEvent\" rel=\"Ext.tree.View-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-on",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "addListener",
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 669,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.tree.View-method-addListener\" rel=\"Ext.tree.View-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n"
      },
      {
        "shortDoc": "Function which can be overridden to provide custom formatting for each Record that is used by this\nDataView's templat...",
        "params": [
          {
            "type": "Array/Object",
            "optional": false,
            "doc": "<p>The raw data object that was used to create the Record.</p>\n",
            "name": "data"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the index number of the Record being prepared for rendering.</p>\n",
            "name": "recordIndex"
          },
          {
            "type": "Record",
            "optional": false,
            "doc": "<p>The Record being prepared for rendering.</p>\n",
            "name": "record"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-prepareData",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Array/Object",
          "doc": "<p>The formatted data in a format expected by the internal <a href=\"#/api/Ext.tree.View-cfg-tpl\" rel=\"Ext.tree.View-cfg-tpl\" class=\"docClass\">template</a>'s overwrite() method.\n(either an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'}))</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 390,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "prepareData",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Function which can be overridden to provide custom formatting for each Record that is used by this\nDataView's <a href=\"#/api/Ext.tree.View-cfg-tpl\" rel=\"Ext.tree.View-cfg-tpl\" class=\"docClass\">template</a> to render each node.</p>\n"
      },
      {
        "shortDoc": "Returns the previous node in the Component tree in tree traversal order. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding nodes.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousNode",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>The previous node (or the previous node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2060,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "previousNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree in reverse order to attempt to find a match. Contrast with <a href=\"#/api/Ext.tree.View-method-previousSibling\" rel=\"Ext.tree.View-method-previousSibling\" class=\"docClass\">previousSibling</a>.</p>\n\n"
      },
      {
        "shortDoc": "Returns the previous sibling of this Component. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding items.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousSibling",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "<p>The previous sibling (or the previous sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2030,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "previousSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous sibling of this Component.</p>\n\n\n<p>Optionally selects the previous sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>prev()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.tree.View-method-previousNode\" rel=\"Ext.tree.View-method-previousNode\" class=\"docClass\">previousNode</a></p>\n\n"
      },
      {
        "shortDoc": "Refreshes the grid view. ...",
        "params": [

        ],
        "href": "Table3.html#Ext-view-Table-method-refresh",
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
        "html_filename": "Table3.html",
        "linenr": 607,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/Table.js",
        "private": false,
        "name": "refresh",
        "owner": "Ext.view.Table",
        "doc": "<p>Refreshes the grid view. Saves and restores the scroll state, generates a new template, stripes rows and\ninvalidates the scrollers.</p>\n"
      },
      {
        "shortDoc": "Refreshes an individual node's data from the store. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's data index in the store</p>\n",
            "name": "index"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-refreshNode",
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
        "html_filename": "AbstractView.html",
        "linenr": 505,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "refreshNode",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Refreshes an individual node's data from the store.</p>\n"
      },
      {
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "name": "origin"
          },
          {
            "type": "[String]",
            "optional": false,
            "doc": "<p>Array of event names to relay.</p>\n",
            "name": "events"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "prefix"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
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
        "html_filename": "Observable.html",
        "linenr": 573,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n"
      },
      {
        "shortDoc": "Removes a CSS class from the top level element representing this component. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "className"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeCls",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2422,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "removeCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a CSS class from the top level element representing this component.</p>\n"
      },
      {
        "shortDoc": "Removes a cls to the uiCls array, which will also call removeUIClsFromElement and removes\nit from all elements of thi...",
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>A string or an array of strings to remove to the uiCls</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeClsWithUI",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1578,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "removeClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a cls to the uiCls array, which will also call <a href=\"#/api/Ext.tree.View-method-removeUIClsFromElement\" rel=\"Ext.tree.View-method-removeUIClsFromElement\" class=\"docClass\">removeUIClsFromElement</a> and removes\nit from all elements of this component.</p>\n"
      },
      {
        "shortDoc": "Removes an event handler. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.tree.View-method-addListener\" rel=\"Ext.tree.View-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
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
        "html_filename": "Observable.html",
        "linenr": 392,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n"
      },
      {
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
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
        "html_filename": "Observable.html",
        "linenr": 197,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.tree.View-method-mon\" rel=\"Ext.tree.View-method-mon\" class=\"docClass\">mon</a> method.</p>\n"
      },
      {
        "shortDoc": "Removes a CSS Class from a specific row. ...",
        "params": [
          {
            "type": "HTMLElement/String/Number/Ext.data.Model",
            "optional": false,
            "doc": "<p>An HTMLElement, index or instance of a model\nrepresenting this row</p>\n",
            "name": "rowInfo"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "cls"
          }
        ],
        "href": "Table3.html#Ext-view-Table-method-removeRowCls",
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
        "html_filename": "Table3.html",
        "linenr": 409,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/Table.js",
        "private": false,
        "name": "removeRowCls",
        "owner": "Ext.view.Table",
        "doc": "<p>Removes a CSS Class from a specific row.</p>\n"
      },
      {
        "shortDoc": "Method which removes a specified UI + uiCls from the components element. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The UI to add to the element</p>\n",
            "name": "ui"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeUIClsFromElement",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1658,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "removeUIClsFromElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which removes a specified UI + uiCls from the components element.\nThe cls which is added to the element will be: <code>this.baseCls + '-' + ui</code></p>\n"
      },
      {
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
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
        "html_filename": "Observable.html",
        "linenr": 554,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.tree.View-method-suspendEvents\" rel=\"Ext.tree.View-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n"
      },
      {
        "shortDoc": "Conditionally saves a single property from this object to the given state object. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the property to save.</p>\n",
            "name": "propName"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The state object in to which to save the property.</p>\n",
            "name": "state"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The optional name to use for the property in state.</p>\n",
            "name": "stateName"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-method-savePropToState",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the property was saved, false if not.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 274,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "savePropToState",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Conditionally saves a single property from this object to the given state object.\nThe idea is to only save state which has changed from the initial state so that\ncurrent software settings do not override future software settings. Only those\nvalues that are user-changed state should be saved.</p>\n"
      },
      {
        "shortDoc": "Saves the scrollState in a private variable. ...",
        "params": [

        ],
        "href": "Table3.html#Ext-view-Table-method-saveScrollState",
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
        "html_filename": "Table3.html",
        "linenr": 582,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/Table.js",
        "private": false,
        "name": "saveScrollState",
        "owner": "Ext.view.Table",
        "doc": "<p>Saves the scrollState in a private variable. Must be used in conjunction with restoreScrollState</p>\n"
      },
      {
        "shortDoc": "Selects a record instance by record instance or index. ...",
        "params": [
          {
            "type": "Ext.data.Model/Index",
            "optional": false,
            "doc": "<p>An array of records or an index</p>\n",
            "name": "records"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "\n",
            "name": "keepExisting"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Set to false to not fire a select event</p>\n",
            "name": "suppressEvent"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-select",
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
        "html_filename": "AbstractView.html",
        "linenr": 673,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "select",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Selects a record instance by record instance or index.</p>\n"
      },
      {
        "shortDoc": "Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence. ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-sequenceFx",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 357,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "sequenceFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.tree.View-method-syncFx\" rel=\"Ext.tree.View-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n"
      },
      {
        "shortDoc": "This method is called internally by Ext.ZIndexManager to signal that a floating Component has either been\nmoved to th...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to activate the Component, false to deactivate it (defaults to false)</p>\n",
            "name": "active"
          },
          {
            "type": "Component",
            "optional": false,
            "doc": "<p>The newly active Component which is taking over topmost zIndex position.</p>\n",
            "name": "newActive"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-setActive",
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
        "html_filename": "Floating.html",
        "linenr": 227,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "setActive",
        "owner": "Ext.util.Floating",
        "doc": "<p>This method is called internally by <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">Ext.ZIndexManager</a> to signal that a floating Component has either been\nmoved to the top of its zIndex stack, or pushed from the top of its zIndex stack.</p>\n\n<p>If a <em>Window</em> is superceded by another Window, deactivating it hides its shadow.</p>\n\n<p>This method also fires the <a href=\"#/api/Ext.Component-event-activate\" rel=\"Ext.Component-event-activate\" class=\"docClass\">activate</a> or\n<a href=\"#/api/Ext.Component-event-deactivate\" rel=\"Ext.Component-event-deactivate\" class=\"docClass\">deactivate</a> event depending on which action occurred.</p>\n"
      },
      {
        "shortDoc": "Sets the overflow on the content element of the component. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to allow the Component to auto scroll.</p>\n",
            "name": "scroll"
          }
        ],
        "href": "Component2.html#Ext-Component-method-setAutoScroll",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 362,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "setAutoScroll",
        "owner": "Ext.Component",
        "doc": "<p>Sets the overflow on the content element of the component.</p>\n"
      },
      {
        "shortDoc": "Enable or disable the component. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "\n",
            "name": "disabled"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDisabled",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2374,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable or disable the component.</p>\n"
      },
      {
        "shortDoc": "Sets the dock position of this component in its parent panel. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "dock"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "layoutParent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDocked",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2948,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setDocked",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the dock position of this component in its parent panel. Note that\nthis only has effect if this item is part of the dockedItems collection\nof a parent that has a DockLayout (note that any Panel has a DockLayout\nby default)</p>\n"
      },
      {
        "shortDoc": "Sets the height of the component. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new height to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.tree.View-method-getEl\" rel=\"Ext.tree.View-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style.</li>\n<li><i>undefined</i> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setHeight",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2852,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the height of the component.  This method fires the <a href=\"#/api/Ext.tree.View-event-resize\" rel=\"Ext.tree.View-event-resize\" class=\"docClass\">resize</a> event.</p>\n"
      },
      {
        "shortDoc": "This method allows you to show or hide a LoadMask on top of this component. ...",
        "params": [
          {
            "type": "Boolean/Object/String",
            "optional": false,
            "doc": "<p>True to show the default LoadMask, a config object\nthat will be passed to the LoadMask constructor, or a message String to show. False to\nhide the current LoadMask.</p>\n",
            "name": "load"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to mask the targetEl of this Component instead of the this.el.\nFor example, setting this to true on a Panel will cause only the body to be masked. (defaults to false)</p>\n",
            "name": "targetEl"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setLoading",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.LoadMask",
          "doc": "<p>The LoadMask instance that has just been shown.</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2913,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setLoading",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method allows you to show or hide a LoadMask on top of this component.</p>\n"
      },
      {
        "shortDoc": "Sets the page XY position of the component. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new x position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new y position</p>\n",
            "name": "y"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If passed, the Component is <i>animated</i> into its new position. If this parameter\nis a number, it is used as the animation duration in milliseconds.</p>\n",
            "name": "animate"
          }
        ],
        "href": "Component2.html#Ext-Component-method-setPagePosition",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 505,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "setPagePosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the page XY position of the component.  To set the left and top instead, use <a href=\"#/api/Ext.tree.View-method-setPosition\" rel=\"Ext.tree.View-method-setPosition\" class=\"docClass\">setPosition</a>.\nThis method fires the <a href=\"#/api/Ext.tree.View-event-move\" rel=\"Ext.tree.View-event-move\" class=\"docClass\">move</a> event.</p>\n"
      },
      {
        "shortDoc": "Sets the left and top of the component. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new left</p>\n",
            "name": "left"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new top</p>\n",
            "name": "top"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If true, the Component is <i>animated</i> into its new position. You may also pass an animation configuration.</p>\n",
            "name": "animate"
          }
        ],
        "href": "Component2.html#Ext-Component-method-setPosition",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 421,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "setPosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the left and top of the component.  To set the page XY position instead, use <a href=\"#/api/Ext.tree.View-method-setPagePosition\" rel=\"Ext.tree.View-method-setPagePosition\" class=\"docClass\">setPagePosition</a>.\nThis method fires the <a href=\"#/api/Ext.tree.View-event-move\" rel=\"Ext.tree.View-event-move\" class=\"docClass\">move</a> event.</p>\n"
      },
      {
        "shortDoc": "Sets the width and height of this Component. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new width to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.tree.View-method-getEl\" rel=\"Ext.tree.View-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n<li><code>undefined</code> to leave the width unchanged.</li>\n</ul></div></p>\n",
            "name": "width"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new height to set (not required if a size object is passed as the first arg).\nThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.tree.View-method-getEl\" rel=\"Ext.tree.View-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n<li><code>undefined</code> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setSize",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2591,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width and height of this Component. This method fires the <a href=\"#/api/Ext.tree.View-event-resize\" rel=\"Ext.tree.View-event-resize\" class=\"docClass\">resize</a> event. This method can accept\neither width and height as separate arguments, or you can pass a size object like <code>{width:10, height:20}</code>.</p>\n"
      },
      {
        "shortDoc": "Sets the UI for the component. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new UI for the component</p>\n",
            "name": "ui"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setUI",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 1501,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the UI for the component. This will remove any existing UIs on the component. It will also\nloop through any uiCls set on the component and rename them so they include the new UI</p>\n"
      },
      {
        "shortDoc": "Convenience function to hide or show this component by boolean. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to show, false to hide</p>\n",
            "name": "visible"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setVisible",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2257,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Convenience function to hide or show this component by boolean.</p>\n"
      },
      {
        "shortDoc": "Sets the width of the component. ...",
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new width to setThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.tree.View-method-getEl\" rel=\"Ext.tree.View-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n</ul></div></p>\n",
            "name": "width"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setWidth",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 2840,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "setWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width of the component.  This method fires the <a href=\"#/api/Ext.tree.View-event-resize\" rel=\"Ext.tree.View-event-resize\" class=\"docClass\">resize</a> event.</p>\n"
      },
      {
        "shortDoc": "Shows this Component, rendering it first if autoRender or floating are true. ...",
        "params": [
          {
            "type": "String/Element",
            "optional": true,
            "doc": "<p>(optional) <b>only valid for <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b> The target from which the Component should\nanimate from while opening (defaults to null with no animation)</p>\n",
            "name": "animateTarget"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) A callback function to call after the Component is displayed. Only necessary if animation was specified.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Component2.html#Ext-Component-method-show",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 651,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "show",
        "owner": "Ext.Component",
        "doc": "<p>Shows this Component, rendering it first if <a href=\"#/api/Ext.tree.View-cfg-autoRender\" rel=\"Ext.tree.View-cfg-autoRender\" class=\"docClass\">autoRender</a> or <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> are <code>true</code>.</p>\n\n\n<p>After being shown, a <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> Component (such as a <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>), is activated it and brought to the front of\nits <a href=\"#/api/Ext.tree.View-property-zIndexManager\" rel=\"Ext.tree.View-property-zIndexManager\" class=\"docClass\">z-index stack</a>.</p>\n\n"
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
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-stopAnimation",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 335,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "stopAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n"
      },
      {
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-stopFx",
        "deprecated": {
          "version": "4.0",
          "tagname": "deprecated",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Time-method-stopAnimation\" rel=\"Ext.picker.Time-method-stopAnimation\" class=\"docClass\">stopAnimation</a></p>\n\n\n\n",
          "doc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet."
        },
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 326,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "stopFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n"
      },
      {
        "shortDoc": "Suspends the firing of all events. ...",
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.tree.View-method-resumeEvents\" rel=\"Ext.tree.View-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
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
        "html_filename": "Observable.html",
        "linenr": 541,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.tree.View-method-resumeEvents\" rel=\"Ext.tree.View-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
      },
      {
        "shortDoc": "Ensures that all effects queued after syncFx is called on this object are\nrun concurrently. ...",
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-syncFx",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Animate.html",
        "linenr": 345,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "name": "syncFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.tree.View-method-sequenceFx\" rel=\"Ext.tree.View-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n"
      },
      {
        "shortDoc": "Sends this Component to the back of (lower z-index than) any other visible windows ...",
        "params": [

        ],
        "href": "Floating.html#Ext-util-Floating-method-toBack",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 255,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "toBack",
        "owner": "Ext.util.Floating",
        "doc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n"
      },
      {
        "shortDoc": "Brings this floating Component to the front of any other visible, floating Components managed by the same ZIndexManag...",
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Specify <code>true</code> to prevent the Component from being focused.</p>\n",
            "name": "preventFocus"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-toFront",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 196,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "toFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Brings this floating Component to the front of any other visible, floating Components managed by the same <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a></p>\n\n<p>If this Component is modal, inserts the modal mask just below this Component in the z-index stack.</p>\n"
      },
      {
        "shortDoc": "Toggle a record between expanded and collapsed. ...",
        "params": [
          {
            "type": "Ext.data.Record",
            "optional": false,
            "doc": "\n",
            "name": "recordInstance"
          }
        ],
        "href": "View3.html#Ext-tree-View-method-toggle",
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
        "html_filename": "View3.html",
        "linenr": 432,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/View.js",
        "private": false,
        "name": "toggle",
        "owner": "Ext.tree.View",
        "doc": "<p>Toggle a record between expanded and collapsed.</p>\n"
      },
      {
        "shortDoc": "Shorthand for removeListener. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.tree.View-method-addListener\" rel=\"Ext.tree.View-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-un",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": {
          "member": "removeListener",
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null
        },
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 675,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.tree.View-method-removeListener\" rel=\"Ext.tree.View-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n"
      },
      {
        "shortDoc": "Walks up the ownerCt axis looking for an ancestor Container which matches\nthe passed simple selector. ...",
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. The simple selector to test.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-up",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Container",
          "doc": "<p>The matching ancestor Container (or <code>undefined</code> if no match was found).</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 1979,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "up",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Walks up the <code>ownerCt</code> axis looking for an ancestor Container which matches\nthe passed simple selector.</p>\n\n\n<p>Example:\n<pre><code>var owningTabPanel = grid.up('tabpanel');\n</code></pre>\n\n"
      },
      {
        "shortDoc": "Update the content area of a component. ...",
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If this component has been configured with a template via the tpl config\nthen it will use this argument as data to populate the template.\nIf this component was not configured with a template, the components\ncontent area will be updated via <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> update</p>\n",
            "name": "htmlOrData"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Only legitimate when using the html configuration. Defaults to false</p>\n",
            "name": "loadScripts"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) Only legitimate when using the html configuration. Callback to execute when scripts have finished loading</p>\n",
            "name": "callback"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-update",
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
        "html_filename": "AbstractComponent.html",
        "linenr": 2225,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "update",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Update the content area of a component.</p>\n"
      },
      {
        "shortDoc": "Sets the current box measurements of the component's underlying element. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object in the format {x, y, width, height}</p>\n",
            "name": "box"
          }
        ],
        "href": "Component2.html#Ext-Component-method-updateBox",
        "deprecated": null,
        "tagname": "method",
        "static": false,
        "alias": null,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 555,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "updateBox",
        "owner": "Ext.Component",
        "doc": "<p>Sets the current box measurements of the component's underlying element.</p>\n"
      }
    ],
    "css_mixin": [

    ],
    "property": [
      {
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-draggable",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 446,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "draggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component can be dragged</p>\n"
      },
      {
        "shortDoc": "Optional. ...",
        "type": "Ext.Container",
        "href": "Component2.html#Ext-Component-property-floatParent",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 224,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "floatParent",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> Components which were inserted as descendant items of floating Containers.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will not have a <code>floatParent</code> property.</p>\n\n\n<p>For <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> Components which are child items of a Container, the floatParent will be the floating ancestor Container which is\nresponsible for the base z-index value of all its floating descendants. It provides a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which provides\nz-indexing services for all its descendant floating Components.</p>\n\n\n<p>For example, the dropdown <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">BoundList</a> of a ComboBox which is in a Window will have the Window as its\n<code>floatParent</code></p>\n\n\n<p>See <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.tree.View-property-zIndexManager\" rel=\"Ext.tree.View-property-zIndexManager\" class=\"docClass\">zIndexManager</a></p>\n\n"
      },
      {
        "shortDoc": "Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto ...",
        "type": "Object",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-frameSize",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 228,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "frameSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto provide graphical, rounded borders. See the <a href=\"#/api/Ext.tree.View-cfg-frame\" rel=\"Ext.tree.View-cfg-frame\" class=\"docClass\">frame</a> config.</p>\n\n\n<p> This is an object containing the frame width in pixels for all four sides of the Component containing\nthe following properties:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>top</code> The width of the top framing element in pixels.</li>\n<li><code>right</code> The width of the right framing element in pixels.</li>\n<li><code>bottom</code> The width of the bottom framing element in pixels.</li>\n<li><code>left</code> The width of the left framing element in pixels.</li>\n</ul></div>\n\n"
      },
      {
        "shortDoc": "This is an internal flag that you use when creating custom components. ...",
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-maskOnDisable",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 593,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maskOnDisable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This is an internal flag that you use when creating custom components.\nBy default this is set to true which means that every component gets a mask when its disabled.\nComponents like FieldContainer, FieldSet, Field, Button, Tab override this property to false\nsince they want to implement custom disable logic.</p>\n"
      },
      {
        "shortDoc": "This Component's owner Container (defaults to undefined, and is set automatically when\nthis Component is added to a C...",
        "type": "Ext.Container",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-ownerCt",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 102,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "ownerCt",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This Component's owner <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a> (defaults to undefined, and is set automatically when\nthis Component is added to a Container).  Read-only.</p>\n\n<p><b>Note</b>: to access items within the Container see <tt><a href=\"#/api/Ext.tree.View-cfg-itemId\" rel=\"Ext.tree.View-cfg-itemId\" class=\"docClass\">itemId</a></tt>.</p>\n\n"
      },
      {
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-rendered",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 572,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "rendered",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component has been rendered.</p>\n"
      },
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
      },
      {
        "shortDoc": "Optional. ...",
        "type": "Ext.ZIndexManager",
        "href": "Component2.html#Ext-Component-property-zIndexManager",
        "deprecated": null,
        "tagname": "property",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 209,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "zIndexManager",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> Components after they have been rendered.</p>\n\n\n<p>A reference to the ZIndexManager which is managing this Component's z-index.</p>\n\n\n<p>The <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> maintains a stack of floating Component z-indices, and also provides a single modal\nmask which is insert just beneath the topmost visible modal floating Component.</p>\n\n\n<p>Floating Components may be <a href=\"#/api/Ext.tree.View-method-toFront\" rel=\"Ext.tree.View-method-toFront\" class=\"docClass\">brought to the front</a> or <a href=\"#/api/Ext.tree.View-method-toBack\" rel=\"Ext.tree.View-method-toBack\" class=\"docClass\">sent to the back</a> of the z-index stack.</p>\n\n\n<p>This defaults to the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> for floating Components that are programatically\n<a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a>.</p>\n\n\n<p>For <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> Components which are added to a Container, the ZIndexManager is acquired from the first ancestor Container found\nwhich is floating, or if not found the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> is used.</p>\n\n\n<p>See <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.tree.View-property-floatParent\" rel=\"Ext.tree.View-property-floatParent\" class=\"docClass\">floatParent</a></p>\n\n"
      }
    ],
    "cfg": [
      {
        "type": "Boolean",
        "href": "View3.html#Ext-tree-View-cfg-animate",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View3.html",
        "linenr": 23,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/View.js",
        "private": false,
        "name": "animate",
        "owner": "Ext.tree.View",
        "doc": "<p><tt>true</tt> to enable animated expand/collapse (defaults to the value of <a href=\"#/api/Ext-property-enableFx\" rel=\"Ext-property-enableFx\" class=\"docClass\">Ext.enableFx</a>)</p>\n"
      },
      {
        "shortDoc": "A tag name or DomHelper spec used to create the Element which will\nencapsulate this Component. ...",
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoEl",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 130,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A tag name or <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> spec used to create the <a href=\"#/api/Ext.tree.View-method-getEl\" rel=\"Ext.tree.View-method-getEl\" class=\"docClass\">Element</a> which will\nencapsulate this Component.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> and <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>,\nthis defaults to <b><tt>'div'</tt></b>. The more complex Sencha classes use a more complex\nDOM structure specified by their own <a href=\"#/api/Ext.tree.View-cfg-renderTpl\" rel=\"Ext.tree.View-cfg-renderTpl\" class=\"docClass\">renderTpl</a>s.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components encapsulated by\ndifferent DOM elements. Example usage:</p>\n\n\n<pre><code>{\n    xtype: 'component',\n    autoEl: {\n        tag: 'img',\n        src: 'http://www.example.com/example.jpg'\n    }\n}, {\n    xtype: 'component',\n    autoEl: {\n        tag: 'blockquote',\n        html: 'autoEl is cool!'\n    }\n}, {\n    xtype: 'container',\n    autoEl: 'ul',\n    cls: 'ux-unordered-list',\n    items: {\n        xtype: 'component',\n        autoEl: 'li',\n        html: 'First list item'\n    }\n}\n</code></pre>\n\n"
      },
      {
        "shortDoc": "This config is intended mainly for floating Components which may or may not be shown. ...",
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoRender",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 550,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This config is intended mainly for <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> Components which may or may not be shown. Instead\nof using <a href=\"#/api/Ext.tree.View-cfg-renderTo\" rel=\"Ext.tree.View-cfg-renderTo\" class=\"docClass\">renderTo</a> in the configuration, and rendering upon construction, this allows a Component\nto render itself upon first <i><a href=\"#/api/Ext.tree.View-event-show\" rel=\"Ext.tree.View-event-show\" class=\"docClass\">show</a></i>.</p>\n\n\n<p>Specify as <code>true</code> to have this Component render to the document body upon first show.</p>\n\n\n<p>Specify as an element, or the ID of an element to have this Component render to a specific element upon first show.</p>\n\n\n<p><b>This defaults to <code>true</code> for the <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a> class.</b></p>\n\n"
      },
      {
        "shortDoc": "true to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, false...",
        "type": "Boolean",
        "href": "Component2.html#Ext-Component-cfg-autoScroll",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 172,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "autoScroll",
        "owner": "Ext.Component",
        "doc": "<p><code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, <code>false</code> to clip any overflowing content (defaults to <code>false</code>).</p>\n"
      },
      {
        "shortDoc": "True to automatically show the component upon creation. ...",
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoShow",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 543,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoShow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically show the component upon creation.\nThis config option may only be used for <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> components or components\nthat use <a href=\"#/api/Ext.tree.View-cfg-autoRender\" rel=\"Ext.tree.View-cfg-autoRender\" class=\"docClass\">autoRender</a>. Defaults to <tt>false</tt>.</p>\n"
      },
      {
        "shortDoc": "The base CSS class to apply to this components's element. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-baseCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 324,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "baseCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The base CSS class to apply to this components's element. This will also be prepended to\nelements within this component like Panel's body will get a class x-panel-body. This means\nthat if you create a subclass of Panel, and you want it to get all the Panels styling for the\nelement and the body, you leave the baseCls x-panel and use componentCls to add specific styling for this\ncomponent.</p>\n"
      },
      {
        "shortDoc": "Set this to true to ignore datachanged events on the bound store. ...",
        "type": "Boolean",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-blockRefresh",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 126,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "blockRefresh",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Set this to true to ignore datachanged events on the bound store. This is useful if\nyou wish to provide custom transition animations via a plugin (defaults to false)</p>\n"
      },
      {
        "shortDoc": "Specifies the border for this component. ...",
        "type": "Number/String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-border",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 411,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "border",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the border for this component. The border can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n"
      },
      {
        "shortDoc": "An optional extra CSS class that will be added to this component's Element (defaults to ''). ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-cls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 340,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "cls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be\nuseful for adding customized styles to the component or any of its children using standard CSS rules.</p>\n"
      },
      {
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 334,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "componentCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS Class to be added to a components root level element to give distinction to it\nvia styling.</p>\n"
      },
      {
        "shortDoc": "The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager...",
        "type": "String/Object",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentLayout",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 242,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "componentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager which sizes a Component's internal structure in response to the Component being sized.</p>\n\n\n<p>Generally, developers will not use this configuration as all provided Components which need their internal\nelements sizing (Such as <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">input fields</a>) come with their own componentLayout managers.</p>\n\n\n<p>The <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used on instances of the base <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> class\nwhich simply sizes the Component's encapsulating element to the height and width specified in the <a href=\"#/api/Ext.tree.View-method-setSize\" rel=\"Ext.tree.View-method-setSize\" class=\"docClass\">setSize</a> method.</p>\n\n"
      },
      {
        "shortDoc": "Optional. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-contentEl",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 473,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "contentEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Optional. Specify an existing HTML element, or the <code>id</code> of an existing HTML element to use as the content\nfor this component.</p>\n\n\n<ul>\n<li><b>Description</b> :\n<div class=\"sub-desc\">This config option is used to take an existing HTML element and place it in the layout element\nof a new component (it simply moves the specified DOM element <i>after the Component is rendered</i> to use as the content.</div></li>\n<li><b>Notes</b> :\n<div class=\"sub-desc\">The specified HTML element is appended to the layout element of the component <i>after any configured\n<a href=\"#/api/Ext.tree.View-cfg-html\" rel=\"Ext.tree.View-cfg-html\" class=\"docClass\">HTML</a> has been inserted</i>, and so the document will not contain this element at the time the <a href=\"#/api/Ext.tree.View-event-render\" rel=\"Ext.tree.View-event-render\" class=\"docClass\">render</a> event is fired.</div>\n<div class=\"sub-desc\">The specified HTML element used will not participate in any <code><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></code>\nscheme that the Component may use. It is just HTML. Layouts operate on child <code><b><a href=\"#/api/Ext.container.Container-cfg-items\" rel=\"Ext.container.Container-cfg-items\" class=\"docClass\">items</a></b></code>.</div>\n<div class=\"sub-desc\">Add either the <code>x-hidden</code> or the <code>x-hide-display</code> CSS class to\nprevent a brief flicker of the content before it is rendered to the panel.</div></li>\n</ul>\n\n"
      },
      {
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-data",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 260,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "data",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The initial set of data to apply to the <code><a href=\"#/api/Ext.tree.View-cfg-tpl\" rel=\"Ext.tree.View-cfg-tpl\" class=\"docClass\">tpl</a></code> to\nupdate the content area of the Component.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-deferEmptyText",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 116,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "deferEmptyText",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>True to defer emptyText being applied until the store's first load</p>\n"
      },
      {
        "shortDoc": "true to disable selection within the DataView. ...",
        "type": "Boolean",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-disableSelection",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 132,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "disableSelection",
        "owner": "Ext.view.AbstractView",
        "doc": "<p><tt>true</tt> to disable selection within the DataView. Defaults to <tt>false</tt>.\nThis configuration will lock the selection model that the DataView uses.</p>\n\n"
      },
      {
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabled",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 435,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Defaults to false.</p>\n"
      },
      {
        "shortDoc": "CSS class to add when the Component is disabled. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabledCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 353,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disabledCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS class to add when the Component is disabled. Defaults to 'x-item-disabled'.</p>\n"
      },
      {
        "shortDoc": "Specify as true to make a floating Component draggable using the Component's encapsulating element as the drag handle. ...",
        "type": "Mixed",
        "href": "Component2.html#Ext-Component-cfg-draggable",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 237,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "draggable",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to make a <a href=\"#/api/Ext.tree.View-cfg-floating\" rel=\"Ext.tree.View-cfg-floating\" class=\"docClass\">floating</a> Component draggable using the Component's encapsulating element as the drag handle.</p>\n\n\n<p>This may also be specified as a config object for the <a href=\"#/api/Ext.util.ComponentDragger\" rel=\"Ext.util.ComponentDragger\" class=\"docClass\">ComponentDragger</a> which is instantiated to perform dragging.</p>\n\n\n<p>For example to create a Component which may only be dragged around using a certain internal element as the drag handle,\nuse the delegate option:</p>\n\n\n<p><code></p>\n\n<pre>new Ext.Component({\n    constrain: true,\n    floating:true,\n    style: {\n        backgroundColor: '#fff',\n        border: '1px solid black'\n    },\n    html: '&lt;h1 style=\"cursor:move\"&gt;The title&lt;/h1&gt;&lt;p&gt;The content&lt;/p&gt;',\n    draggable: {\n        delegate: 'h1'\n    }\n}).show();\n</pre>\n\n\n<p></code></p>\n"
      },
      {
        "shortDoc": "The text to display in the view when there is no data to display (defaults to ''). ...",
        "type": "String",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-emptyText",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 108,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "emptyText",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>The text to display in the view when there is no data to display (defaults to '').\nNote that when using local data the emptyText will not be displayed unless you set\nthe <a href=\"#/api/Ext.tree.View-cfg-deferEmptyText\" rel=\"Ext.tree.View-cfg-deferEmptyText\" class=\"docClass\">deferEmptyText</a> option to false.</p>\n"
      },
      {
        "shortDoc": "Specify as true to float the Component outside of the document flow using CSS absolute positioning. ...",
        "type": "Boolean",
        "href": "Component2.html#Ext-Component-cfg-floating",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 178,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "floating",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to float the Component outside of the document flow using CSS absolute positioning.</p>\n\n\n<p>Components such as <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s and <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Menu</a>s are floating\nby default.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will register themselves with the global\n<a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<h3 class=\"pa\">Floating Components as child items of a Container</h3>\n\n\n<p>A floating Component may be used as a child item of a Container. This just allows the floating Component to seek a ZIndexManager by\nexamining the ownerCt chain.</p>\n\n\n<p>When configured as floating, Components acquire, at render time, a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which manages a stack\nof related floating Components. The ZIndexManager brings a single floating Component to the top of its stack when\nthe Component's <a href=\"#/api/Ext.tree.View-method-toFront\" rel=\"Ext.tree.View-method-toFront\" class=\"docClass\">toFront</a> method is called.</p>\n\n\n<p>The ZIndexManager is found by traversing up the <a href=\"#/api/Ext.tree.View-property-ownerCt\" rel=\"Ext.tree.View-property-ownerCt\" class=\"docClass\">ownerCt</a> chain to find an ancestor which itself is floating. This is so that\ndescendant floating Components of floating <i>Containers</i> (Such as a ComboBox dropdown within a Window) can have its zIndex managed relative\nto any siblings, but always <b>above</b> that floating ancestor Container.</p>\n\n\n<p>If no floating ancestor is found, a floating Component registers itself with the default <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a>.</p>\n\n\n<p>Floating components <i>do not participate in the Container's layout</i>. Because of this, they are not rendered until you explicitly\n<a href=\"#/api/Ext.tree.View-event-show\" rel=\"Ext.tree.View-event-show\" class=\"docClass\">show</a> them.</p>\n\n\n<p>After rendering, the ownerCt reference is deleted, and the <a href=\"#/api/Ext.tree.View-property-floatParent\" rel=\"Ext.tree.View-property-floatParent\" class=\"docClass\">floatParent</a> property is set to the found floating ancestor Container.\nIf no floating ancestor Container was found the <a href=\"#/api/Ext.tree.View-property-floatParent\" rel=\"Ext.tree.View-property-floatParent\" class=\"docClass\">floatParent</a> property will not be set.</p>\n\n"
      },
      {
        "shortDoc": "Specifies whether the floated component should be automatically focused when\nit is brought to the front. ...",
        "type": "Boolean",
        "href": "Floating.html#Ext-util-Floating-cfg-focusOnToFront",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 8,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "focusOnToFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floated component should be automatically <a href=\"#/api/Ext.Component-method-focus\" rel=\"Ext.Component-method-focus\" class=\"docClass\">focused</a> when\nit is <a href=\"#/api/Ext.tree.View-method-toFront\" rel=\"Ext.tree.View-method-toFront\" class=\"docClass\">brought to the front</a>. Defaults to true.</p>\n"
      },
      {
        "shortDoc": "Specify as true to have the Component inject framing elements within the Component at render time to\nprovide a graphi...",
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-frame",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 219,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "frame",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specify as <code>true</code> to have the Component inject framing elements within the Component at render time to\nprovide a graphical rounded frame around the Component content.</p>\n\n\n<p>This is only necessary when running on outdated, or non standard-compliant browsers such as Microsoft's Internet Explorer\nprior to version 9 which do not support rounded corners natively.</p>\n\n\n<p>The extra space taken up by this framing is available from the read only property <a href=\"#/api/Ext.tree.View-property-frameSize\" rel=\"Ext.tree.View-property-frameSize\" class=\"docClass\">frameSize</a>.</p>\n\n"
      },
      {
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-height",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 406,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "height",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The height of this component in pixels.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hidden",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 429,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Defaults to false.</p>\n"
      },
      {
        "shortDoc": "A String which specifies how this Component's encapsulating DOM element will be hidden. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hideMode",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 460,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hideMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A String which specifies how this Component's encapsulating DOM element will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div>\nDefaults to <code>'display'</code>.</p>\n"
      },
      {
        "shortDoc": "An HTML fragment, or a DomHelper specification to use as the layout element\ncontent (defaults to ''). ...",
        "type": "String/Object",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-html",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 491,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "html",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An HTML fragment, or a <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> specification to use as the layout element\ncontent (defaults to ''). The HTML content is added after the component is rendered,\nso the document will not contain this HTML at the time the <a href=\"#/api/Ext.tree.View-event-render\" rel=\"Ext.tree.View-event-render\" class=\"docClass\">render</a> event is fired.\nThis content is inserted into the body <i>before</i> any configured <a href=\"#/api/Ext.tree.View-cfg-contentEl\" rel=\"Ext.tree.View-cfg-contentEl\" class=\"docClass\">contentEl</a> is appended.</p>\n"
      },
      {
        "shortDoc": "The unique id of this component instance (defaults to an auto-assigned id). ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-id",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 50,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "id",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The <b><u>unique id of this component instance</u></b> (defaults to an <a href=\"#/api/Ext.tree.View-method-getId\" rel=\"Ext.tree.View-method-getId\" class=\"docClass\">auto-assigned id</a>).</p>\n\n\n<p>It should not be necessary to use this configuration except for singleton objects in your application.\nComponents created with an id may be accessed globally using <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>.</p>\n\n\n<p>Instead of using assigned ids, use the <a href=\"#/api/Ext.tree.View-cfg-itemId\" rel=\"Ext.tree.View-cfg-itemId\" class=\"docClass\">itemId</a> config, and <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> which\nprovides selector-based searching for Sencha Components analogous to DOM querying. The <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>\nclass contains <a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">shortcut methods</a> to query its descendant Components by selector.</p>\n\n\n<p>Note that this id will also be used as the element id for the containing HTML element\nthat is rendered to the page for this component. This allows you to write id-based CSS\nrules to style the specific instance of this component uniquely, and also to select\nsub-elements using this component's id as the parent.</p>\n\n\n<p><b>Note</b>: to avoid complications imposed by a unique <tt>id</tt> also see <code><a href=\"#/api/Ext.tree.View-cfg-itemId\" rel=\"Ext.tree.View-cfg-itemId\" class=\"docClass\">itemId</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of a Component see <code><a href=\"#/api/Ext.tree.View-property-ownerCt\" rel=\"Ext.tree.View-property-ownerCt\" class=\"docClass\">ownerCt</a></code>.</p>\n\n"
      },
      {
        "type": "String",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-itemCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 48,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "itemCls",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Specifies the class to be assigned to each element in the view when used in conjunction with the\n<a href=\"#/api/Ext.tree.View-cfg-itemTpl\" rel=\"Ext.tree.View-cfg-itemTpl\" class=\"docClass\">itemTpl</a> configuration.</p>\n"
      },
      {
        "shortDoc": "An itemId can be used as an alternative way to get a reference to a component\nwhen no object reference is available. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-itemId",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 66,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "itemId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <tt>itemId</tt> can be used as an alternative way to get a reference to a component\nwhen no object reference is available.  Instead of using an <code><a href=\"#/api/Ext.tree.View-cfg-id\" rel=\"Ext.tree.View-cfg-id\" class=\"docClass\">id</a></code> with\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>.<a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">getCmp</a>, use <code>itemId</code> with\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a> which will retrieve\n<code>itemId</code>'s or <tt><a href=\"#/api/Ext.tree.View-cfg-id\" rel=\"Ext.tree.View-cfg-id\" class=\"docClass\">id</a></tt>'s. Since <code>itemId</code>'s are an index to the\ncontainer's internal MixedCollection, the <code>itemId</code> is scoped locally to the container --\navoiding potential conflicts with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> which requires a <b>unique</b>\n<code><a href=\"#/api/Ext.tree.View-cfg-id\" rel=\"Ext.tree.View-cfg-id\" class=\"docClass\">id</a></code>.</p>\n\n\n<pre><code>var c = new Ext.panel.Panel({ //\n    <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 300,\n    <a href=\"#/api/Ext.tree.View-cfg-renderTo\" rel=\"Ext.tree.View-cfg-renderTo\" class=\"docClass\">renderTo</a>: document.body,\n    <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a>: 'auto',\n    <a href=\"#/api/Ext.container.Container-cfg-items\" rel=\"Ext.container.Container-cfg-items\" class=\"docClass\">items</a>: [\n        {\n            itemId: 'p1',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 1',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        },\n        {\n            itemId: 'p2',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 2',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        }\n    ]\n})\np1 = c.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p1'); // not the same as <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp()</a>\np2 = p1.<a href=\"#/api/Ext.tree.View-property-ownerCt\" rel=\"Ext.tree.View-property-ownerCt\" class=\"docClass\">ownerCt</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p2'); // reference via a sibling\n</code></pre>\n\n\n<p>Also see <tt><a href=\"#/api/Ext.tree.View-cfg-id\" rel=\"Ext.tree.View-cfg-id\" class=\"docClass\">id</a></tt>, <code><a href=\"#/api/Ext.container.Container-method-query\" rel=\"Ext.container.Container-method-query\" class=\"docClass\">Ext.container.Container.query</a></code>,\n<code><a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">Ext.container.Container.down</a></code> and <code><a href=\"#/api/Ext.container.Container-method-child\" rel=\"Ext.container.Container-method-child\" class=\"docClass\">Ext.container.Container.child</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of an item see <tt><a href=\"#/api/Ext.tree.View-property-ownerCt\" rel=\"Ext.tree.View-property-ownerCt\" class=\"docClass\">ownerCt</a></tt>.</p>\n\n"
      },
      {
        "shortDoc": "@required\nThis is a required setting. ...",
        "type": "String",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-itemSelector",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 39,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "itemSelector",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>@required\n<b>This is a required setting</b>. A simple CSS selector (e.g. <tt>div.some-class</tt> or\n<tt>span:first-child</tt>) that will be used to determine what nodes this DataView will be\nworking with. The itemSelector is used to map DOM nodes to records. As such, there should\nonly be one root level element that matches the selector for each record.</p>\n"
      },
      {
        "shortDoc": "The inner portion of the item template to be rendered. ...",
        "type": "String/Array/Ext.XTemplate",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-itemTpl",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 55,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "itemTpl",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>The inner portion of the item template to be rendered. Follows an XTemplate\nstructure and will be placed inside of a tpl.</p>\n"
      },
      {
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "type": "Object",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Observable.html",
        "linenr": 102,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.tree.View-method-addListener\" rel=\"Ext.tree.View-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n"
      },
      {
        "shortDoc": "False to disable a load mask from displaying will the view is loading. ...",
        "type": "Boolean/Object",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-loadMask",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 75,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "loadMask",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>False to disable a load mask from displaying will the view is loading. This can also be a\n<a href=\"#/api/Ext.LoadMask\" rel=\"Ext.LoadMask\" class=\"docClass\">Ext.LoadMask</a> configuration object. Defaults to <tt>true</tt>.</p>\n"
      },
      {
        "type": "Ext.ComponentLoader/Object",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-loader",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 534,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "loader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A configuration object or an instance of a <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> to load remote\ncontent for this Component.</p>\n"
      },
      {
        "type": "String",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-loadingCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 82,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "loadingCls",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>The CSS class to apply to the loading message element (defaults to Ext.LoadMask.prototype.msgCls \"x-mask-loading\")</p>\n"
      },
      {
        "shortDoc": "If specified, gives an explicit height for the data view when it is showing the loadingText,\nif that is specified. ...",
        "type": "Number",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-loadingHeight",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 95,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "loadingHeight",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>If specified, gives an explicit height for the data view when it is showing the <a href=\"#/api/Ext.tree.View-cfg-loadingText\" rel=\"Ext.tree.View-cfg-loadingText\" class=\"docClass\">loadingText</a>,\nif that is specified. This is useful to prevent the view's height from collapsing to zero when the\nloading mask is applied and there are no other contents in the data view. Defaults to undefined.</p>\n"
      },
      {
        "shortDoc": "A string to display during data load operations (defaults to undefined). ...",
        "type": "String",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-loadingText",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 67,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "loadingText",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>A string to display during data load operations (defaults to undefined).  If specified, this text will be\ndisplayed in a loading div and the view's contents will be cleared while loading, otherwise the view's\ncontents will continue to display normally until the new data is loaded and the contents are replaced.</p>\n"
      },
      {
        "shortDoc": "Only valid when a sibling element of a Splitter within a VBox or\nHBox layout. ...",
        "type": "Boolean",
        "href": "Component2.html#Ext-Component-cfg-maintainFlex",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 259,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "maintainFlex",
        "owner": "Ext.Component",
        "doc": "<p><b>Only valid when a sibling element of a <a href=\"#/api/Ext.resizer.Splitter\" rel=\"Ext.resizer.Splitter\" class=\"docClass\">Splitter</a> within a <a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">VBox</a> or\n<a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">HBox</a> layout.</b></p>\n\n\n<p>Specifies that if an immediate sibling Splitter is moved, the Component on the <i>other</i> side is resized, and this\nComponent maintains its configured <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">flex</a> value.</p>\n\n"
      },
      {
        "shortDoc": "Specifies the margin for this component. ...",
        "type": "Number/String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-margin",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 423,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "margin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n"
      },
      {
        "shortDoc": "The maximum value in pixels which this Component will set its height to. ...",
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxHeight",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 523,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maxHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "shortDoc": "The maximum value in pixels which this Component will set its width to. ...",
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxWidth",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 528,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maxWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "shortDoc": "The minimum value in pixels which this Component will set its height to. ...",
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minHeight",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 513,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "minHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "shortDoc": "The minimum value in pixels which this Component will set its width to. ...",
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minWidth",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 518,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "minWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n"
      },
      {
        "shortDoc": "True to allow selection of more than one item at a time, false to allow selection of only a single item\nat a time or ...",
        "type": "Boolean",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-multiSelect",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 801,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "multiSelect",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>True to allow selection of more than one item at a time, false to allow selection of only a single item\nat a time or no selection at all, depending on the value of <a href=\"#/api/Ext.tree.View-cfg-singleSelect\" rel=\"Ext.tree.View-cfg-singleSelect\" class=\"docClass\">singleSelect</a> (defaults to false).</p>\n"
      },
      {
        "shortDoc": "An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-overCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 346,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "overCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and removed when the mouse moves out. (defaults to '').  This can be\nuseful for adding customized 'active' or 'hover' styles to the component or any of its children using standard CSS rules.</p>\n"
      },
      {
        "shortDoc": "A CSS class to apply to each item in the view on mouseover (defaults to undefined). ...",
        "type": "String",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-overItemCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 61,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "overItemCls",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>A CSS class to apply to each item in the view on mouseover (defaults to undefined).\nEnsure <a href=\"#/api/Ext.tree.View-cfg-trackOver\" rel=\"Ext.tree.View-cfg-trackOver\" class=\"docClass\">trackOver</a> is set to <code>true</code> to make use of this.</p>\n"
      },
      {
        "shortDoc": "Specifies the padding for this component. ...",
        "type": "Number/String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-padding",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 417,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "padding",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n"
      },
      {
        "shortDoc": "An object or array of objects that will provide custom functionality for this component. ...",
        "type": "Object/Array",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-plugins",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 563,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "plugins",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object or array of objects that will provide custom functionality for this component.  The only\nrequirement for a valid plugin is that it contain an init method that accepts a reference of type <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.\nWhen a component is created, if any plugins are available, the component will call the init method on each\nplugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the\ncomponent as needed to provide its functionality.</p>\n"
      },
      {
        "shortDoc": "An object containing properties specifying DomQuery selectors which identify child elements\ncreated by the render pro...",
        "type": "Object",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderSelectors",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 179,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderSelectors",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object containing properties specifying <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selectors which identify child elements\ncreated by the render process.</p>\n\n<p>After the Component's internal structure is rendered according to the <a href=\"#/api/Ext.tree.View-cfg-renderTpl\" rel=\"Ext.tree.View-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, this object is iterated through,\nand the found Elements are added as properties to the Component using the <code>renderSelector</code> property name.</p>\n\n<p>For example, a Component which rendered an image, and description into its element might use the following properties\ncoded into its prototype:</p>\n\n<pre><code>renderTpl: '&amp;lt;img src=\"{imageUrl}\" class=\"x-image-component-img\"&gt;&amp;lt;div class=\"x-image-component-desc\"&gt;{description}&amp;gt;/div&amp;lt;',\n\nrenderSelectors: {\n    image: 'img.x-image-component-img',\n    descEl: 'div.x-image-component-desc'\n}\n</code></pre>\n\n<p>After rendering, the Component would have a property <code>image</code> referencing its child <code>img</code> Element,\nand a property <code>descEl</code> referencing the <code>div</code> Element which contains the description.</p>\n"
      },
      {
        "shortDoc": "Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into. ...",
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTo",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 204,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderTo",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into.</p>\n\n\n<div><ul>\n<li><b>Notes</b> : <ul>\n<div class=\"sub-desc\">Do <u>not</u> use this option if the Component is to be a child item of\na <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>. It is the responsibility of the\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>'s <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout manager</a>\nto render and manage its child items.</div>\n<div class=\"sub-desc\">When using this config, a call to render() is not required.</div>\n</ul></li>\n</ul></div>\n\n\n<p>See <code><a href=\"#/api/Ext.tree.View-event-render\" rel=\"Ext.tree.View-event-render\" class=\"docClass\">render</a></code> also.</p>\n\n"
      },
      {
        "shortDoc": "An XTemplate used to create the internal structure inside this Component's\nencapsulating Element. ...",
        "type": "Mixed",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTpl",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 164,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderTpl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> used to create the internal structure inside this Component's\nencapsulating <a href=\"#/api/Ext.tree.View-method-getEl\" rel=\"Ext.tree.View-method-getEl\" class=\"docClass\">Element</a>.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\nand <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>, this defaults to <b><code>null</code></b> which means that they will be initially rendered\nwith no internal structure; they render their <a href=\"#/api/Ext.tree.View-method-getEl\" rel=\"Ext.tree.View-method-getEl\" class=\"docClass\">Element</a> empty. The more specialized ExtJS and Touch classes\nwhich use a more complex DOM structure, provide their own template definitions.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components with customized\ninternal structure.</p>\n\n\n<p>Upon rendering, any created child elements may be automatically imported into object properties using the\n<a href=\"#/api/Ext.tree.View-cfg-renderSelectors\" rel=\"Ext.tree.View-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a> option.</p>\n\n"
      },
      {
        "shortDoc": "Specify as true to apply a Resizer to this Component\nafter rendering. ...",
        "type": "Mixed",
        "href": "Component2.html#Ext-Component-cfg-resizable",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 157,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "resizable",
        "owner": "Ext.Component",
        "doc": "<p>Specify as <code>true</code> to apply a <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a> to this Component\nafter rendering.</p>\n\n\n<p>May also be specified as a config object to be passed to the constructor of <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a>\nto override any defaults. By default the Component passes its minimum and maximum size, and uses\n<code><a href=\"#/api/Ext.resizer.Resizer-cfg-dynamic\" rel=\"Ext.resizer.Resizer-cfg-dynamic\" class=\"docClass\">Ext.resizer.Resizer.dynamic</a>: false</code></p>\n\n"
      },
      {
        "shortDoc": "A valid Ext.resizer.Resizer handles config string (defaults to 'all'). ...",
        "type": "String",
        "href": "Component2.html#Ext-Component-cfg-resizeHandles",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 166,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "resizeHandles",
        "owner": "Ext.Component",
        "doc": "<p>A valid <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Ext.resizer.Resizer</a> handles config string (defaults to 'all').  Only applies when resizable = true.</p>\n"
      },
      {
        "type": "Boolean",
        "href": "View3.html#Ext-tree-View-cfg-rootVisible",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View3.html",
        "linenr": 18,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/View.js",
        "private": false,
        "name": "rootVisible",
        "owner": "Ext.tree.View",
        "doc": "<p><tt>false</tt> to hide the root node (defaults to <tt>true</tt>)</p>\n"
      },
      {
        "shortDoc": "A buffer to be applied if many state events are fired within\na short period. ...",
        "type": "Number",
        "href": "Stateful.html#Ext-state-Stateful-cfg-saveBuffer",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 74,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "saveBuffer",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A buffer to be applied if many state events are fired within\na short period. Defaults to 100.</p>\n"
      },
      {
        "type": "String",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-selectedItemCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 102,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "selectedItemCls",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>A CSS class to apply to each selected item in the view (defaults to 'x-view-selected').</p>\n"
      },
      {
        "shortDoc": "Specifies whether the floating component should be given a shadow. ...",
        "type": "String/Boolean",
        "href": "Floating.html#Ext-util-Floating-cfg-shadow",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Floating.html",
        "linenr": 15,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "shadow",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floating component should be given a shadow. Set to true to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the shadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. Set to false to disable the\nshadow. (Defaults to 'sides'.)</p>\n"
      },
      {
        "shortDoc": "True to enable multiselection by clicking on multiple items without requiring the user to hold Shift or Ctrl,\nfalse t...",
        "type": "Boolean",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-simpleSelect",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 811,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "simpleSelect",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>True to enable multiselection by clicking on multiple items without requiring the user to hold Shift or Ctrl,\nfalse to force the user to hold Ctrl or Shift to select more than on item (defaults to false).</p>\n"
      },
      {
        "shortDoc": "True to allow selection of exactly one item at a time, false to allow no selection at all (defaults to false). ...",
        "type": "Boolean",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-singleSelect",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 806,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "singleSelect",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>True to allow selection of exactly one item at a time, false to allow no selection at all (defaults to false).\nNote that if <a href=\"#/api/Ext.tree.View-cfg-multiSelect\" rel=\"Ext.tree.View-cfg-multiSelect\" class=\"docClass\">multiSelect</a> = true, this value will be ignored.</p>\n"
      },
      {
        "shortDoc": "An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). ...",
        "type": "Array",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateEvents",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 64,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). <code>stateEvents</code> may be any type\nof event supported by this object, including browser or custom events\n(e.g., <tt>['click', 'customerchange']</tt>).</p>\n\n\n<p>See <code><a href=\"#/api/Ext.tree.View-cfg-stateful\" rel=\"Ext.tree.View-cfg-stateful\" class=\"docClass\">stateful</a></code> for an explanation of saving and\nrestoring object state.</p>\n\n"
      },
      {
        "shortDoc": "The unique id for this object to use for state management purposes. ...",
        "type": "String",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateId",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 58,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>The unique id for this object to use for state management purposes.</p>\n\n<p>See <a href=\"#/api/Ext.tree.View-cfg-stateful\" rel=\"Ext.tree.View-cfg-stateful\" class=\"docClass\">stateful</a> for an explanation of saving and restoring state.</p>\n\n"
      },
      {
        "shortDoc": "A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. ...",
        "type": "Boolean",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateful",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 18,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateful",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. The object must have\na <code><a href=\"#/api/Ext.tree.View-cfg-stateId\" rel=\"Ext.tree.View-cfg-stateId\" class=\"docClass\">stateId</a></code> for state to be managed.\nAuto-generated ids are not guaranteed to be stable across page loads and\ncannot be relied upon to save and restore the same state for a object.<p>\n<p>For state saving to work, the state manager's provider must have been\nset to an implementation of <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> which overrides the\n<a href=\"#/api/Ext.state.Provider-method-set\" rel=\"Ext.state.Provider-method-set\" class=\"docClass\">set</a> and <a href=\"#/api/Ext.state.Provider-method-get\" rel=\"Ext.state.Provider-method-get\" class=\"docClass\">get</a>\nmethods to save and recall name/value pairs. A built-in implementation,\n<a href=\"#/api/Ext.state.CookieProvider\" rel=\"Ext.state.CookieProvider\" class=\"docClass\">Ext.state.CookieProvider</a> is available.</p>\n<p>To set the state provider for the current page:</p>\n<pre><code>Ext.state.Manager.setProvider(new Ext.state.CookieProvider({\n    expires: new Date(new Date().getTime()+(1000*60*60*24*7)), //7 days from now\n}));\n</code></pre>\n<p>A stateful object attempts to save state when one of the events\nlisted in the <code><a href=\"#/api/Ext.tree.View-cfg-stateEvents\" rel=\"Ext.tree.View-cfg-stateEvents\" class=\"docClass\">stateEvents</a></code> configuration fires.</p>\n<p>To save state, a stateful object first serializes its state by\ncalling <b><code><a href=\"#/api/Ext.tree.View-method-getState\" rel=\"Ext.tree.View-method-getState\" class=\"docClass\">getState</a></code></b>. By default, this function does\nnothing. The developer must provide an implementation which returns an\nobject hash which represents the restorable state of the object.</p>\n<p>The value yielded by getState is passed to <a href=\"#/api/Ext.state.Manager-method-set\" rel=\"Ext.state.Manager-method-set\" class=\"docClass\">Ext.state.Manager.set</a>\nwhich uses the configured <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> to save the object\nkeyed by the <code><a href=\"#/api/Ext.tree.View-cfg-stateId\" rel=\"Ext.tree.View-cfg-stateId\" class=\"docClass\">stateId</a></code></p>.\n<p>During construction, a stateful object attempts to <i>restore</i>\nits state by calling <a href=\"#/api/Ext.state.Manager-method-get\" rel=\"Ext.state.Manager-method-get\" class=\"docClass\">Ext.state.Manager.get</a> passing the\n<code><a href=\"#/api/Ext.tree.View-cfg-stateId\" rel=\"Ext.tree.View-cfg-stateId\" class=\"docClass\">stateId</a></code></p>\n<p>The resulting object is passed to <b><code><a href=\"#/api/Ext.tree.View-method-applyState\" rel=\"Ext.tree.View-method-applyState\" class=\"docClass\">applyState</a></code></b>.\nThe default implementation of <code><a href=\"#/api/Ext.tree.View-method-applyState\" rel=\"Ext.tree.View-method-applyState\" class=\"docClass\">applyState</a></code> simply copies\nproperties into the object, but a developer may override this to support\nmore behaviour.</p>\n<p>You can perform extra processing on state save and restore by attaching\nhandlers to the <a href=\"#/api/Ext.tree.View-event-beforestaterestore\" rel=\"Ext.tree.View-event-beforestaterestore\" class=\"docClass\">beforestaterestore</a>, <a href=\"#/api/Ext.tree.View-event-staterestore\" rel=\"Ext.tree.View-event-staterestore\" class=\"docClass\">staterestore</a>,\n<a href=\"#/api/Ext.tree.View-event-beforestatesave\" rel=\"Ext.tree.View-event-beforestatesave\" class=\"docClass\">beforestatesave</a> and <a href=\"#/api/Ext.tree.View-event-statesave\" rel=\"Ext.tree.View-event-statesave\" class=\"docClass\">statesave</a> events.</p>\n\n"
      },
      {
        "type": "Ext.data.Store",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-store",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 33,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "store",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>@required\nThe <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> to bind this DataView to.</p>\n"
      },
      {
        "shortDoc": "A custom style specification to be applied to this component's Element. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-style",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 372,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "style",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A custom style specification to be applied to this component's Element.  Should be a valid argument to\n<a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>.</p>\n\n<pre><code>        new Ext.panel.Panel({\n            title: 'Some Title',\n            renderTo: Ext.getBody(),\n            width: 400, height: 300,\n            layout: 'form',\n            items: [{\n                xtype: 'textarea',\n                style: {\n                    width: '95%',\n                    marginBottom: '10px'\n                }\n            },\n            new Ext.button.Button({\n                text: 'Send',\n                minWidth: '100',\n                style: {\n                    marginBottom: '10px'\n                }\n            })\n            ]\n        });\n     </code></pre>\n\n"
      },
      {
        "shortDoc": "The class that is added to the content target when you set styleHtmlContent to true. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlCls",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 506,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "styleHtmlCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The class that is added to the content target when you set styleHtmlContent to true.\nDefaults to 'x-html'</p>\n"
      },
      {
        "shortDoc": "True to automatically style the html inside the content target of this component (body for panels). ...",
        "type": "Boolean",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlContent",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 499,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "styleHtmlContent",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically style the html inside the content target of this component (body for panels).\nDefaults to false.</p>\n"
      },
      {
        "shortDoc": "True to automatically call toFront when the show method is called\non an already visible, floating component (default ...",
        "type": "Boolean",
        "href": "Component2.html#Ext-Component-cfg-toFrontOnShow",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Component2.html",
        "linenr": 202,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "toFrontOnShow",
        "owner": "Ext.Component",
        "doc": "<p>True to automatically call <a href=\"#/api/Ext.tree.View-method-toFront\" rel=\"Ext.tree.View-method-toFront\" class=\"docClass\">toFront</a> when the <a href=\"#/api/Ext.tree.View-event-show\" rel=\"Ext.tree.View-event-show\" class=\"docClass\">show</a> method is called\non an already visible, floating component (default is <code>true</code>).</p>\n\n"
      },
      {
        "shortDoc": "@required\nThe HTML fragment or an array of fragments that will make up the template used by this DataView. ...",
        "type": "String/Array/Ext.XTemplate",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-tpl",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 27,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "tpl",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>@required\nThe HTML fragment or an array of fragments that will make up the template used by this DataView.  This should\nbe specified in the same format expected by the constructor of <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.</p>\n"
      },
      {
        "shortDoc": "The Ext.(X)Template method to use when\nupdating the content area of the Component. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tplWriteMode",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 317,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "tplWriteMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The Ext.(X)Template method to use when\nupdating the content area of the Component. Defaults to <code>'overwrite'</code>\n(see <code><a href=\"#/api/Ext.XTemplate-method-overwrite\" rel=\"Ext.XTemplate-method-overwrite\" class=\"docClass\">Ext.XTemplate.overwrite</a></code>).</p>\n"
      },
      {
        "type": "Boolean",
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-trackOver",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 121,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "trackOver",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>True to enable mouseenter and mouseleave events</p>\n"
      },
      {
        "shortDoc": "A set style for a component. ...",
        "type": "String/Array",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-ui",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 359,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "ui",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A set style for a component. Can be a string or an Array of multiple strings (UIs)</p>\n"
      },
      {
        "type": "Number",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-width",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 401,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "width",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The width of this component in pixels.</p>\n"
      },
      {
        "shortDoc": "The xtype configuration option can be used to optimize\nComponent creation and rendering. ...",
        "type": "String",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-xtype",
        "deprecated": null,
        "tagname": "cfg",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 266,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "xtype",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The <code>xtype</code> configuration option can be used to optimize\nComponent creation and rendering. It serves as a shortcut to the full componet\nname. For example, the component <code>Ext.button.Button</code> has an xtype of <code>button</code>.</p>\n\n<p>You can define your own xtype on a custom <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">component</a> by\nspecifying the <a href=\"#/api/Ext.Class-cfg-alias\" rel=\"Ext.Class-cfg-alias\" class=\"docClass\">alias</a> config option with a prefix of\n<code>widget</code>. For example:</p>\n\n<pre><code>Ext.define({\n    extend: 'Ext.button.Button',\n    alias: 'widget.pressmebutton',\n    text: 'Press Me'\n})\n</code></pre>\n\n<p>Any Component can be created implicitly\nas an object config with an xtype specified, allowing it to be declared and\npassed into the rendering pipeline without actually being instantiated as\nan object. Not only is rendering deferred, but the actual creation of the\nobject itself is also deferred, saving memory and resources until they are\nactually needed. In complex, nested layouts containing many Components,\nthis can make a noticeable improvement in performance.</p>\n\n<pre><code>// Explicit creation of contained Components:\nvar panel = new Ext.Panel({\n   ...\n   items: [\n      Ext.create('Ext.button.Button', {\n         text: 'OK'\n      })\n   ]\n};\n\n// Implicit creation using xtype:\nvar panel = new Ext.Panel({\n   ...\n   items: [{\n      xtype: 'button',\n      text: 'OK'\n   }]\n};\n</code></pre>\n\n<p>In the first example, the button will always be created immediately\nduring the panel's initialization. With many added Components, this\napproach could potentially slow the rendering of the page. In the\nsecond example, the button will not be created or rendered until the\npanel is actually displayed in the browser. If the panel is never\ndisplayed (for example, if it is a tab that remains hidden) then the\nbutton will never be created and will never consume any resources whatsoever.</p>\n"
      }
    ],
    "event": [
      {
        "shortDoc": "Fires after a Component has been visually activated. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-activate",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 624,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "activate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component has been visually activated.</p>\n"
      },
      {
        "shortDoc": "Fires after a Component had been added to a Container. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>Parent Container</p>\n",
            "name": "container"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>position of Component</p>\n",
            "name": "pos"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-added",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 644,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "added",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component had been added to a Container.</p>\n"
      },
      {
        "shortDoc": "Fires after the component rendering is finished. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-afterrender",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 711,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "afterrender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component rendering is finished.</p>\n\n\n<p>The afterrender event is fired after this Component has been <a href=\"#/api/Ext.tree.View-property-rendered\" rel=\"Ext.tree.View-property-rendered\" class=\"docClass\">rendered</a>, been postprocesed\nby any afterRender method defined for the Component.</p>\n\n"
      },
      {
        "shortDoc": "Fires before a Component has been visually activated. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeactivate",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 616,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually activated.\nReturning false from an event listener can prevent the activate\nfrom occurring.</p>\n"
      },
      {
        "shortDoc": "Fires before the click event on the container is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainerclick",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 262,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforecontainerclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the click event on the container is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the contextmenu event on the container is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainercontextmenu",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 276,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforecontainercontextmenu",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the contextmenu event on the container is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the dblclick event on the container is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainerdblclick",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 269,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforecontainerdblclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the dblclick event on the container is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the keydown event on the container is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object. Use <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> to retrieve the key that was pressed.</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainerkeydown",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 283,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforecontainerkeydown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the keydown event on the container is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the mousedown event on the container is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainermousedown",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 234,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforecontainermousedown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mousedown event on the container is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the mouseout event on the container is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainermouseout",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 255,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforecontainermouseout",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseout event on the container is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the mouseover event on the container is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainermouseover",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 248,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforecontainermouseover",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseover event on the container is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the mouseup event on the container is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainermouseup",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 241,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforecontainermouseup",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseup event on the container is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before a Component has been visually deactivated. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedeactivate",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 630,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforedeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually deactivated.\nReturning false from an event listener can prevent the deactivate\nfrom occurring.</p>\n"
      },
      {
        "shortDoc": "Fires before the component is destroyed. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedestroy",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 719,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforedestroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.tree.View-event-destroy\" rel=\"Ext.tree.View-event-destroy\" class=\"docClass\">destroy</a>ed. Return false from an event handler to stop the <a href=\"#/api/Ext.tree.View-event-destroy\" rel=\"Ext.tree.View-event-destroy\" class=\"docClass\">destroy</a>.</p>\n"
      },
      {
        "shortDoc": "Fires before the component is hidden when calling the hide method. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforehide",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 677,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforehide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is hidden when calling the <a href=\"#/api/Ext.tree.View-event-hide\" rel=\"Ext.tree.View-event-hide\" class=\"docClass\">hide</a> method.\nReturn false from an event handler to stop the hide.</p>\n"
      },
      {
        "shortDoc": "Fires before the click event on an item is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemclick",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 114,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforeitemclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the click event on an item is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the contextmenu event on an item is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemcontextmenu",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 134,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforeitemcontextmenu",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the contextmenu event on an item is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the dblclick event on an item is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemdblclick",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 124,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforeitemdblclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the dblclick event on an item is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the keydown event on an item is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object. Use <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> to retrieve the key that was pressed.</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemkeydown",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 144,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforeitemkeydown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the keydown event on an item is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the mousedown event on an item is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemmousedown",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 74,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforeitemmousedown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mousedown event on an item is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the mouseenter event on an item is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemmouseenter",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 94,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforeitemmouseenter",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseenter event on an item is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the mouseleave event on an item is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemmouseleave",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 104,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforeitemmouseleave",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseleave event on an item is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the mouseup event on an item is processed. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemmouseup",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 84,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforeitemmouseup",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseup event on an item is processed. Returns false to cancel the default action.</p>\n"
      },
      {
        "shortDoc": "Fires before the view is refreshed ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "<p>The DataView object</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-event-beforerefresh",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 216,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "beforerefresh",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Fires before the view is refreshed</p>\n"
      },
      {
        "shortDoc": "Fires before the component is rendered. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforerender",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 698,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforerender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.tree.View-property-rendered\" rel=\"Ext.tree.View-property-rendered\" class=\"docClass\">rendered</a>. Return false from an\nevent handler to stop the <a href=\"#/api/Ext.tree.View-event-render\" rel=\"Ext.tree.View-event-render\" class=\"docClass\">render</a>.</p>\n"
      },
      {
        "shortDoc": "Fires before a selection is made. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The node to be selected</p>\n",
            "name": "node"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>Array of currently selected nodes</p>\n",
            "name": "selections"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeselect",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 347,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "beforeselect",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before a selection is made. If any handlers return false, the selection is cancelled.</p>\n"
      },
      {
        "shortDoc": "Fires before the component is shown when calling the show method. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeshow",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 664,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "beforeshow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is shown when calling the <a href=\"#/api/Ext.tree.View-event-show\" rel=\"Ext.tree.View-event-show\" class=\"docClass\">show</a> method.\nReturn false from an event handler to stop the show.</p>\n"
      },
      {
        "shortDoc": "Fires before the state of the object is restored. ...",
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values returned from the StateProvider. If this\nevent is not vetoed, then the state object is passed to <b><tt>applyState</tt></b>. By default,\nthat simply copies property values into this object. The method maybe overriden to\nprovide custom state restoration.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-beforestaterestore",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 101,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "beforestaterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is restored. Return false from an event handler to stop the restore.</p>\n"
      },
      {
        "shortDoc": "Fires before the state of the object is saved to the configured state provider. ...",
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-beforestatesave",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 122,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "beforestatesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is saved to the configured state provider. Return false to stop the save.</p>\n"
      },
      {
        "shortDoc": "Fires when the container is clicked. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containerclick",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 311,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "containerclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the container is clicked.</p>\n"
      },
      {
        "shortDoc": "Fires when the container is right clicked. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containercontextmenu",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 325,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "containercontextmenu",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the container is right clicked.</p>\n"
      },
      {
        "shortDoc": "Fires when the container is double clicked. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containerdblclick",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 318,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "containerdblclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the container is double clicked.</p>\n"
      },
      {
        "shortDoc": "Fires when a key is pressed while the container is focused, and no item is currently selected. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object. Use <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> to retrieve the key that was pressed.</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containerkeydown",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 332,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "containerkeydown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when a key is pressed while the container is focused, and no item is currently selected.</p>\n"
      },
      {
        "shortDoc": "Fires when you move the mouse out of the container. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containermouseout",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 304,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "containermouseout",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when you move the mouse out of the container.</p>\n"
      },
      {
        "shortDoc": "Fires when you move the mouse over the container. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containermouseover",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 297,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "containermouseover",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when you move the mouse over the container.</p>\n"
      },
      {
        "shortDoc": "Fires when there is a mouse up on the container ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containermouseup",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 290,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "containermouseup",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when there is a mouse up on the container</p>\n"
      },
      {
        "shortDoc": "Fires after a Component has been visually deactivated. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-deactivate",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 638,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "deactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component has been visually deactivated.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is destroyed. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-destroy",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 725,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is <a href=\"#/api/Ext.tree.View-event-destroy\" rel=\"Ext.tree.View-event-destroy\" class=\"docClass\">destroy</a>ed.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is disabled. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-disable",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 652,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is disabled.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is enabled. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-enable",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 658,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is enabled.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is hidden. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-hide",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 684,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is hidden.\nFires after the component is hidden when calling the <a href=\"#/api/Ext.tree.View-event-hide\" rel=\"Ext.tree.View-event-hide\" class=\"docClass\">hide</a> method.</p>\n"
      },
      {
        "shortDoc": "Fires when the nodes associated with an recordset have been added to the underlying store ...",
        "params": [
          {
            "type": "Array[Ext.data.Model]",
            "optional": false,
            "doc": "<p>The model instance</p>\n",
            "name": "records"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the set of record/nodes starts</p>\n",
            "name": "index"
          },
          {
            "type": "Array[HTMLElement]",
            "optional": false,
            "doc": "<p>The node that has just been updated</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-event-itemadd",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 236,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "itemadd",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Fires when the nodes associated with an recordset have been added to the underlying store</p>\n"
      },
      {
        "shortDoc": "Fires when an item is clicked. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemclick",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 194,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "itemclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when an item is clicked.</p>\n"
      },
      {
        "shortDoc": "Fires when an item is right clicked. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemcontextmenu",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 214,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "itemcontextmenu",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when an item is right clicked.</p>\n"
      },
      {
        "shortDoc": "Fires when an item is double clicked. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemdblclick",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 204,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "itemdblclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when an item is double clicked.</p>\n"
      },
      {
        "shortDoc": "Fires when a key is pressed while an item is currently selected. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object. Use <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> to retrieve the key that was pressed.</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemkeydown",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 224,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "itemkeydown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when a key is pressed while an item is currently selected.</p>\n"
      },
      {
        "shortDoc": "Fires when there is a mouse down on an item ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemmousedown",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 154,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "itemmousedown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when there is a mouse down on an item</p>\n"
      },
      {
        "shortDoc": "Fires when the mouse enters an item. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemmouseenter",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 174,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "itemmouseenter",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the mouse enters an item.</p>\n"
      },
      {
        "shortDoc": "Fires when the mouse leaves an item. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemmouseleave",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 184,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "itemmouseleave",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the mouse leaves an item.</p>\n"
      },
      {
        "shortDoc": "Fires when there is a mouse up on an item ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemmouseup",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 164,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "itemmouseup",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when there is a mouse up on an item</p>\n"
      },
      {
        "shortDoc": "Fires when the node associated with an individual record is removed ...",
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The model instance</p>\n",
            "name": "record"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the record/node</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-event-itemremove",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 244,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "itemremove",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Fires when the node associated with an individual record is removed</p>\n"
      },
      {
        "shortDoc": "Fires when the node associated with an individual record is updated ...",
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The model instance</p>\n",
            "name": "record"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the record/node</p>\n",
            "name": "index"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The node that has just been updated</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-event-itemupdate",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 228,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "itemupdate",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Fires when the node associated with an individual record is updated</p>\n"
      },
      {
        "shortDoc": "Fires after the component is moved. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new x position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new y position</p>\n",
            "name": "y"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-move",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 739,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "move",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is moved.</p>\n"
      },
      {
        "shortDoc": "Fires when the view is refreshed ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "<p>The DataView object</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-event-refresh",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractView.html",
        "linenr": 222,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "name": "refresh",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Fires when the view is refreshed</p>\n"
      },
      {
        "shortDoc": "Fires when a component is removed from an Ext.container.Container ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>Container which holds the component</p>\n",
            "name": "ownerCt"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-removed",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 691,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "removed",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires when a component is removed from an Ext.container.Container</p>\n"
      },
      {
        "shortDoc": "Fires after the component markup is rendered. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-render",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 705,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "render",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component markup is <a href=\"#/api/Ext.tree.View-property-rendered\" rel=\"Ext.tree.View-property-rendered\" class=\"docClass\">rendered</a>.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is resized. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-resize",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 731,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "resize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is resized.</p>\n"
      },
      {
        "shortDoc": "Fires when the selected nodes change. ...",
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>Array of the selected nodes</p>\n",
            "name": "selections"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-selectionchange",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "View.html",
        "linenr": 340,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "name": "selectionchange",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the selected nodes change. Relayed event from the underlying selection model.</p>\n"
      },
      {
        "shortDoc": "Fires after the component is shown when calling the show method. ...",
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-show",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "AbstractComponent.html",
        "linenr": 671,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "show",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is shown when calling the <a href=\"#/api/Ext.tree.View-event-show\" rel=\"Ext.tree.View-event-show\" class=\"docClass\">show</a> method.</p>\n"
      },
      {
        "shortDoc": "Fires after the state of the object is restored. ...",
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values returned from the StateProvider. This is passed\nto <b><tt>applyState</tt></b>. By default, that simply copies property values into this\nobject. The method maybe overriden to provide custom state restoration.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-staterestore",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 112,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "staterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is restored.</p>\n"
      },
      {
        "shortDoc": "Fires after the state of the object is saved to the configured state provider. ...",
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-statesave",
        "deprecated": null,
        "tagname": "event",
        "static": false,
        "alias": null,
        "protected": false,
        "inheritable": false,
        "html_filename": "Stateful.html",
        "linenr": 133,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "statesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is saved to the configured state provider.</p>\n"
      }
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
    "Ext.util.Floating",
    "Ext.util.Observable",
    "Ext.util.Animate",
    "Ext.state.Stateful"
  ],
  "protected": false,
  "inheritable": false,
  "alternateClassNames": [

  ],
  "html_filename": "View3.html",
  "statics": {
    "method": [
      {
        "shortDoc": "Add / override static properties of this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-addStatics",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n\n\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 392,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "addStatics",
        "owner": "Ext.Base",
        "doc": "<p>Add / override static properties of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n\n\n\n"
      },
      {
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "params": [
          {
            "type": "Ext.Base",
            "optional": false,
            "doc": "<p>The class to borrow members from</p>\n\n\n\n",
            "name": "fromClass"
          },
          {
            "type": "Array/String",
            "optional": false,
            "doc": "<p>The names of the members to borrow</p>\n\n\n\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-borrow",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n\n\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 482,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "borrow",
        "owner": "Ext.Base",
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n\n\n\n"
      },
      {
        "shortDoc": "Create a new instance of this Class. ...",
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-create",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n\n\n\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 330,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "create",
        "owner": "Ext.Base",
        "doc": "<p>Create a new instance of this Class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n\n\n\n<p>All parameters are passed to the constructor of the class.</p>\n\n\n\n"
      },
      {
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n\n\n\n",
            "name": "alias"
          },
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The original method name</p>\n\n\n\n",
            "name": "origin"
          }
        ],
        "href": "Base3.html#Ext-Base-method-createAlias",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 658,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "createAlias",
        "owner": "Ext.Base",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n\n\n\n"
      },
      {
        "shortDoc": "Get the current class' name in string format. ...",
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n\n\n\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 639,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n\n\n\n"
      },
      {
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-implement",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 420,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "implement",
        "owner": "Ext.Base",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n\n\n\n"
      },
      {
        "shortDoc": "Override prototype members of this class. ...",
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "href": "Base3.html#Ext-Base-method-override",
        "deprecated": null,
        "tagname": "method",
        "static": true,
        "alias": null,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n\n\n"
        },
        "protected": false,
        "inheritable": true,
        "html_filename": "Base3.html",
        "linenr": 524,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "override",
        "owner": "Ext.Base",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n\n\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n\n\n"
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
  "author": null,
  "subclasses": [

  ],
  "linenr": 1,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/View.js",
  "private": false,
  "xtypes": [
    "treeview"
  ],
  "name": "Ext.tree.View",
  "doc": "\n",
  "extends": "Ext.view.Table",
  "docauthor": null
});