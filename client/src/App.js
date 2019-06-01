import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const MainPage = () => (
    <div>
        This is the Main page.
    </div>
)

const Portfolio = () => (
    <div>
        This is the Porfolio Page.
    </div>
)

const Blog = () => (
    <div>
        This is the Blog page.
    </div>
)

const Contact = () => (
    <div>
        This is the Contact page.
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' exact component={MainPage} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/contact' exact component={Contact} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
