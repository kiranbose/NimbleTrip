/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var ntAboutControllers = angular.module('nt.about.controllers', []);

    ntAboutControllers.controller('aboutController', ['$scope','$window',function ($scope,$window) {

    //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
    $scope.selectedMenuItem = "CONTACTS";
    $scope.pageData = "Hello CONTACTS";
    console.log("hello");


    }]);


})(window, window.angular);