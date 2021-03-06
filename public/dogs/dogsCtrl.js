(function () {
    "use strict";

    angular
        .module('dogs')
        .controller('dogsCtrl', ['$scope', 'dogsSvc', '$location', '$routeParams', '$rootScope', function ($scope, dogsSvc, $location, $routeParams, $rootScope) {
            dogsSvc.getDogs().success(function (dogs) {
                $scope.dogs = dogs;
            });

            dogsSvc.getDog($routeParams.dogId).success(function (dog) {
                $scope.dog = dog;
            });

           

            $scope.editDog = function (dog) {
                dogsSvc.editDog(dog);
                $location.path('/dogs');
            };

            $scope.deleteDog = function (id) {
                dogsSvc.deleteDog(id);
                $location.path('/dogs');
            };

            $rootScope.$on("dog:added", function (){
             $scope.dogs = dogsSvc.getDogs();
              });





        }]);
})();
