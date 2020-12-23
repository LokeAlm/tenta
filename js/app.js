import Api from './api.js'
import Ui from './ui.js'

/* runs when the page has loaded. gets tasks from json-file and adds event listener to taskInput */    
(function getTasks(){

    const taskInput = document.querySelector('.add-btn');
    taskInput.addEventListener('click', function(e){
        e.preventDefault();
        let taskName = document.querySelector('.todo-input');
        let text = taskName.value; 
        const task = new Task(text);
        Ui.renderToDOM(task); // send new instance of Task to method in Ui
        taskName.value = ''; // empty input field
    });

    new Api();
}())


// class for constructing Task-objects
class Task {
    constructor(taskName){
        this.name = taskName;
    }  
}