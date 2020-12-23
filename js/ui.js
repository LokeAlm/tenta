import Api from './api.js'

class Ui {
    
    static renderToDOM(data){
        const list = document.querySelector('.list');
        console.log(data)

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
        } else {
            list.innerHTML += `
                <li class="list-item">
                    <div class="task">
                        <input type="checkbox" class="check">
                        <span class="task-text">${data.name}</span>
                    </div>
                    <button class="btn delete-btn"><i class="fas fa-trash-alt"></i></button>
                </li>`
        }
    }
}

export default Ui