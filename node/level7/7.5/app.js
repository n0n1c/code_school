var redis = require('redis');
var client = redis.createClient();
client.lrange('questions',0 ,-1, function(error, question) {
  console.log(question);
});      
