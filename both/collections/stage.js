// stage.js
Stage = function (doc) {
	// Parent class object of Stage
	_.extend(this, doc);
};

_.extend(Stage.prototype, {});

Stages = new Mongo.Collection('stages', {
	transform: function (doc) { return new Stage(doc);}
});

Stages.attachSchema(new SimpleSchema({
	stage: {
		type: Number,
		label: "Stage"
	},
	stageName: {
		type: String,
		label: "Stage name",
		max: 300
	},
	stageDescription: {
		type: String,
		label: "Description"
	}
}));


if (Stages.find().fetch().length ==0) {
	staged = [
	{stage: 0,stageName: 'Application stage',stageDescription: 'Initial Application'},
	{stage: 1,stageName: 'Aptitude test stage',stageDescription: 'Those sitting for the Aptitude test'},
	{stage: 2,stageName: 'Phone call stage', stageDescription: 'Candidate qualify for the Phone call'},
	{stage: 3,stageName: 'Group 1 interview', stageDescription: 'Group 1 interview'},
	{stage: 4,stageName: 'Group 2 interview',	stageDescription: 'Group 2 interview'	},
	{stage: 5,stageName: 'Final interview',	stageDescription: 'Final Group and one-on-one interview'}
	];

	for (var i = 0; i < staged.length; i++) {
		Stages.insert(staged[i]);
	};
};