(function() {
    function HomeCtrl(Room, $uibModal, $scope) {
      this.rooms = Room.all;
      this.currentRoom = null;

      this.setRoom = function(room) {
        this.currentRoom = room.getByRoomId(this.currentRoom.$id);
      };

      this.addRoom = function(){
          $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/new_room_modal.html',
          controller: 'ModalCtrl as modal'
      })
    };
  }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', HomeCtrl]);
})();
