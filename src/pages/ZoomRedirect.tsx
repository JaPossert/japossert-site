import { useEffect } from 'react';

const ZoomRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://bit.ly/japossert_zoom';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center">
        <p className="text-cosmic text-lg">Redirecting to Zoom meeting...</p>
      </div>
    </div>
  );
};

export default ZoomRedirect;