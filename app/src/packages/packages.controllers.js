/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var ntPackagesControllers = angular.module('nt.packages.controllers', []);

    ntPackagesControllers.controller('packagesController', ['$scope','$window',function ($scope,$window) {

    //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
    $scope.selectedMenuItem = "PACKAGES";
    $scope.pageData = "Hello PACKAGES";
    console.log("hello");


    }]);


})(window, window.angular);