'use client';

import { use } from 'react';

import { Link } from "@heroui/link";
import { Card, CardFooter } from "@heroui/card";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { Skeleton } from "@heroui/skeleton";
import { addToast } from '@heroui/toast';

import { getAPI } from '@/helpers/getAPI';

import styles from "../../../styles/coins/coins/page.module.css";

export default function CoinEntry({ params }: { params: Promise<{ coinCat: string }> }) {
    const { coinCat } = use(params);

    // Coin type pages | Ex: pennies
    const {json, jsonLoading, jsonError}: any = getAPI(`../../api/coins?category=${coinCat}`, ["json", "jsonLoading", "jsonError"]);

    if (jsonLoading) {
        return (
            <>
                <h1>{coinCat[0].charAt(0).toUpperCase() + coinCat[0].slice(1)}</h1>

                <Breadcrumbs>
                    <BreadcrumbItem href={`../`}>/</BreadcrumbItem>
                    <BreadcrumbItem href={`/coins`}>coins</BreadcrumbItem>
                    <BreadcrumbItem href={`/coins/${coinCat[0]}`}>{coinCat}</BreadcrumbItem>
                </Breadcrumbs>

                <Skeleton>
                    <Link href={``}>
                        <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                            <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt={""} />

                            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            </CardFooter>
                        </Card>
                    </Link>
                </Skeleton>
            </>
        );
    }

    if (jsonError) {
        console.log(jsonError);
        
        addToast({
            title: "Something went wrong",
            description: "Unable to get coin data. More info in browser console",
            color: "danger",
        });

        return (
            <>
                <h1>{coinCat[0].charAt(0).toUpperCase() + coinCat[0].slice(1)}</h1>

                <Breadcrumbs>
                    <BreadcrumbItem href={`../`}>/</BreadcrumbItem>
                    <BreadcrumbItem href={`/coins`}>coins</BreadcrumbItem>
                    <BreadcrumbItem href={`/coins/${coinCat[0]}`}>{coinCat}</BreadcrumbItem>
                </Breadcrumbs>

                <Skeleton>
                    <Link href={``}>
                        <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                            <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt={""} />

                            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            </CardFooter>
                        </Card>
                    </Link>
                </Skeleton>
            </>
        );
    }

    interface MetaData {
        name: string,
        codeTitle: string,
        full: string
    };

    const metaData: MetaData[] = json["coins"];

    return (
        <>
            <h1>{coinCat[0].charAt(0).toUpperCase() + coinCat[0].slice(1) + coinCat.substring(1)}</h1>

            <Breadcrumbs>
                <BreadcrumbItem href={`../`}>/</BreadcrumbItem>
                <BreadcrumbItem href={`/coins`}>coins</BreadcrumbItem>
                <BreadcrumbItem href={`/coins/${coinCat[0]}`}>{coinCat}</BreadcrumbItem>
            </Breadcrumbs>

            {metaData.map((coin: MetaData) => (
                <Link key={coin["name"]} href={`./${coinCat}/${coin["codeTitle"]}`}>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={coin["full"]} alt={coin["name"]} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>{coin["name"]}</p>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </>
    );
} ;