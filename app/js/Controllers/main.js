/**
 * Created by kiran on 1/16/2016.
 */

(function(window, angular,undefined) {
    "use strict";
// Main
    var ntApp = angular.module('ntApp', ['ui.router',
        'nt.home',
        'nt.services',
        'nt.packages',
        'nt.about'
    ]);
    ntApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/home/views/home.html",
                controller: 'homeController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('nt-margin-left-30');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('nt-margin-left-30');
                }
            })
            .state('services', {
                url: "/services",
                templateUrl: "src/services/views/services.html",
                controller: 'servicesController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('nt-margin-left-40');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('nt-margin-left-40');
                }
            })
            .state('packages', {
                url: "/packages",
                templateUrl: "src/packages/views/packages.html",
                controller: 'packagesController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('nt-margin-left-50');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('nt-margin-left-50');
                }
            })
            .state('about', {
                url: "/about",
                templateUrl: "src/about/views/about.html",
                controller: 'aboutController',
                onEnter: function() {
                    angular.element(document.querySelector( '#floatingline' )).addClass('nt-margin-left-60');
                },
                onExit: function() {
                    angular.element(document.querySelector( '#floatingline' )).removeClass('nt-margin-left-60');
                }
            });

    }]);

})(window, window.angular);

$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 230) {
            $('#nav_bar').addClass('ntnavbar-fixed');
            $('#brand_logo_minimized').removeClass('hidden');

        }
        if ($(window).scrollTop() < 231) {
            $('#nav_bar').removeClass('ntnavbar-fixed');
            $('#brand_logo_minimized').addClass('hidden');
        }
    });


        $('.nav li').on('click', function(){
            var _opened = $('#menuButton').is(':visible');
            if (_opened) {
            $('.btn-navbar').click(); //bootstrap 2.x
            $('.navbar-toggle').click() //bootstrap 3.x
            }
        });



});