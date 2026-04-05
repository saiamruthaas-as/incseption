import React, { useState, useEffect } from 'react';
import StatsCard from './StatsCard';

const HomePage = ({ onVerifyClick }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real scenario, this fetches from the local backend API
    // If the backend is running locally, it would be:
    // fetch('http://localhost:3000/api/public/stats')
    
    // For standalone testing without backend, provide fallback data
    fetch('http://localhost:3000/api/public/stats')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Using fallback data since backend isn't reachable: ", err.message);
        setStats({
          verified_count: 2450000,
          total_ngos: 1240,
          funds_disbursed: 1250000000,
          success_rate: 99.8
        });
        setLoading(false);
      });
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  const formatCurrency = (num) => {
    // Rupee symbol requirement
    const formatted = formatNumber(num);
    return `₹${formatted}`;
  };

  return (
    <div>
      <section className="hero">
        <h1>Digital Beneficiary Identification for GIA</h1>
        <p>Targeted support under PM-AJAY. Ensuring transparency, reducing exclusion errors, and accelerating fund disbursement through smart data verification.</p>
        <button className="cta-btn" onClick={onVerifyClick}>Verify Beneficiary Status</button>
      </section>

      <section className="stats-grid">
        {loading ? (
          <div>Loading Dashboard Data...</div>
        ) : (
          <>
            <StatsCard 
              title="Verified Beneficiaries" 
              value={formatNumber(stats.verified_count)} 
              variant="default"
            />
            <StatsCard 
              title="Implementing Agencies (NGOs)" 
              value={stats.total_ngos} 
              variant="blue"
            />
            <StatsCard 
              title="Total Grants Disbursed" 
              value={formatCurrency(stats.funds_disbursed)} 
              variant="green"
            />
            <StatsCard 
              title="AI Success Validation" 
              value={`${stats.success_rate}%`} 
              variant="default"
            />
          </>
        )}
      </section>
      
      <section className="map-section">
        <h2>Nationwide Impact Overview</h2>
        <div className="mock-map">
          [ Interactive Map Visualization Loading... ]
        </div>
      </section>
    </div>
  );
};

export default HomePage;
