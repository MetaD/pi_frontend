// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone.localStorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:

define([
    '../../vender/jquery-2.1.4',
    '../../vender/underscore',
    '../../vender/backbone',
    'art_model'
], function ($, _, Backbone, artModel) {
    "use strict";
    var ArtCollection = Backbone.Collection.extend({
      model: artModel,
      // Default attributes for the todo item.
      defaults: {
        test_data: [
          { picture: 'cardK', sell_permission: false, sell_link: false },
          { picture: 'cardK', sell_permission: false, sell_link: false },
          { picture: 'cardK', sell_permission: false, sell_link: false }
        ]
      },
      createModel: function() {
        this.picture = pic;
        this.sell_permission = sell_permit;
        sell_link = sell_url;

        for(var i=0; i<test_data.size; i++) {
          artModel.create(test_data[i]);
        }
      },


    });
    return ArtModel;
});