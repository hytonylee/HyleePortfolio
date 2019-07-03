import React from 'react';
import PublicHeader from './PublicHeader'
import PortfolioList from './PortfolioList';
import PortfolioListFilter from './PortfolioListFilter'


const Portfolio = () => {
    return (
        <div>
            <PublicHeader />
            This is the Porfolio Page.
             <div>
                <PortfolioListFilter />
                <PortfolioList />
            </div>
        </div>
    )
}

export default Portfolio;

