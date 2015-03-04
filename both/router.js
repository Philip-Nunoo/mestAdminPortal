Router.configure({
  layoutTemplate: 'layoutTemplate',
  loadingTemplate: 'loadingTemplate',
  notFoundTemplate: 'notFoundTemplate',
  routeControllerNameConverter: "camelCase"
});

Router.route('/', (function() {
  this.render('home');
}), {
  name: 'home'
});

// Dashboard
Router.route('/dashboard', (function() {
  this.render('dashboard');
  this.layout('dashboardLayout');
}), {
  name: 'dashboard'
});

// Dashboard {allProspects}
Router.route('/prospects', (function() {
  this.render('prospects');
  this.layout('dashboardLayout');
}), {
  name: 'prospects',
  data: function(){
    return{
      prospects: Prospects.find().fetch().reverse()
    }
  }
});

Router.route('/prospects/:category/', function(){
  this.layout('dashboardLayout');
  this.render('prospects'); //calling projects template
}, {
  name: 'prospectsCategory',
  data: function(){
    return{
      prospects: Prospects.find({category: this.params.category}).fetch()//finding a category based on a parameter
      // business: Projects.find({category: "business"}).fetch().length,
      // technology: Projects.find({category: "technology"}).fetch().length,
      // communication: Projects.find({category: "communication"}).fetch().length
    }
  }
});



// Dashboard {allApplicants}
Router.route('/applicants', (function() {
  this.render('applicants');
  this.layout('dashboardLayout');
}), {
  name: 'allApplicants'
});

// Dashboard {allEits}
Router.route('/all_eits', (function() {
  this.render('allEits');
  this.layout('dashboardLayout');
}), {
  name: 'allEits'
});

// Dashboard {allAlumni}
Router.route('/alumni', (function() {
  this.render('alumni');
  this.layout('dashboardLayout');
}), {
  name: 'allAlumni'
});

// Dashboard {newApplicant}
Router.route('/new/applicant', (function() {
  this.render('newApplicant');
  this.layout('dashboardLayout');
}), {
  name: 'newApplicant'
});


// Dashboard {Comments on Applicant}
Router.route('/comments/applicant', (function() {
  this.render('comments');
  this.layout('dashboardLayout');
}), {
  name: 'comments'
});