# signIn.coffee
Template.signIn.events
	'submit form' : (event, template)->
		event.preventDefault()
		user = template.find('#user').value
		password = template.find('#password').value

		Meteor.loginWithPassword(user, password, 
			(error) ->
				if Meteor.user()
					Router.go 'dashboard'
				else
					message = "<span class='error'>There was an error logging in: <strong>" + error.reason + "</strong></span>"
					console.log(message)
					$('#form-messages').html(message)
					# template.find('#form-messages').html()
				return
		)
		return

Template.dashboardLayout.events
	'click a.force-logout': (event)->
		event.preventDefault()
		Meteor.logout ()->
			Router.go('sign-in')
			return
		return