'use strict';

angular.module('todoappApp')
  .controller('TodoCtrl', ['$scope', 'TodoService', function ($scope, Todo) {

    function resetModel(){
      $scope.formDataModel = {
        text: '',
        done: false
      };
    }

    function cancelEdition(){
      $scope.editMode = false;
      editedTodo.edit = false;
      resetModel();
    }

    resetModel();

    $scope.editMode = false;

    var editedTodo, backupTodoName;

    var todos = Todo.query(function () {
      $scope.todos = todos;
      console.log(todos);
    });

    $scope.markAsDone = function (todo) {
      if(todo.edit) return;

      todo.done = !todo.done;
    };

    $scope.addNewTodo = function () {
      console.log('submitted')

      if($scope.editMode){
        Todo.update({"todoID": editedTodo._id}, {text: editedTodo.text}, function(){
          console.log('edited')
          cancelEdition();
        })
      } else {
        Todo.save($scope.formDataModel, function(todo){
          $scope.formDataModel = {};
          $scope.todos.push(todo);
        });
      }


    };

    $scope.editTodo = function(todo){
      if(todo.done){return }

      $scope.editMode = true;

      $scope.formDataModel = todo;
      if(editedTodo) editedTodo.edit = false;
      todo.edit = true;
      editedTodo = todo;
      backupTodoName = todo.text;
    };

    $scope.cancelEdit = function(){
      editedTodo.text = backupTodoName
      cancelEdition();
    };

    $scope.removeTodo = function(todo){
        var index = todos.indexOf(todo);

        Todo.remove({"todoID": todo._id}, function(){
            console.log('removed');
            $scope.todos.splice(index, 1);

            if($scope.editMode) cancelEdition();
        });
    };

  }]);
