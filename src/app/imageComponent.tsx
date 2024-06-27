import React from "react";
import Image from "next/image";

interface ImageComponentProps {
    src: string | any;
    alt: string;
    description: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
    src,
    alt,
    description,
}) => {
    return (
        <div className="imageContainer">
            <div>
                <Image
                    width={60}
                    height={60}
                    src={src}
                    alt={alt}
                    className="image"
                />
            </div>

            <div className="descriptionBox">
                <div>
                    <div>

                    <Image
                        width={40}
                        height={40}
                        src={src}
                        alt={alt}
                    />
                    </div>
<p className="decription-text">
{description} 

</p>
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;
