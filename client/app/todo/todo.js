'use strict';

angular.module('todoappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todo', {
        url: '/todo',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoCtrl'
      });
  });
