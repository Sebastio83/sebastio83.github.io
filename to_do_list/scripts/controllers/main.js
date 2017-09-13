'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.addTodo = function() {
    var todo = {name: "New Item (click to edit)"};
    $scope.todos.unshift(todo);
  };
  
  $scope.toDo = dataService.toDo;
  
  dataService.getTodos(function(response) { 
      console.log(response.data);  
      $scope.todos = response.data;
    });
  
  $scope.deleteTodo = function(todo, $index) {
  dataService.deleteTodo(todo);
  $scope.todos = $scope.todos.filter(function(val) {
    return !(val.name === todo.name);
  });
};
  
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        todo.edited = false;
        return todo;
      }
    })
    dataService.saveTodos(filteredTodos);
  };
})