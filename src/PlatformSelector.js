import React from 'react';
import tikTokImage from './tiktok.svg'; // Ensure this path is correct
import youtubeImage from './youtube.svg'; // Ensure this path is correct and adjust if you have a different image for YouTube
function PlatformSelector({selectedPlatforms, onPlatformToggle}) {
    return (
        <div className="div-block">
            {['TikTok', 'YouTube'].map(platform => (
                <div
                    key={platform}
                    className={`link-block w-inline-block ${selectedPlatforms[platform] ? 'selected' : ''}`}
                    onClick={() => onPlatformToggle(platform)}
                    role="button"
                    tabIndex="0"
                >
                    <img src={platform === 'TikTok' ? tikTokImage : youtubeImage} loading="lazy" alt={platform}
                         className="image -mt-96"/>
                    <h5 className="text-white">{platform}</h5>
                </div>
            ))}
        </div>
    );
}

export default PlatformSelector;
