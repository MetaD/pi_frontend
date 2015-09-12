// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone.localStorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:

define([
    'vender/jquery-2.1.4',
    'vender/underscore',
    'vender/backbone',
    'js/models/art_model',
    'js/views/art_view'
], function ($, _, Backbone, artModel, ArtView) {
    "use strict";
    var art = new artModel();
    //artCollection.createModel();
    window.art = art;

    window.artView = new ArtView({model: art});
    artView.render();
});