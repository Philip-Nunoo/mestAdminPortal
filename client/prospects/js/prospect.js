AutoForm.hooks({
  addProspect: {
    onSuccess: function(operation, result, template) {
      Router.go('prospects');
      $('#modal1').closeModal();
    },
    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
Template.prospects.events({
	'click .tabs .tab': function(e,r){
		var href = $(e.currentTarget).find('a').attr('href');
		Router.go(href);
	}
})