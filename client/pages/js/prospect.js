// prospect.js
Template.prospects.rendered = function () {
	$(document).foundation({});
};

Template.prospects.events({
	'click .panelTab': function (event) {
		event.preventDefault();
	},

	'click .newProspect': function(event) {
		event.preventDefault();
		console.log('hello');
	}
});