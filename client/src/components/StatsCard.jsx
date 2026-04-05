import React from 'react';

const StatsCard = ({ title, value, variant = 'default' }) => {
  return (
    <div className={`stat-card ${variant}-accent`}>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
};

export default StatsCard;
