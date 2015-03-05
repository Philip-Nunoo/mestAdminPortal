Template.applicants.helpers({
	applicants: function () {
		return Applicants.find().fetch();
	}
});

Template.applicants.events({
	'click a.applicantPassed': function(event) {
		event.preventDefault();
		var newStage = getNextStage(this._id);
		// console.log(newStageId);
		var applicantStages = ApplicantsStages.findOne({applicantId: this._id});
		ApplicantsStages.update(applicantStages._id, {$set: {stageId: newStage._id}});
		
	},
	'click a.applicantFailed': function(event) {
		event.preventDefault();
		Fails.insert(this);
		Applicants.remove(this._id);
	},
	'click a.remove': function (event) {
		// destroy current applicant
		event.preventDefault();
		Applicants.remove(this._id);
	},
	'click a.newApplicant': function(event) {
		// add new Applicant
		event.preventDefault();
		$('#myModal').foundation('reveal', 'open', {
			close_on_background_click: false
		});
	},
	'click a.loadCSV': function (event) {
		// loadCSV
		event.preventDefault();

	},
	"change #files": function (e) {
		e.preventDefault();
		var files = e.target.files || e.dataTransfer.files;
		
		for (var i = 0, file; file = files[i]; i++) {
			if (file.type.indexOf("text") == 0) {
				var reader = new FileReader();
				
				reader.onloadend = function (e) {
					var text = e.target.result;
					var all = $.csv.toObjects(text);
					console.log(all)
					_.each(all, function (entry) {
						Applicants.insert(entry);
					});
				}
				reader.readAsText(file);
			}
		}
	}
});
