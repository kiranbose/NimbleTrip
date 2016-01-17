/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var ntServicesControllers = angular.module('nt.services.controllers', []);

    ntServicesControllers.controller('servicesController', ['$scope','$window',function ($scope,$window) {

    //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
    $scope.selectedMenuItem = "services";
    $scope.pageData = "Hello services";
    console.log("services");


    }]);


})(window, window.angular);