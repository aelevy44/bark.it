(function () {
    "use strict";

    angular
        .module('dogs')
        .controller('dogsCtrl', ['$scope', 'dogsSvc', '$location', '$routeParams', function ($scope, dogsSvc, $location, $routeParams) {
            dogsSvc.getdogs().success(function (dogs) {
                $scope.dogs = dogs;
            });

            dogsSvc.getDog($routeParams.dogId).success(function (dog) {
                $scope.dog = dog;
            });

            $scope.createDog = function (newDog) {
                dogsSvc.createdog(newdog);
                $location.path('/dogs');
            };

            $scope.editDog = function (dog) {
                dogsSvc.editDog(dog);
                $location.path('/dogs');
            };

            $scope.deleteDog = function (id) {
                dogsSvc.deleteDog(id);
                $location.path('/dogs');
            }


        }]);
})();
