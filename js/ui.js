import Api from './api.js'

class Ui {
    
    static renderToDOM(data){
        const list = document.querySelector('.list');

        // if data is an array, it comes from json:
        if(data.length > 1){
            for(let i=0; i<data.length; i++){

                list.innerHTML += `<li class="list-item">
                                <div class="task">
                                    <input type="checkbox" class="check">
                                    <span class="task-text">${data[i].name}</span>
                                </div>
                                <button class="btn delete-btn"><i class="fas fa-trash-alt"></i></button>
                            </li>`     
            }

        // if the data comes from user input:
        } else if(data.name != '') { // also check so user input is not empty
            list.innerHTML += `
                <li class="list-item">
                    <div class="task">
                        <input type="checkbox" class="check">
                        <span class="task-text">${data.name}</span>
                    </div>
                    <button class="btn delete-btn"><i class="fas fa-trash-alt"></i></button>
                </li>`
        }

        // adds event listeners to all delete-buttons
        document.querySelectorAll('.delete-btn').forEach(element => element.addEventListener('click', Ui.deleteItem));
        // adds event listeners to all checkboxes
        document.querySelectorAll('.check').forEach(element => element.addEventListener('click', Ui.toggleDone));
    }

    static deleteItem(element){ // 'element' is i-element
        const list = document.querySelector('.list');
        const li = element.target.parentNode.parentNode;
        list.removeChild(li);
    }

    static toggleDone(element){
        const li = element.target.parentNode.parentNode;
        li.classList.toggle('done');
    }
}

export default Ui