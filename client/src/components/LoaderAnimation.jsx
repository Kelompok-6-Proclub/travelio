import React from "react";
import Lottie from 'react-lottie';
import loader from '../icon/loader.json';

const LoaderAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loader,
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

export default LoaderAnimation