Template.registerHelper('stageName',function(stageId) {
	return Stages.findOne({_id: stageId}).stageName;
});


getNextStage = function(id){
	var aps = ApplicantsStages.findOne({applicantId: id});
	var applicant = Applicants.findOne({_id: id});
	var stage = Stages.findOne({_id: aps.stageId}).stage;

	if(stage == 0){
		return Stages.findOne({stage: 1});
	}else if(stage == 1){
		return Stages.findOne({stage: 2});
	}else if(stage == 2){
		return Stages.findOne({stage: 3});
	}else if(stage == 3){
		return Stages.findOne({stage: 4});
	}else if(stage == 4){
		return Stages.findOne({stage: 5});
	}
	else if(stage == 5){
		console.log(applicant)
		Eits.insert(applicant)
		Applicants.remove(id);
		// return Stages.findOne({stage: 5});
	}
	return Stages.findOne({stage: 0});
}