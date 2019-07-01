import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import PortfolioList from './PortfolioList';
import PortfolioListFilter from './PortfolioListFilter'


const Portfolio = (props) => {
    // console.log(props)
    return (
        <div>
            <Header />
            This is the Porfolio Page.
             <div>
                <PortfolioListFilter />
                <PortfolioList />
            </div>
        </div>
    )
}

export default Portfolio;

