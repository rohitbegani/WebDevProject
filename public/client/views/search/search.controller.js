/**
 * Created by rohitbegani on 3/12/16.
 */
(function() {
    "use strict";
    angular
        .module("codingTutorial")
        .controller("SearchController", SearchController);

    SearchController.$inject = ['$scope', '$rootScope'];

    function SearchController($scope, $rootScope){
        console.log('in search page');
        $scope.results = $rootScope.results;
        console.log($scope.results);
    }
})();