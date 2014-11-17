var validator = require('validator');
var Model = require('./model');


var routes = {
 
  getJob: function (req,res,next){

    var id = req.params.id;
    if(!(id && validator.isNumeric(id))) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Invalid job id format !!!\n');
    }
    var query = Model.JobModel.find({}).select('jobid companyName title location responsibility expmin expmax education datePosted');
    query.where('jobid', req.params.id);
    query.exec(function(err, result) {
    if(err){
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error!!!\n');
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
    });
  },
 
  savePosting: function (req,res,next) {
      var data = req.params;
      var jobModel = new Model.JobModel(data);
      Model.JobModel.where('jobid', data.jobid).findOneAndUpdate(data).setOptions({upsert:true}).exec(function(err,regModel){
        if(err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Error!!!\n');
        }
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('job saved\n');
      });
  }
};

module.exports = routes;