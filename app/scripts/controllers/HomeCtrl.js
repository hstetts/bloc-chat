(function() {
    function HomeCtrl(Room, $scope) {
      this.rooms = Room.all;
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();
