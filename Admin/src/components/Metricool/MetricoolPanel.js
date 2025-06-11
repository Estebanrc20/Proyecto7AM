/*import React from 'react';
import { FaSearch, FaComments, FaCalendarAlt, FaLink, FaBullhorn } from 'react-icons/fa';

const MetricoolPanel = ({ loginToken }) => {
  const loginUrl = `https://app.metricool.com/autoin/KHDLAUEHUOLAKQCIJJXW`;

  return (
    <div style={{ backgroundColor: '#1e1e1e', color: '#fff', height: '100vh' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#1e1e1e',
        borderBottom: '1px solid #333'
      }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <FaSearch style={{ cursor: 'pointer' }} />
          <FaComments style={{ cursor: 'pointer' }} />
          <FaCalendarAlt style={{ cursor: 'pointer' }} />
          <FaLink style={{ cursor: 'pointer' }} />
          <FaBullhorn style={{ cursor: 'pointer' }} />
        </div>
        <img
          src="https://app.metricool.com/favicon.ico" // Cambia por el logo que necesites
          alt="Logo"
          style={{ height: '30px', opacity: 0.5 }}
        />
      </div>

      <iframe
        src={loginUrl}
        style={{ width: '100%', height: 'calc(100vh - 50px)', border: 'none' }}
        title="Metricool White Label"
      />
    </div>
  );
};

export default MetricoolPanel;*/

const MetricoolPanel = ({ loginToken }) => {
  const loginUrl = `https://app.metricool.com/autoin/KHDLAUEHUOLAKQCIJJXW`;

  return (
    <iframe
      src={loginUrl}
      style={{ width: '100%', height: '90vh', border: 'none'}}
      title="Metricool White Label"
    />
  );
};

export default MetricoolPanel;