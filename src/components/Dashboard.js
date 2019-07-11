import React from 'react';
import PortfolioList from './PortfolioList';
import PortfolioListFilter from './PortfolioListFilter'


const Dashboard = () => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h3 className="page-header__title">Dashboard</h3>
            </div>
        </div>
        <PortfolioListFilter />
        <PortfolioList />
    </div>
)

export default Dashboard;