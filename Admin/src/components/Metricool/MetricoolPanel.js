/*const MetricoolPanel = ({ loginToken }) => {
  const loginUrl = `https://app.metricool.com/autoin/KHDLAUEHUOLAKQCIJJXW`;

  return (
    <iframe
      src={loginUrl}
      style={{ width: '100%', height: '100vh', border: 'none'}}
      title="Metricool White Label"
    />
  );
};

export default MetricoolPanel;*/


const MetricoolPanel = ({ loginToken }) => {
  const loginUrl = `https://app.metricool.com/autoin/KHDLAUEHUOLAKQCIJJXW`;

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Ir al panel completo de Metricool</h2>
      <a
        href={loginUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '10px 20px',
          backgroundColor: '#4A90E2',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Abrir Metricool
      </a>
    </div>
  );
};

