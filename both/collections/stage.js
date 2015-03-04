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
		type: String,
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