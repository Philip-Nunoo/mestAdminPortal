Applicant = function (doc) {
	// Parent class object of Applicant
	_.extend(this, doc);
};

_.extend(Applicant.prototype, {});

Applicants = new Mongo.Collection('applicants', {
	transform: function (doc) { return new Applicant(doc);}
});

Applicants.attachSchema(new SimpleSchema({
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
		label: "College or Institution",
		autoform: {
			options: function(){
				return [
				{value: 'ust', label: 'KNUST'},
				{value: 'ucc', label: 'UCC'},
				{value: 'legon', label: 'Legon'}
				]
			}
		}
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