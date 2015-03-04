Template.applicants.helpers({
	applicants: function () {
		return Applicants.find().fetch();
	}
});

Template.applicants.events({
	'click a.remove': function (event) {
		// destroy current applicant
		event.preventDefault();
		Applicants.remove(this._id);
		console.log("Applicant removed");
	},

	'click a.viewApplicant': function(event) {
		// View applicant
		event.preventDefault();
		applicant = Applicants.findOne({_id: this._id});
		$('#myModal').leanModal();
		// return applicant;
	}
});
