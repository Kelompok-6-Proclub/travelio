import React from "react";
import Lottie from 'react-lottie';

const Animation = ({data}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: data,
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

export default Animation