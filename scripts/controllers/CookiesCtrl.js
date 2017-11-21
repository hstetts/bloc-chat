(function(){
  function CookiesCtrl($uibModalInstance, $cookies) {
    var cookies = this;
    /**
     *'this' refrences the parent object... CookiesCtrl
     *this.setuserName is like saying CookiesCtrl.setUsername
     *it makes CookiesCtrl.setUsername equal to a function which takes in
     *the parameter username.
     */
    cookies.submitUserName = function() {
      console.log("we are getting here");
      $cookies.put('blocChatCurrentUser', username);
      $uibModalInstance.close();
    }
  };

  angular
    .module('blocChat')
    .controller('CookiesCtrl', ['$uibModalInstance', '$cookies', CookiesCtrl]);
})();
