import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

const MetricoolPanel = () => {
  const [iframe, setIframe] = useState("");
  const [loading, setLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const fetchIframe = async () => {
      const { data, error: userError } = await supabase.auth.getUser();

      if (userError || !data?.user) {
        console.error("Error obteniendo el usuario:", userError);
        setLoading(false);
        return;
      }

      const userId = data.user.id;

      const { data: userData, error } = await supabase
        .from("users_data")
        .select("metricoolIframe")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error obteniendo el iframe:", error);
        setLoading(false);
        return;
      }

      setIframe(userData.metricoolIframe);
      setLoading(false);
    };

    fetchIframe();
  }, []);

  if (loading) {
    return (
      <div style={{
        height: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h5>Cargando estadísticas personalizadas...</h5>
      </div>
    );
  }

  if (!iframe || iframeError) {
    return (
      <div style={{
        height: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h5>No se pudo cargar tu panel personalizado.</h5>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '70px', // Ajusta este valor según el alto real de tu header
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1
    }}>
      <iframe
        src={iframe}
        title="Estadísticas Metricool"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        onError={() => setIframeError(true)}
      />
    </div>
  );
};

export default MetricoolPanel;
