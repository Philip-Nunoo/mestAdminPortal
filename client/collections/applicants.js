// applicants.js
AutoForm.hooks({
	insertApplicantForm: {
		onSuccess: function(operation, result, template){
			Router.go('dashboard');
		},
		onError: function(operation, error , template){
			console.log(error);
			alert(error);
		}
	}
});

AutoForm.hooks({
  insertCommentsForm: {
    onSuccess: function(operation, result, template){
      Router.go('applicantComments');
    },
    onError: function(operation, error, template){
      console.log(error)

    },
    formToDoc: function(doc) {

      doc.applicantId = Router.current().data().applicant._id;
      
      return doc;
    }
  }
})