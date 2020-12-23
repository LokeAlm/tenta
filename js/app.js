import Api from './api.js'
import Ui from './ui.js'


const taskInput = document.querySelector('.add-btn');
    taskInput.addEventListener('click', function(e){
        e.preventDefault();
        let taskName = document.querySelector('.todo-input');
        let text = taskName.value; 
        const task = new Task(text);
        Ui.renderToDOM(task);
        taskName.value = '';
    });

    
(function getTasks(){
    new Api();
}())



class Task {
    constructor(taskName){
        this.name = taskName;
    }  
}