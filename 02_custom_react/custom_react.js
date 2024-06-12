
const maincontainer = document.querySelector('#root');

const reactElement = {
    type : 'a',
    props : {

        href : 'https://www.google.com',
        target : '_blank'
    },
    childern : 'Click Here to Go Google'
}

objectrender(reactElement,maincontainer);

/*
function objectrender(reactElement,container)
{
    const dom = document.createElement(reactElement.type);
    dom.innerHTML = reactElement.childern;
    dom.setAttribute('href',reactElement.props.href);
    dom.setAttribute('target',reactElement.props.target);

    container.append(dom)
} */

function objectrender(reactElement,container)
{
    const dom = document.createElement(reactElement.type);
    dom.innerHTML = reactElement.childern;
    for (const prop in reactElement.props) {
       dom.setAttribute(prop,reactElement.props[prop])
    }

    container.append(dom)
}