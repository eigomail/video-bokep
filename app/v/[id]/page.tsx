import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { humanDuration, humanSize } from "@/lib/utils";
import { SITENAME } from "@/lib/constants";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import MessageBox from "@/components/message-box";
import React from "react";
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
    if (data.status !== 200) {
        return {
            title: data.msg,
            description: "Something went wrong. Please try again later.",
        };
    }

    const file = data.result[0];
    const title = `${file.file_title}`;
    const description = `${file.file_title} di ${SITENAME} Video Bokep Indo Viral Terbaru Xpanas Bocil Ngentot Jilbab Smp Mama Sma`;

    return {
        title,
        description,
        twitter: {
            title,
            description,
            images: `${file.player_img}`,
        },
        openGraph: {
            title,
            description,
            images: `${file.player_img}`,
            url: `/v/${file.file_code}`,
            type: `article`,
        },
        alternates: {
            canonical: `/v/${file.file_code}`,
        },
    };
}

export default async function Video({ params }: PageProps) {
    const data = await doodstream.getFile({ file_code: params.id as string });

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
        '@type': 'WebPage',
        headline: `${file.file_title}`,
        image: file.splash_img,
        description: `${file.file_title} di ${SITENAME} Video Bokep Indo Viral Terbaru Xpanas Bocil Ngentot Jilbab Smp Mama Sma`,
        url: `https://video-bokep.pages.dev/v/${file.file_code}`,
        datePublished: new Date(
            file.file_created + ".000Z"
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
        '@type': 'Article',
        headline: `${file.file_title}`,
        image: file.player_img,
        description: `${file.title} di ${SITENAME} Video Bokep Indo Viral Terbaru Xpanas Bocil Ngentot Jilbab Smp Mama Sma`,
        url: `https://video-bokep.pages.dev/v/${file.file_code}`,
        datePublished: new Date(
            file.file_created + ".000Z"
        ).toISOString(),
        publisher: {
            '@type': 'Organization',
            name: `${SITENAME}`,
            logo: 'https://video-bokep.pages.dev/favicon.ico'},
        author: {
                '@type': 'Person',
                name: 'admin',
                url: 'https://video-bokep.pages.dev'},
        interactionStatistic: {
            '@type': `InteractionCounter`,
                userInteractionCount: `${file.file_views}`,
            interactionType: {
                '@type': `ReadAction`,
                target: `https://video-bokep.pages.dev/v/${file.file_code}`
            }  
        }
        }

    return (
        <div className="grid col-span-full gap-4 md:gap-4 md:mx-10" itemProp="video" itemScope itemType="http://schema.org/VideoObject">
<meta itemProp="author" content="admin" />
<meta itemProp="name" content={`${file.file_title}`} />
<meta itemProp="description" content={`${file.file_title} di ${SITENAME} Video Bokep Indo Viral Terbaru Xpanas Bocil Ngentot Jilbab Smp Mama Sma`} />
<meta itemProp="duration" content="P0DT0H18M43S" />
<meta itemProp="thumbnailUrl" content={`${file.player_img}`} />
<meta itemProp="embedURL" content={`https://filemoon.to/e/${file.file_code}`} />
<meta itemProp="uploadDate" content={`${new Date(
            file.file_created
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
                src={`https://filemoon.to/e/${file.file_code}`}
                scrolling="no"
                title={file.title}
                frameBorder={0}
                allowFullScreen={true}
            ></iframe>
            <Card className="mx-2 mb-8">
                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl font-bold">
                        {file.file_title}
                    </CardTitle>
                </CardHeader>
            <p>{file.file_title} di {SITENAME} Video Bokep Indo Viral Terbaru Xpanas Bocil Ngentot Jilbab Smp Mama Sma Jepang Jav Barat Simontok hub sotwe olmek avtube pijat pure gudang pemerkosaan rumah tobrut inggris ngintip vcs binor yandex update remaja {SITENAME} wiki raja bokeptube full porno colmeka simontok {file.file_title} playbokep indobokep xpanasonline indoh janda streaming jepang barat korea japan jav cina japanese china rusia arab india thailand hd anime hentai bokepind gudang avtub pijat sotwe rumah pemerkosaan inggris xpanas pure tobrut vcs ngintip binor {SITENAME} remaja yandex update perselingkuhan wiki raja full com porno indoh Hotbabes Big Tits Family Freeporn Ass Naked Celebs Nude Cam Hot Videos Fucking Free Porno Adult Movies Mom Freesex Nudelive Cams Women Stepmom Hotwife Bigtits Melons Tube Huge Tits Pornos Film x Titshits Pornofilme Nice Natural Fuq Girls Teen Sex Pornstars Tube Dick Jihad</p>
            </Card>
            <h2 className="text-2xl font-bold text-center my-4">Related Video {file.file_title}
            </h2>
            <SearchCardList query={file.file_title.split(" ")[2]} />
<Script src="https://js.juicyads.com/jp.php?c=947403z2v256s2x2x294z2b4&u=http%3A%2F%2Fwww.juicyads.rocks"/>
            </div>
            );
}
