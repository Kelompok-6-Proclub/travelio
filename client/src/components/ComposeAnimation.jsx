import React from "react";
import Lottie from 'react-lottie';
import compose from '../icon/compose.json';

const ComposeAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: compose,
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

export default ComposeAnimation