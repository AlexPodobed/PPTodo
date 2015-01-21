'use strict';

angular.module('todoappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todo', {
        url: '/',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoCtrl'
      });
  });
