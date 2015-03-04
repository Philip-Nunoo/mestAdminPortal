// applicantsApplicantStages
ApplicantsStage = function (doc) {
	// Parent class object of ApplicantStage
	_.extend(this, doc);
};

_.extend(ApplicantsStage.prototype, {});

ApplicantsStages = new Mongo.Collection('applicantsStages', {
	transform: function (doc) { return new ApplicantsStage(doc);}
});

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