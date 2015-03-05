// <!-- updateSettings.js

Template.updateSettings.helpers({
	data: function () {
		var id = Session.get('settingsId');
		// Session.set('settingsId', null);
		data = Settings.findOne({_id: id});
		return data;
		console.log(id);
	}
});