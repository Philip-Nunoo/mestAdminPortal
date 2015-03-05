Applicant = function (doc) {
	// Parent class object of Applicant
	_.extend(this, doc);
};

_.extend(Applicant.prototype, {
	stagesPassed: function(){
		return ApplicantsStages.find({applicantId: this._id}).fetch();
	},
	currentStage: function(){
		return ApplicantsStages.findOne({applicantId: this._id});
	}
});

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
		label: "Date of Birth"
	},
	programmeOfStudy: {
		type: String,
		label: "Program of study",
		max: 300
	},
	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: "Contact Email"
	},
	college: {
		type: String,
		label: "College or Institution",
		autoform: {
			afFieldInput: {
				type: 'select',
				class: 'browser-default'
			},
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
		max: 1000,
		autoform: {
			afFieldInput: {
				type: 'textarea'
			}
		}
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

Applicants.after.insert(function (userId, doc) {
	// set user to new applicant stage
	var stage = Stages.findOne({stage: 0});
	if(!ApplicantsStages.findOne({applicantId: this._id, stageId: stage._id})){
		ApplicantsStages.insert({applicantId: this._id, stageId: stage._id});
	}
});