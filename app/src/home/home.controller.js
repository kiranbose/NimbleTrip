/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var ntHomeControllers = angular.module('nt.home.controllers', []);

    ntHomeControllers.controller('homeController', ['$scope','$window',function ($scope,$window) {

        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $scope.selectedMenuItem = "HOME";
        $scope.pageData = "Hello HOME";
        console.log("hello");


    }]);


})(window, window.angular);