import { useEffect } from 'react';
import zoomThumbnail from '@/assets/jakob-thumbnail.png';

const ZoomRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://bit.ly/japossert_zoom';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center">
        <img 
          src={zoomThumbnail} 
          alt="Zoom Meeting" 
          className="w-24 h-24 mx-auto mb-4 rounded-lg shadow-elegant"
        />
        <p className="text-cosmic text-lg">Redirecting to Zoom meeting...</p>
      </div>
    </div>
  );
};

export default ZoomRedirect;