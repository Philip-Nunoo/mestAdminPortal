Router.configure({
  layoutTemplate: 'layoutTemplate',
  loadingTemplate: 'loadingTemplate',
  notFoundTemplate: 'notFoundTemplate'
});

Router.route('/', (function() {
  this.render('home');
}), {
  name: 'home'
});

// Dashboard
Router.route('/dashboard', (function() {
  this.render('dashboard');
}), {
  name: 'dashboard'
});

// Dashboard {allProspects}
Router.route('/prospects', (function() {
  this.render('prospects');
}), {
  name: 'allProspects'
});

// Dashboard {allApplicants}
Router.route('/applicants', (function() {
  this.render('applicants');
}), {
  name: 'allApplicants'
});

// Dashboard {allEits}
Router.route('/all_eits', (function() {
  this.render('allEits');
}), {
  name: 'allEits'
});

// Dashboard {allAlumni}
Router.route('/alumni', (function() {
  this.render('alumni');
}), {
  name: 'allAlumni'
});