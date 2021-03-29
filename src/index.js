import './styles/main.css';
import './styles/responsive.css';

const buttonElement = document.querySelector('#menu')
const drawerElement = document.querySelector('#drawer')

buttonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open')
    event.stopPropagation()
})