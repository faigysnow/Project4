shopApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'Home/home.html'
    })
    .when('/signUp', {
        templateUrl: 'SignUp/signUp.html'
    })
    .when('/store', {
        templateUrl: 'Store/store.html'
    })
    .when('/admin', {
        templateUrl: 'Admin/admin.html'
    })
    .otherwise({ redirectTo: 'home' });
});
// first controller
shopApp.controller('shopController', function($scope, $rootScope, $window, $location, shopService ){
    $scope.mainData = '';
    $scope.
    shopService.getLogin


})

//index controller
App.controller('mainController', function($scope, $rootScope, $window, $location) {
    $scope.mainData = "";
    $scope.isLogedin = $window.sessionStorage.getItem("user");
    $scope.logedin = $window.sessionStorage.getItem("logedin");

    $scEope.$on('logedin', function(event, args) {
        $scope.mainData = args;
        $scope.logedin = true;
        $window.sessionStorage.setItem("logedin", true);

    });

    $scope.logout = function() {
        appService.getData('logout', 'logout', logoutSucsses, logoutError);
    }

    function logoutSucsses(res) {
        console.log(res.data);
        if (res.data === "true") {
            $window.sessionStorage.setItem("logedin", false);
            $scope.isLogedin = false;
            $rootScope.$broadcast('logout', (false));
            $scope.logedin = false;
            // commonData.setData(false, {});


        } else {
            alert("error!");
        }


    }

    function logoutError(res) {
        console.log('error');
    }

});