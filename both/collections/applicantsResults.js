// ApplicantsResults
ApplicantsResults = function (doc) {
	// Parent class object of ApplicantsResults
	_.extend(this, doc);
};

_.extend(ApplicantsResults.prototype, {});

ApplicantsResults = new Mongo.Collection('applicantsResults', {
	transform: function (doc) { return new ApplicantsResults(doc);}
});

ApplicantsResults.attachSchema(new SimpleSchema({
	applicantId: {
		type: String,
		label: "Applicant Id",
		max: 300
	},
	type: {
		type: String,
		label: "Category",
		max: 300,
		autoform: {
			options: function(){
				return [
					{value: 'Math', label: 'Math'},
					{value: 'Programming', label: 'Programming'},
					{value: 'Logic', label: 'Logical Reasoning'}
				]
			}
		}
	},
	result: {
		type: String,
		label: "Date of Birth",
		max: 300
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