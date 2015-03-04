// main.js
Template.registerHelper('stageName',function(stageId) {
	return Stages.findOne({_id: stageId}).stageName;
})