import Header from './components/Header';

import './scss/app.scss';

const app = () => {
    document.getElementById('header').innerHTML = Header();
}

app();