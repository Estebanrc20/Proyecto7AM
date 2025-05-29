const MetricoolPanel = ({ loginToken }) => {
  const loginUrl = `https://app.metricool.com/autoin/KHDLAUEHUOLAKQCIJJXW`;

  return (
    <iframe
      src={loginUrl}
      style={{ width: '90%', height: '90vh', border: 'none'}}
      title="Metricool White Label"
    />
  );
};

export default MetricoolPanel;