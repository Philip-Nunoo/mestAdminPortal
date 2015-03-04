// main.js
Template.registerHelper('stageName',function(stageId) {
	console.log(stageId);
	return Stages.findOne({_id: stageId}).stageName;
})