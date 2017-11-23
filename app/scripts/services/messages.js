(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

/* get roomId from firebase message object */

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(newMessage) {
      messages.$add(newMessage);
    };

  return Message;
}

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
