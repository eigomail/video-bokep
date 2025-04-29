import { Card, CardContent } from "./ui/card";

import { Badge } from "./ui/badge";
import Link from "next/link";
import React from "react";
import Thumbnail from "./thumbnail";

const VideoCard = ({ video }: any) => {
    return (
        <Card className="border-0 rounded-none md:border-[1px] md:rounded-md transform transition duration-200 md:hover:scale-[101%] md:hover:shadow-lg">
            <div className="relative">
                <Link
                    href={`/v/${video.file_code}#${video.title}`}
                    title={`Watch ${video.title}`}
                    target="blank"
                    >
                <Thumbnail
                    thumbnail={video.thumbnail}
                    title={video.title}
                />
                </Link>
            </div>
            <CardContent className="p-1.5"><h3>
                <Link
                    href={`/v/${video.file_code}#${video.title}`}
                    className="line-clamp-2 text-sm md:text-md font-semibold hover:text-primary focus:text-primary"
                    title={`Watch ${video.title}`}
                >
                    {video.title}
                </Link></h3>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
