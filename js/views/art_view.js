// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone.localStorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:

define([
    '../../vender/jquery-2.1.4',
    '../../vender/underscore',
    '../../vender/backbone',
    '../../vender/handlebars',
], function ($, _, Backbone, Handlebars) {
    "use strict";
    var ArtView = Backbone.View.extend({
      el: ".entry",
      template: Handlebars.compile(jQuery("#entry-template").html()),
      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      }
  });
  // Our module now returns our view
  return ArtView;
});