import Ui from './ui.js'

class Api {
    constructor(){
        fetch('./js/data.json')
        .then(response => response.json())
        .then(data => Ui.renderToDOM(data.task));
    }

    postJson(){
        const data = this.name;

        fetch('./js/data.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response =>response.json())
        .then(data => console.log('sucess:', data))
        .catch(error => console.error('Error:', error))
    }
}

export default Api