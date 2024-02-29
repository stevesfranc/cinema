

   const user = function(req, res, next) {
     return res.send('Hello');
   };

   const userAll = function(req, res, next) {
    return res.send('Hello All');
  };

  module.exports = {
    user,
    userAll
  }