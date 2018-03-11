shopApp.service('shopService', function($http) {
    this.sendData = function(path, userParams, onSuccess, onError) {
        $http({
            url: 'http://localhost:3000/' + path,
            method: 'POST',
            data: {
                data: userParams
            }

        }).then(onSuccess, onError);
    }
});



