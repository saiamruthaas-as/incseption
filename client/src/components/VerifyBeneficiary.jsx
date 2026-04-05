import React, { useState } from 'react';

const VerifyBeneficiary = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    // Simulate an API call to verify beneficiary via Aadhar
    setTimeout(() => {
      setLoading(false);
      if (aadhaar.length === 12) {
        setResult({
          status: 'success',
          message: 'Beneficiary Verified.',
          data: {
            name: 'Priya Sharma',
            scheme: 'PM-AJAY GIA',
            disbursed: '₹12,500',
            status: 'Active'
          }
        });
      } else {
        setResult({
          status: 'error',
          message: 'Invalid Aadhar format. Must be 12 digits.'
        });
      }
    }, 1500);
  };

  return (
    <div className="form-container">
      <h2>Verify Beneficiary Identity</h2>
      <p style={{marginBottom: "1.5rem", color: "#555"}}>Enter 12-digit Aadhaar number to verify beneficiary allocation status under GIA.</p>
      
      <form onSubmit={handleVerify} className="auth-form">
        <label>
          Aadhaar Number
          <input 
            type="text" 
            value={aadhaar} 
            onChange={e => setAadhaar(e.target.value.replace(/\D/g, '').slice(0, 12))}
            placeholder="e.g. 123456789012" 
            required 
            maxLength={12}
          />
        </label>
        <button type="submit" className="cta-btn" disabled={loading}>
          {loading ? 'Verifying in DB...' : 'Verify Now'}
        </button>
      </form>

      {result && (
        <div className={`verification-result ${result.status}`}>
          <h3>{result.message}</h3>
          {result.status === 'success' && (
            <div className="result-details">
              <p><strong>Name:</strong> {result.data.name}</p>
              <p><strong>Scheme:</strong> {result.data.scheme}</p>
              <p><strong>Amount:</strong> {result.data.disbursed}</p>
              <p><strong>Status:</strong> <span className="status-badge">{result.data.status}</span></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VerifyBeneficiary;
