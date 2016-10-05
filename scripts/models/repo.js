(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    // DONE: TODO: refactor this request into an $.ajax call
    $.ajax({
      url: '/github/users/codefellows-portland-301d6/repos' +
      '?per_page=10&sort=updated',
      success: function (data) {
        reposObj.allRepos = data;
        callback();
      },
      error: function (xhr, settings, error) {
        console.log('Server returned an error: ', error);
      }
    });
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
