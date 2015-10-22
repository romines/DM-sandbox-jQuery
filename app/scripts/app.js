$(document).ready(function(){

  $('#newTaskForm').hide();

  var listo = [];

  var Task = function(task) {
    this.task = task;
    this.id = "new";
  };



  $('#newListItem').on('click', function(){
    $('#newListItem').fadeToggle('fast','linear', function(){
      $('#newTaskForm').fadeToggle('fast','linear');
    });
    $("#newItemInput").focus();
  });

  $('#cancel').on('click', function(e){
    console.log('cancel was clicked');
    e.preventDefault();
    $('#newTaskForm').fadeToggle('fast','linear', function(){
      $('#newListItem').fadeToggle('fast','linear');
    });
  });

  $('#saveNewItem').on('click', function(e){
    e.preventDefault();
    var task = $('#newItemInput').val().trim();
    addTask(task);
  });


  var addTask = function(task) {
    if (task){
      task = new Task(task);
      listo.push(task);

      $("#newItemInput").val("");
      $('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');

    }
    $('#newTaskForm').fadeToggle('fast','linear', function(){
      $('#newListItem').fadeToggle('fast','linear');
    });
  };

});
