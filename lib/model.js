var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
	jobid : {type:String, unique:true},
	companyName : String,
	title : String,
	location : String,
	responsibility : String,
	expmin : Number,
	expmax : Number,
	education : String,
	datePosted : String,
	tags : [String]
});

var JobModel = mongoose.model('nodejobs', jobSchema);

exports.JobModel = JobModel;

