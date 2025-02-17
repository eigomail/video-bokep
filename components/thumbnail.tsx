"use client";

import Image from "next/image";
import { useState } from "react";

const ImageLoader = ({ src, width, quality }: any) => {
    return `${src}&w=320&q=${
        quality || 80
    }`;
};

const Thumbnail = ({
    thumbnail,
    title,
}: {
    thumbnail: string;
    title: string;
}) => {
    const [imageIndex, setImageIndex] = useState(0);
    const image = [thumbnail, "https://iili.io/J5ahFSa.png"];

    const handleImageError = () => {
        if (imageIndex === image.length - 1) return;
        setImageIndex(imageIndex + 1);
    };

    return (
        <Image
            className="!w-full !h-[110px] md:!h-[150px] lg:!h-[180px] object-cover rounded-none md:rounded-t-md"
            alt={title}
            src={image[imageIndex]}
            loader={ImageLoader}
            width={320}
            height={180}
            quality={100}
            onError={handleImageError}
            priority
        />
    );
};

export default Thumbnail;
