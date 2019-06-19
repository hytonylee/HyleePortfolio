import React from 'react';
import PortfolioList from './PortfolioList';
import PortfolioListFilter from './PortfolioListFilter'


const Dashboard = () => (
    <div>
        <PortfolioListFilter />
        <PortfolioList />
    </div>
)

export default Dashboard;