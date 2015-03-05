// applicantsApplicantStages
ApplicantsStage = function (doc) {
	// Parent class object of ApplicantStage
	_.extend(this, doc);
};

_.extend(ApplicantsStage.prototype, {});

ApplicantsStages = new Mongo.Collection('applicantsStages', {
	transform: function (doc) { return new ApplicantsStage(doc);}
});

ApplicantsStages.allow({
	insert: function (userId, doc) {
		//...
		return !(ApplicantsStages.findOne({applicantId: doc.applicantId}));
	},
	update: function (userId, doc, fields, modifier) {
		//...
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['owner'],
	transform: function () {
		//...
	}
});
/*ApplicantsStages.deny({
	insert: function (userId, doc) {
		// deny if user already has been created here
		return ApplicantsStages.findOne({applicantId: doc.applicantId});
	},
	update: function (userId, doc, fields, modifier) {
		// update allowed
		return true;
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['locked'],
	transform: function () {
		//...
	}
});*/
ApplicantsStages.attachSchema(new SimpleSchema({
	applicantId: {
		type: String,
		label: "Applicant Id",
		max: 300
	},
	stageId: {
		type: String,
		label: "Stage Id",
		max: 300
	}
}));