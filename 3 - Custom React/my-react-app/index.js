let mainContainer = document.getElementById('root')

let reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
};

const renderReactElement = (reactElement, container)=>{
    let myElement = document.createElement(reactElement.type)
    myElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        myElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(myElement)
}

renderReactElement(reactElement, mainContainer)