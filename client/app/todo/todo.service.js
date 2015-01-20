'use strict';

angular.module('todoappApp')
  .factory('TodoService',['$resource', function ($resource) {
    return $resource('/api/todos/:todoID', {todoID: '@todoID'}, {
      update: {
        method: 'PUT',
        params: {
          todoID: "@todoID"
        }
      }
    })
  }]);
