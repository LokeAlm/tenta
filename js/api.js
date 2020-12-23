import Ui from './ui.js'

class Api {
    constructor(){
        fetch('./js/data.json')
        .then(response => response.json())
        .then(data => Ui.renderToDOM(data.task));
    }
}
export default Api