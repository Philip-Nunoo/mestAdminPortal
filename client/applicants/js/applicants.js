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
	}
});