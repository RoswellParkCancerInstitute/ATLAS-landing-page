'use strict';

/**
 * @ngdoc function
 * @name appinstallendpointApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appinstallendpointApp
 */
angular.module('appinstallendpointApp')
  .controller('MainCtrl', function ($scope,Ref, $firebaseArray) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.clicks = $firebaseArray(Ref.child('clicks'));
    $scope.views = $firebaseArray(Ref.child('views'));
    $scope.registrations = $firebaseArray(Ref.child('registrations'));

    $scope.recordView = function(){
      $scope.views.$add({
        userAgent:navigator.userAgent,
        timeStamp:new Date().getTime()
      }).then(function(){
        console.log('Saved View');
      },function(error){
        console.log('Save View Error', error);
      });
    };

    $scope.recordClick = function(osType,appName){
      $scope.clicks.$add({
        osType:osType,
        appName:appName,
        timeStamp:new Date().getTime()
      }).then(function(){
        console.log('Saved Click');
      },function(error){
        console.log('Save Click Error', error);
      });
    };

    $scope.registerEmail = function(appName){
      $scope.registrations.$add({
        appName:appName,
        osType:$scope.userEmail,
        timeStamp:new Date().getTime()
      }).then(function(){
        console.log('Saved Email');
      },function(error){
        console.log('Save Email Error', error);
      });
    };

  });
