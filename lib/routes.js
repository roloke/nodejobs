var routes = {
 
  getJob: function (req,res,next){
    console.log(req.params.id);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{"jobid":' + req.params.id + ',"desc" : "blogging"}');
  },
 
  savePosting: function (req,res,next) {
    console.log('dummy save operation...');
    console.log(JSON.stringify(req.params));
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{"Saved succesfully"}');

  }
};

module.exports = routes;