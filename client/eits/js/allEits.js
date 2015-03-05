// allEits.js
Template.allEits.helpers({
	eits: function () {
		return Eits.find().fetch();
	}
});

Template.allEits.events({
	'click a.view': function () {
		event.preventDefault();
		var eit = Eits.findOne({_id: this._id});
		Session.set('view_eit', eit);
		console.log(eit);

		$('#viewModal').foundation('reveal', 'open', {
			close_on_background_click: false
		});
	},
	'click a.remove': function () {
		Eits.remove({_id: this._id});
	},
	"change #files": function (e) {
		e.preventDefault();
		var files = e.target.files || e.dataTransfer.files;
		
		for (var i = 0, file; file = files[i]; i++) {
			if (file.type.indexOf("text") == 0) {
				var reader = new FileReader();
				
				reader.onloadend = function (e) {
					var text = e.target.result;
					var all = $.csv.toObjects(text);
					console.log(all)
					_.each(all, function (entry) {
						Eits.insert(entry);
					});
				}
				reader.readAsText(file);
			}
		}
	}
});