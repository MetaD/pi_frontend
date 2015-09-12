// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone.localStorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:

define([
    '../../vender/jquery-2.1.4',
    '../../vender/underscore',
    '../../vender/backbone',
], function ($, _, Backbone) {
    "use strict";
    var ArtModel = Backbone.Model.extend({

      // Default attributes for the todo item.
      defaults: {
        picture: 'Hey',
        sell_permission: false,
        sell_link: 'Yeah'
      }

    });
    return ArtModel;
});