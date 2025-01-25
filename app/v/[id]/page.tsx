import {
    CalendarIcon,
    CubeIcon,
    DownloadIcon,
    LapTimerIcon,
    RocketIcon,
    Share1Icon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { humanDuration, humanSize } from "@/lib/utils";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import CopyButton from "@/components/copy-button";
import LikeButton from "@/components/like-button";
import Link from "next/link";
import MessageBox from "@/components/message-box";
import React from "react";
import { SITENAME } from "@/lib/constants";
import SearchCardList from "@/components/search/search-list";
import doodstream from "@/lib/doodstream";

type PageProps = {
    params: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await doodstream.getFile({ file_code: params.id as string });
     const upstream = await doodstream.getUpstream();
    if (data.status !== 200) {
        return {
            title: data.msg,
            description: "Something went wrong. Please try again later.",
        };
    }

    const file = data.result[0];
    const title = `${file.title} - ${SITENAME}`;
    const description = `${file.title} di ${SITENAME} Video Bokep Indo Jepang Barat Terbaru bocil jilbab smp mama sma hijab abg colmek film tante hot`;
    const image = file.splash_img;
    const previousOgImages = (await parent).openGraph?.images || [];
    const previousTwImages = (await parent).twitter?.images || [];

    return {
        title,
        description,
        twitter: {
            title,
            description,
            images: [...previousTwImages, image],
        },
        openGraph: {
            title,
            description,
            images: [...previousOgImages, image],
            url: `/v/${file.filecode}`,
            type: `article`,
        },
        alternates: {
            canonical: `/v/${file.filecode}`,
        },
    };
}

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });
    const upstream = await doodstream.getUpstream();

    if (data.status !== 200) {
        return (
            <MessageBox title={data.msg} countdown={30} variant="error">
                <p className="text-center">
                    Something went wrong. Please try again later.
                </p>
            </MessageBox>
        );
    }

    const file = data.result[0];
        const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${file.title} - ${SITENAME}`,
        image: file.splash_img,
        description: `${file.title} di ${SITENAME} Video Bokep Indo Jepang Barat Terbaru bocil jilbab smp mama sma hijab abg colmek film tante hot`,
        url: `https://video-bokep.pages.dev/v/${file.filecode}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://video-bokep.pages.dev/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://video-bokep.pages.dev'
              }
        }
        const jsonLd2 = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${file.title}`,
        image: file.splash_img,
        description: `${file.title} di ${SITENAME} Video Bokep Indo Jepang Barat Terbaru bocil jilbab smp mama sma hijab abg colmek film tante hot`,
        url: `https://video-bokep.pages.dev/v/${file.filecode}`,
        datePublished: new Date(
            file.uploaded + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://video-bokep.pages.dev/favicon.ico'},
            author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://video-bokep.pages.dev'
              }
        }
    return (
        <div className="grid col-span-full gap-4 md:gap-4 md:mx-10" itemProp="video" itemScope itemType="http://schema.org/VideoObject">
<meta itemProp="author" content="admin" />
<meta itemProp="name" content={`${file.title}`} />
<meta itemProp="description" content={`${file.title}`} />
<meta itemProp="description" content={`${file.title} di ${SITENAME} Video Bokep Indo Jepang Barat Terbaru bocil jilbab smp mama sma hijab abg colmek film tante hot`} />
<meta itemProp="duration" content="P0DT0H8M43S" />
<meta itemProp="thumbnailUrl" content={`${file.splash_img}`} />
<meta itemProp="embedURL" content={`https://ds2play.com/e/${file.filecode}`} />
<meta itemProp="uploadDate" content={`${new Date(
            file.uploaded + ".000Z"
        ).toISOString()}`} />
	<section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
        {/* ... */}
        </section>
            <iframe
                className="w-full h-[30vh] md:h-[55vh] lg:h-[70vh]"
                src={`https://ds2play.com/e/${file.filecode}`}
                scrolling="no"
                title={file.title}
                frameBorder={0}
                allowFullScreen={true}
            ></iframe>
            <Card className="mx-2 mb-8">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl font-bold">
                        {file.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-flow-row lg:grid-flow-col">
            <p>{file.title} di {SITENAME} Video Bokep Indo Jepang Barat Terbaru bocil jilbab smp mama sma hijab abg colmek film tante hot abg colmek twitter asia download live stw situs indonesia nonton link sd crot playbokep simontok bokepin montok baru perawan anak kecil telegram selingkuh ojol cantik gay vidio lokal artis pelajar janda streaming jepang barat korea japan jav cina japanese china rusia arab india thailand hd anime hentai bokepind gudang avtub pijat sotwe rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor remaja yandex update perselingkuhan wiki raja full com porno indoh</p>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="flex gap-2 items-center">
                                        <LapTimerIcon className="size-4 md:size-5"></LapTimerIcon>
                                        Duration
                                    </TableCell>
                                    <TableCell>
                                        {humanDuration(file.length)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="flex gap-2 items-center">
                                        <RocketIcon className="size-4 md:size-5"></RocketIcon>
                                        Views
                                    </TableCell>
                                    <TableCell>{file.views}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="flex gap-2 items-center">
                                        <CubeIcon className="size-4 md:size-5"></CubeIcon>
                                        Size
                                    </TableCell>
                                    <TableCell>
                                        {humanSize(file.size)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="flex gap-2 items-center">
                                        <CalendarIcon className="size-4 md:size-5"></CalendarIcon>
                                        Uploaded
                                    </TableCell>
                                    <TableCell>
                                        {new Date(
                                            file.uploaded + ".000Z"
                                        ).toLocaleString()}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
            <h2 className="text-2xl font-bold text-center my-4">
                Related Video {file.title}
            </h2>
            <SearchCardList query={file.title.split(" ")[2]} />
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2x2x294z2b4&u=http%3A%2F%2Fwww.juicyads.rocks"/>
        </div>
    );
}
