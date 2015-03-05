// settings.js
Template.settings.helpers({
	allSettings: function () {
		return Settings.find().fetch();
	}
});

Template.settings.events({
	'click a.newItems': function(event){
		if (Session.get('settingsPage') == 'nstage'){
			// Session.set('settingsPage', 'nstage');
			template = Template.newStage;
		}
		if (Session.get('settingsPage') == 'nsettings'){
			// Session.set('settingsPage', 'nsettings');
			template = Template.newSettings;
			console.log('new Settings');
		}
		$("#settingsHolder").html("");
		Blaze.render(template, $('#settingsHolder')[0]);
	},
	'click a.updateSettings': function (event) {
		// ...
		// event.preventDefault();
		$("#settingsHolder").html("");		
		Blaze.render(Template.updateSettings, $('#settingsHolder')[0]);
	}
});