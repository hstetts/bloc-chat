(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
      this.rooms = Room.all;
      this.selectedRoom = false;
      this.user = $cookies.get('blocChatCurrentUser');

      this.setRoom = function(roomId) {
        this.currentRoom = roomId;
        this.currentMessages = Message.getByRoomId(this.currentRoom.$id);
        this.selectedRoom = true;
        this.user = $cookies.get('blocChatCurrentUser');
      };

      this.addRoom = function(){
          $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/new_room_modal.html',
          controller: 'ModalCtrl as modal'
      })
    };

      this.removeRoom = function(room){

      }

      this.message = function(){
        this.newMessage.username = this.user;
        this.newMessage.roomId = this.currentRoom.$id;
        Message.send(this.newMessage);
        this.newMessage.content = "";
        }
  };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
