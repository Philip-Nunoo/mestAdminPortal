Router.configure({
  layoutTemplate: 'layoutTemplate',
  loadingTemplate: 'loadingTemplate',
  notFoundTemplate: 'notFoundTemplate',
  routeControllerNameConverter: "camelCase"
});

userHookFunction = function () {
  if (!Meteor.userId()) { 
    // if the user is not logged in, render the Login template
    Router.go('home');
  } else { 
    // otherwise don't hold up the rest of hooks or our route/action function 
    // from running
    this.next();
  }
};

// OnBefore action hooks
Router.onBeforeAction(userHookFunction, {
  only: ['dashboard', 'prospects', 'prospectsCategory', 
         'allApplicants', 'allEits', 'allAlumni', 
         'newApplicant', 'editEit', 'newEit', 'settings', 'editApplicant']
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

// Dashboard {newEit}
Router.route('/new/eit', (function(){
  this.render('newEit');
  this.layout('dashboardLayout');
}), {
  name: 'newEit'
});

// Dashboard {newApplicant}
Router.route('/new/applicant', (function() {
  this.render('newApplicant');
  this.layout('dashboardLayout');
}), {
  name: 'newApplicant'
});

// Dashboard {editApplicant}
Router.route('/edit/applicant/:_id', (function() {
  this.render('updateApplicant');
  this.layout('dashboardLayout');
}), {
  name: 'editApplicant',
  data: function(){
    var id = this.params._id;
    data = Applicants.findOne({_id: id});
    console.log(id);
    return {
      data: data
    };
  }
});

// Dashboard {editEit}
Router.route('/edit/eit/:_id', (function() {
  this.render('updateEit');
  this.layout('dashboardLayout');
}), {
  name: 'editEit',
  data: function(){
    var id = this.params._id;
    data = Eits.findOne({_id: id});
    console.log(id);
    return {
      data: data
    };
  }
});

// Dashboard {settings}
Router.route('/settings/:_id', (function() {
  this.render('settings');
  this.layout('dashboardLayout');
}), {
  name: 'settings',
  data: function(){
    var id = this.params._id;
    var data="";
    if (id == 'newStage'){
      Session.set('settingsPage', 'nstage');
    }
    if (id == 'newSettings'){
      Session.set('settingsPage', 'nsettings');
    }
    if (id != 'newStage' && id != 'settings' && id != 'newSettings'){
      data = Settings.findOne({_id: id});
      Session.set('settingsId', id);
      id = 'updateSettings';
    }
    return {template: id, dataContext: data}
  }
});