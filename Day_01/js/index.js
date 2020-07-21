 

//console.log('Hello World');

const root = document.querySelector('#root')

function newElement(tag, content) {
    const title = `<${tag}>${content}</${tag}>`

    root.insertAdjacentHTML('beforeend', title)
}

newElement('h1', 'Hello!')
newElement('h4', 'World!')