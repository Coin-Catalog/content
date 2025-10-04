import { headers } from "next/headers";
import { redirect, RedirectType } from 'next/navigation';

import { Link } from "@heroui/link";
import { Card, CardFooter } from "@heroui/card";

import { RelatedCoins } from "./related";

import styles from "../../../styles/coins/coins/page.module.css";

export default async function CoinEntry({ params }: { params: Promise<{ coins: string[] }> }) {
    const headersList = await headers();
    const domain = headersList.get("host");

    const { coins } = await params;

    // Makes sure nothing past 2 | Ex: "doamin/coins/levelOne/levelTwo"
    if (coins.length > 2) {
        redirect(`http://${domain}/coins/${coins[0]}/${coins[1]}`, RedirectType.push);
    };

    // Coin type pages | Ex: pennies
    if (coins.length == 1) {
        const res: any = await fetch(`http://${domain}/api/coins?category=${coins[0]}`);
        const json = await res.json();

        interface MetaData {
            name: string,
            codeTitle: string,
            full: string
        };

        const metaData: MetaData[] = json["coins"];

        return (
            <>
                <h1>{coins[0].charAt(0).toUpperCase() + coins[0].slice(1)}</h1>

                {metaData.map((coin: MetaData) => (
                    <Link key={coin["name"]} href={`http://${domain}/coins/${coins[0]}/${coin["codeTitle"]}`}>
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
    };

    // For specific coin | Ex: Shield penny

    const res: any = await fetch(`http://${domain}/api/coins/coins?category=${coins[0]}&entry=${coins[1]}`);
    const json = await res.json();
    const metaData = json["metaData"];

    return (
        <>
            <span className={`${styles.grid}`}>
                <div className={`${styles.col1}`}>
                <h1>{metaData["title"]}</h1>

                <img src={metaData["full"]} alt="Obverse and reverse of coin" />
                <p>Designer: {metaData["Designer"]}</p>

                <br />
                
                <p>{metaData["datesMinted"]}</p>

                <br />

                <ul>
                    <li>Mintage: {metaData["mintage"]}</li>
                    <li>Mints: {metaData["Mints"].join(", ")}</li>

                </ul>
                </div>

                <div dangerouslySetInnerHTML={{ __html: json["html"]}} className={`${styles.col2}`}></div>
            </span>

            <br />

            <RelatedCoins related={metaData["related"]} />
        </>
    );
} ;