(function(){
  function ModalCtrl($uibModalInstance, $cookies, Room) {
    var modal = this;

    modal.submitRoom = function() {
      Room.add(modal.room.name)
      $uibModalInstance.close();
    };

    modal.cancel = function(){
      $uibModalInstance.dismiss();
    };

    modal.submitUserName = function(){
      var name = modal.user.name;
      $cookies.put('blocChatCurrentUser', name);
      $uibModalInstance.close();
      //need to write a function that adds the name to firebase
      //and pass it name
    };
};

angular
  .module('blocChat')
  .controller('ModalCtrl', ['$uibModalInstance', '$cookies', 'Room', ModalCtrl]);
})();
