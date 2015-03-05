// dashboard.js
Template.dashboard.helpers({
	data: function () {
		return [
			{
				numberOfProspects: Prospects.find().count(),
				numberOfApplicants: Applicants.find().count(),
				numberOfEits: Eits.find().count()
			}
		]
	}
});