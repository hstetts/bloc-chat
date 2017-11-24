(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var item = rooms[2];

    Room.all = rooms;

    Room.add = function(room) {
      Room.all.$add(room);
      var id = ref.key;
      console.log("added record with id " + id);

    Room.remove = function(room) {}
      Room.$remove(room).then(function(ref) {
        ref.key === item.$id;
      })
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
