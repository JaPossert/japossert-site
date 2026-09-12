import { useEffect } from 'react';
import kmeetThumbnail from '@/assets/jakob-thumbnail.png';

const KmeetRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://kmeet.infomaniak.com/qpwbudpfrcywxzod';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center">
        <img
          src={kmeetThumbnail}
          alt="kMeet Meeting"
          className="w-24 h-24 mx-auto mb-4 rounded-lg shadow-elegant"
        />
        <p className="text-cosmic text-lg">Redirecting to kMeet meeting...</p>
      </div>
    </div>
  );
};

export default KmeetRedirect;
