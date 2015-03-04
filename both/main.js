// main.js
Meteor.methods({
	stageName: function(stageId) {
		console.log('hello');
		return Stages.findOne({_id: stageId}).stageName();
	}
})