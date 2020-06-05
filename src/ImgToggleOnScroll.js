import React, { useRef, useEffect, useState } from "react";

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    const imgRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInview(isInview())
        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        });
    });
    const [inview, setInview] = useState(false);
    const isInview = () => {
        if(imgRef.current){
            const rect = imgRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
    };
    const scrollHandler = () => {
        setInview(() => {
            return isInview();
        });
    };
    
    return(
        <div>
            <img src={inview ? secondaryImg : primaryImg} alt="" ref={imgRef} style={{width:"100%", height: "100%"}}/>
        </div>
    )
}

export default ImageToggleOnScroll;