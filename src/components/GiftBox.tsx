import React, { useState, useRef }from "react";

export const GiftBox: React.FC = ({}) => {
    const getMessageFromQueryParams = (): string | null => {
        const queryString = new URLSearchParams(window.location.search);
        const message = queryString.get('msg');
        if (message) {
          try {
            return atob(message);
          } catch (error) {
            console.error("Failed to decode Base64:", error);
            return null;
          }
        }
        return null;
      };

    const handleAnimationEnd = () => {
    if (coverRef.current && getComputedStyle(coverRef.current).opacity === '0') {
            setCoverOpen(false);
        }
    };

    const coverRef = useRef(null);
    const decodedMessage = getMessageFromQueryParams();
    const [isCoverOpen, setCoverOpen] = useState(true);
    const [startAnimation, setStartAnimation] = useState(false);

    return (
        <>
            <div className="
                relative
                px-4
                py-1
                flex 
                justify-center 
                items-center 
                border-solid 
                border-2 
                border-rose-600 
                rounded-3xl 
                bg-rose-400">
                
                {isCoverOpen && (
                    <div 
                        ref={coverRef}
                        className={`
                            absolute 
                            top-0 
                            left-0 
                            w-full 
                            h-full 
                            bg-rose-500
                            rounded-3xl 
                            cursor-pointer
                            z-10
                            transition-opacity duration-500
                            ${startAnimation ? 'animate-slideUpDown opacity-0' : 'opacity-100'}
                        `}
                        onClick={() => setStartAnimation(true)}
                        onAnimationEnd={handleAnimationEnd}
                    >
                        <div className="absolute top-1/2 w-full h-1 bg-white transform -translate-y-1/2"></div>
                        <div className="absolute left-1/2 h-full w-1 bg-white transform -translate-x-1/2"></div>
                    </div>
                )}

                <h1 className="text-white text-center">
                    {decodedMessage}
                </h1>
            </div>
        </>
    )
}