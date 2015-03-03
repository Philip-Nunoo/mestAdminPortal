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

Router.route('/dashboard', (function() {
  this.render('dashboard');
}), {
  name: 'dashboard'
});