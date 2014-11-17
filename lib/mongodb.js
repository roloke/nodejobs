var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodejobs');

mongoose.connection.on('connected', function () {
  console.log('MOngodb connection open to ' + 'mongodb://localhost/jobs');
});

mongoose.connection.on('error',function (err) {
  console.log('MOngodb connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('MOngodb connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('MOngodb connection disconnected through app termination');
    process.exit(0);
  });
});