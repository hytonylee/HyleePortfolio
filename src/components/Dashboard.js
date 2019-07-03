import React from 'react';
import PageHeader from './PageHeader';
import PortfolioList from './PortfolioList';
import PortfolioListFilter from './PortfolioListFilter'


const Dashboard = () => (
    <div>
        <PageHeader />
        <PortfolioListFilter />
        <PortfolioList />
    </div>
)

export default Dashboard;