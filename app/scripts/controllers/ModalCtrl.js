(function(){
  function ModalCtrl($uibModalInstance, Room) {
    var modal = this;

    modal.submit = function() {
      Room.add(modal.room.name)
      $uibModalInstance.close();
    };

    modal.cancel = function(){
      $uibModalInstance.dismiss();
    };
};

angular
  .module('blocChat')
  .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
