// dashboard.js
Template.dashboard.helpers({
	item: function () {
		console.log('hellow');
		return [
			{
				numberOfProspects: Prospects.find().count(),
				numberOfApplicants: Applicants.find().count(),
				numberOfEits: Eits.find().count()
			}
		]
	}
});