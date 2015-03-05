// main.js
Meteor.methods({
	stageName: function(stageId) {
		return Stages.findOne({_id: stageId}).stageName();
	}
})
