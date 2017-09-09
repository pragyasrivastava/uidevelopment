var todos = [];
var input = prompt("what would you like to do?");
while(input!=="quit")
{
  if(input==="list"){
  console.log("***************");
  todos.forEach(function (todo, i)
  {
    console.log(i+ ":  "+ todo);
  });
  console.log("****************");
}
else if (input==="new"){
  var newTodo= prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added Todo");
}
else if (input==="delete"){
  var index= prompt("Enter the index of the todo to delete")
  todos.splice(index,1);
  console.log("Deleted Todo");
}
 var input= prompt("what would you like to do?")
}
console.log("ok,You quit the app");
