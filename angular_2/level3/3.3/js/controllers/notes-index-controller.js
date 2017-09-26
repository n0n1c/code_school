angular.module('NoteWrangler')
.controller('NotesIndexController', ['Note', '$scope', function(Note, $scope) {
  Note.all().success(function(data){
    $scope.notes = data;
  });
}]);
