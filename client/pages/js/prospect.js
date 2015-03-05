// prospect.js
Template.prospects.rendered = function () {
};

Template.prospects.events({
	'click .panelTab': function (event) {
		event.preventDefault();
	},

	'click .newProspect': function(event) {
		event.preventDefault();
		$('#myModal').foundation('reveal', 'open', {
			close_on_background_click: false
		});
	}
});