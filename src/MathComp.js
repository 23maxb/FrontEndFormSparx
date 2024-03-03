import React, {useState} from 'react';
import Slider from './Slider';
import PlatformSelector from './PlatformSelector';

function MathComponent() {
    const [sliderValue, setSliderValue] = useState(0);
    const [sliderMax, setSliderMax] = useState(100);
    const [selectedPlatforms, setSelectedPlatforms] = useState({
        TikTok: false,
        YouTube: false,
    });

    // Function to update slider value from SliderBar
    const handleSliderChange = (value) => {
        setSliderValue(value);
    };

    // Function to update platform selection from PlatformSelector
    const handlePlatformSelection = (platform) => {
        const updatedPlatforms = {
            ...selectedPlatforms,
            [platform]: !selectedPlatforms[platform],
        };

        setSelectedPlatforms(updatedPlatforms);

        let i = 1;
        if (updatedPlatforms.TikTok && updatedPlatforms.YouTube) i = 2;
        setSliderMax(i * 100);
        if (i * 100 < sliderValue) setSliderValue(i * 100);

    };
    // Compute a value based on slider and platform selections
    const computeValue = () => {
        let value = sliderValue;
        let mul = 0;
        if (selectedPlatforms.TikTok) mul++; // Example computation
        if (selectedPlatforms.YouTube) mul++; // Example computation
        if (!(selectedPlatforms.TikTok) && !(selectedPlatforms.YouTube)) return "Please select a platform."
        return "Price: $" + (value * 5 * mul) + ".00";
    };

    return (
        <div>
            <div className="number-of-influencers-div">
                <h2 className="heading-3">Number of Influencers</h2>
                <p className="paragraph-2">Use the slider to select the desired number of influencers for your marketing
                    package.</p>
                <Slider value={sliderValue} onValueChange={handleSliderChange} sliderMax={sliderMax}/>
            </div>
            <div className="platform-selection-div">
                <h2 className="heading-4">Platform Selection</h2>
                <p className="paragraph-2">Choose between TikTok and YouTube as the desired platforms for your
                    influencer marketing campaign.</p>
                <div className="div-block">
                    <PlatformSelector selectedPlatforms={selectedPlatforms} onPlatformToggle={handlePlatformSelection}/>
                </div>
            </div>
            <p>{computeValue()}</p>
        </div>
    );
}

export default MathComponent;
