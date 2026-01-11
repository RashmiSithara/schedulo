let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const form = document.getElementById("taskForm");
if(form){
form.addEventListener("submit", e=>{
e.preventDefault();
tasks.push({title:title.value,category:category.value,deadline:deadline.value});
localStorage.setItem("tasks",JSON.stringify(tasks));
alert("Task Added Successfully");
form.reset();
});
}
