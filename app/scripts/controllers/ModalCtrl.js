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
      Room.user = $cookies.get('blocChatCurrentUser');
    };
};

angular
  .module('blocChat')
  .controller('ModalCtrl', ['$uibModalInstance', '$cookies', 'Room', ModalCtrl]);
})();
