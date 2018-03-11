shopApp.controller('loginCtrl', function($scope, login) {
    
    login.getUsername(function(res) {
        const arr = res.data;
        $scope.keys = Object.keys(arr[0]);
        $scope.customers = (res.data);
    }, function(res) {});
  
});
