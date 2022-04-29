import React from "react";
import Lottie from 'react-lottie';
import pin from '../icon/pin.json';

const PinAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: pin,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className="lottie">
            <Lottie 
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
            />
        </div>
    )
    }

export default PinAnimation