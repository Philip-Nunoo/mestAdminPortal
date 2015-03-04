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
  this.layout('dashboardLayout');
}), {
  name: 'allProspects'
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