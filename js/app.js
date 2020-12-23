import Api from './api.js'
import Ui from './ui.js'

const taskInput = document.querySelector('.add-btn');
taskInput.addEventListener('click', function(e){
    e.preventDefault();
    let taskName = document.querySelector('.todo-input').value; 
    const task = new Task(taskName);
    Ui.renderToDOM(task);
    Api.postJson(task);
    taskName = '';
});



(function getTasks(){
    new Api();
}())



class Task {
    constructor(taskName){
        this.name = taskName;
    }

    
}