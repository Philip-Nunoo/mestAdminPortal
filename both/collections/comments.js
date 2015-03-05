// comments.js
Comments = function(doc) {
	// Parent class object of Comment
	_.extend(this, doc);
};

_.extend(Comments.prototype, {});

Comments = new Mongo.Collection('comments');

Comments.attachSchema(new SimpleSchema({
	applicantId: {
		type: String,
		label: "Applicant Id",
		max: 300,
		autoform: {
			omit: true
		}
	},
	commenterId: {
		type: String,
		label: 'Commenter Id',
		max: 300,
		autoform: {
			omit: true
		},
		autoValue: function() {
			if (this.isInsert && Meteor.user()) {
				return Meteor.userId()
			} else{
				this.unset();
			}
		}
	},
	comment: {
		type: String,
		label: "Comment",
		max: 300
	},
	createdAt: {
		type: Date,
		autoform: {
			omit: true
		},
		autoValue: function() {
			if (this.isInsert) {
				return new Date;
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date};
			} else {
				this.unset();
			}
		}
	}
}))
