// failed.js
Fail = function (doc) {
	// Parent class object of Fail
	_.extend(this, doc);
};

_.extend(Fail.prototype, {});

Fails = new Mongo.Collection('fails', {
	transform: function (doc) { return new Fail(doc);}
});

Fails.attachSchema(new SimpleSchema({
	firstName: {
		type: String,
		label: "First Name",
		max: 300
	},
	lastName: {
		type: String,
		label: "Last Name",
		max: 300
	},
	dateOfBirth: {
		type: String,
		label: "Date of Birth",
		max: 300
	},
	programmeOfStudy: {
		type: String,
		label: "Program of study",
		max: 300
	},
	college: {
		type: String,
		label: "College or Institution"
	},
	summary: {
		type: String,
		label: "Tell us about yourself",
		optional: false,
		max: 1000
	},
	createdAt: {
		type: Date,
		autoform: {
			omit: true
		},
		autoValue: function() {
			if (this.isInsert) {
				return new Date;
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date};
			} else {
				this.unset();
			}
		}
	}
}));