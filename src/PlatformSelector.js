import React from 'react';
import tikTokImage from './tiktok.svg'; // Ensure this path is correct
import youtubeImage from './youtube.svg'; // Ensure this path is correct and adjust if you have a different image for YouTube

function PlatformSelector({selectedPlatforms, onPlatformToggle}) {
    return (
        <div className="div-block">
            {['TikTok', 'YouTube'].map(platform => (
                <div
                    key={platform}
                    style='box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
                       transition: box-shadow 0.3s ease-in-out;'
                    className={`${selectedPlatforms[platform] ? 'selected' : ''}`}
                    onClick={() => onPlatformToggle(platform)}
                    role="button"
                    tabIndex="0"
                >
                    <img src={platform === 'TikTok' ? tikTokImage : youtubeImage} loading="lazy" alt={platform}
                         className="image"/>
                    <h5 className="heading-5">{platform}</h5>
                </div>
            ))}
        </div>
    );
}

export default PlatformSelector;
