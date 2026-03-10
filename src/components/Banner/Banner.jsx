import React from 'react';
import './Banner.css';
import vector1 from '../../assets/vector1.png';
import vector2 from '../../assets/vector2.png';

const Banner = () => {
    return (
       <div className="banner-section">
        <div className="banner-inner">

          {/* In-Progress Card */}
          <div className="card banner-card banner-card-progress" style={{ backgroundImage: `url(${vector1}), url(${vector2}), url(${vector1}), linear-gradient(135deg, #6B35D9 0%, #8B5CF6 100%)` }}>
            <div className="card-body items-center justify-center text-center py-10">
              <h2 className="card-title justify-center text-white text-xl">In-Progress</h2>
              <p className="text-5xl text-white mt-2">0</p>
            </div>
          </div>

          {/* Resolved Card */}
          <div className="card banner-card banner-card-resolved" style={{ backgroundImage: `url(${vector1}), url(${vector2}), url(${vector1}), linear-gradient(135deg, #22C55E 0%, #16A34A 100%)` }}>
            <div className="card-body items-center justify-center text-center py-10">
              <h2 className="card-title justify-center text-white text-xl">Resolved</h2>
              <p className="text-5xl text-white mt-2">0</p>
            </div>
          </div>

        </div>
      </div>
    );
};

export default Banner;