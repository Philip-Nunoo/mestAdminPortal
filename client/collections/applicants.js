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