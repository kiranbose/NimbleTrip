/**
 * Created by kiran on 1/17/2016.
 */

(function (window, angular, undefined) {
    "use strict";
    var ntHomeControllers = angular.module('nt.home.controllers', []);

    ntHomeControllers.controller('homeController', ['$scope','$rootScope','$window',function ($scope,$rootScope,$window) {

        //angular.element(document.querySelector( '#selectedMenu' )).html('EVENTS');
        $scope.selectedMenuItem = "HOME";
        $scope.pageData = "Hello HOME";
        console.log("hello");

        $scope.bestOffers = [{offerName:'Kerala',imgSrc:'images/red.jpg','cost':'$1000',stay:'1night 2 days'},
            {offerName:'Mysore',imgSrc:'images/purple.jpg','cost':'$1000',stay:'1night 2 days'},
            {offerName:'Ooty',imgSrc:'images/blue.jpg','cost':'$1000',stay:'1night 2 days'}];

        $scope.ourServices = [{serviceName:'Flights',icon:'flight',text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
            {serviceName:'Hotels',icon:'directions_bus',text:'majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable'},
            {serviceName:'Holidays',icon:'explore',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {serviceName:'Travel Insurances ',icon:'card_travel',text:'majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable'},
            {serviceName:'Visa Assistance',icon:'credit_card',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {serviceName:'Cruises',icon:'directions_boat',text:'majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable'}];
    }]);


})(window, window.angular);