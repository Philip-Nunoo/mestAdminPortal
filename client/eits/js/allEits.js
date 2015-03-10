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
	/*"change #files": function (e) {
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
	},*/
	"click .uploadFile": function (event, template) {
		event.preventDefault();
		var t = template.find('#files');
		var files = t.files || t.dataTransfer.files;

		// var files = event.target.files || event.dataTransfer.files;
		if (files.length != 0 ){
			if (files[0].name != Session.get('file_name')){				
				Session.set("file_name", files[0].name);
				console.log(files[0].name);
			}				
			else{
				alert("It looks like you're trying to upload the same file. Do you want to continue");
				return
			}
		}
		else{
			alert('Please select a file');
			return;
		}
		for (var i = 0, file; file = files[i]; i++) {
			if (file.type.indexOf("text") == 0) {
				var reader = new FileReader();
				
				reader.onloadend = function (event) {
					var text = event.target.result;
					var all = $.csv.toObjects(text);
					// console.log(all)
					_.each(all, function (entry) {
						Eits.insert(entry);
					});
				}
				reader.readAsText(file);
			}
		}
	}
});