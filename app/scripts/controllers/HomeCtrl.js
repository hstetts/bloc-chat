(function() {
    function HomeCtrl(Room, Message, $uibModal, $scope) {
      this.rooms = Room.all;
      this.roomSelected = false;

      this.setRoom = function(roomId) {
        this.currentRoom = roomId;
        this.currentmessages = Message.getByRoomId(this.currentRoom.$id);
        this.roomSelected = true;
      };

      this.addRoom = function(){
          $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/new_room_modal.html',
          controller: 'ModalCtrl as modal'
      });
    };

      this.message = function(){
        this.messages.roomId = this.currentRoom.$id;
          }
  };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$scope', HomeCtrl]);
})();
