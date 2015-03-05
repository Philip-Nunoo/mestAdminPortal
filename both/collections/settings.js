// settings.js
Setting = function (doc) {
	// Parent class object of Setting
	_.extend(this, doc);
};

_.extend(Setting.prototype, {});

Settings = new Mongo.Collection('settings', {
	transform: function (doc) { return new Setting(doc);}
});

Settings.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Stage name",
		max: 300
	},
	stage1: {
		type: Date,
		optional: true,
		label: "Group 1 interview notification date"
	},
	stage2: {
		type: Date,
		optional: true,
		label: "Group 2 interview notification date"
	},
	stage3: {
		type: Date,
		optional: true,
		label: "Final notification date"
	},
	stage4: {
		type: Date,
		optional: true,
		label: "Eit Alumni Notification date"
	},

}));