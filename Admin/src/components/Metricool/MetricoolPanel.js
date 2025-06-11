/*const MetricoolPanel = ({ loginToken }) => {
  const loginUrl = `https://app.metricool.com/autoin/KHDLAUEHUOLAKQCIJJXW`;

  return (
    <iframe
      src={loginUrl}
      style={{ width: '100%', height: '90vh', border: 'none'}}
      title="Metricool White Label"
    />
  );
};

export default MetricoolPanel;*/


import { useEffect } from 'react';

const MetricoolPanel = ({ loginToken }) => {
  useEffect(() => {
    const loginUrl = `https://app.metricool.com/autoin/KHDLAUEHUOLAKQCIJJXW`;
    window.open(loginUrl, '_blank');
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Redirigiendo a Metricool...</h2>
      <p>Si no se abre automáticamente, <a href="https://app.metricool.com/autoin/KHDLAUEHUOLAKQCIJJXW" target="_blank" rel="noopener noreferrer">haz clic aquí</a>.</p>
    </div>
  );
};

export default MetricoolPanel;

