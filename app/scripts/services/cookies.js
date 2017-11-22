(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: '/templates/username_modal.html',
        controller: 'ModalCtrl as modal'
      });
    }
  };

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
