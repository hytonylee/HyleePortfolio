import React from 'react';
import PublicHeader from './PublicHeader'
import PortfolioList from './PortfolioList';
import PortfolioListFilter from './PortfolioListFilter'


const Portfolio = () => {
    return (
        <div>
            <PublicHeader />
            <div className="page-header">
                {/* <div className="content-container">
                    <h3 className="page-header__title">Portfolio</h3>
                </div> */}
            </div>
            <div>
                {/* <PortfolioListFilter /> */}
                <PortfolioList />
            </div>
        </div>
    )
}

export default Portfolio;

