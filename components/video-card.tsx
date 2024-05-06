import { Card, CardContent } from "./ui/card";
import { humanDuration, naturalTime } from "@/lib/utils";

import { Badge } from "./ui/badge";
import { CalendarIcon } from "@radix-ui/react-icons";
import LikeButton from "./like-button";
import Link from "next/link";
import React from "react";
import Thumbnail from "./thumbnail";

const VideoCard = ({ video }: any) => {
    return (
        <Card className="border-0 rounded-none md:border-[1px] md:rounded-md transform transition duration-200 md:hover:scale-[101%] md:hover:shadow-lg">
            <div className="relative">
                <Link
                    href={`/v/${video.file_code}`}
                    title={`Watch ${video.title}`}
                    >
                <Thumbnail
                    single_img={video.single_img}
                    splash_img={video.splash_img}
                    title={video.title}
                />
                </Link>
            </div>
            <CardContent className="p-1.5"><h3>
                <Link
                    href={`/v/${video.file_code}`}
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
