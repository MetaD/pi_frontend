define([
    'vender/jquery-2.1.4',
    'vender/underscore',
    'vender/backbone',
    'js/models/art_model',
    'js/models/art_collection',
    'js/views/art_view',
    'js/models/badge_model',
    'js/models/badge_collection',
    'js/views/badge_view'
], function ($, _, Backbone, artModel, artCollection, artView, badgeModel, badgeCollection, badgeView) {
    "use strict";
   
   var arts = new artCollection([
       { picture: 'img/1.jpg', alt_text: 'Korean bibimbap with egg and vegetables', pic_link: "artwork_1.html" },
       { picture: 'img/2.jpg', alt_text: 'aaa', pic_link: "artwork_2.html" },
       { picture: 'img/3.jpg', alt_text: 'bbb', pic_link: "artwork_3.html" },
		{ picture: 'img/poster1.jpg', alt_text: 'bbb', pic_link: "artwork_4.html" },
		{ picture: 'img/poster3.jpg', alt_text: 'bbb', pic_link: "artwork_5.html" },
		{ picture: 'img/poster2.jpg', alt_text: 'bbb', pic_link: "artwork_6.html" },
		{ picture: 'img/article1.jpeg', alt_text: 'bbb', pic_link: "artwork_7.html" },
		{ picture: 'img/8.jpg', alt_text: 'bbb', pic_link: "artwork_8.html" },
		{ picture: 'img/touxiang.jpg', alt_text: 'bbb', pic_link: "artwork_9.html" }
		
   ]);
	
   var badges = new badgeCollection([
       { name: 'E-Pro', progress: 0.87 },
       { name: 'Superman', progress: 0.32 },
       { name: 'The Grand Master', progress: 0.5 }
   ]);
   window.arts = arts;
    window.artView = new artView({collection: arts});
    window.artView.render();
});