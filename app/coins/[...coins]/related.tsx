import { headers } from "next/headers";

import { Card, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";

import styles from "../../../styles/coins/coins/related.module.css";

export async function RelatedCoins(props: any) {
    const headersList = await headers();
    const domain = headersList.get("host");

    const related: string[][] = props.related;
    const relatedMetaData = [];

    for (let i = 0; i < related.length; i++) {
        const res: any = await fetch(`http://${domain}/api/coins?category=${related[i][0]}&entry=${related[i][1]}`);
        const json = await res.json();
        const metaData = json["metaData"];

        relatedMetaData.push(metaData);
    };

    return (
        <div className={`${styles.all}`}>
            {relatedMetaData.map((coin: any) => (
                <Link key={coin["title"]} href={`http://${domain}/coins/${coin["cat"]}/${coin["codeTitle"]}`}>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={coin["full"]} alt={coin["title"]} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>{coin["title"]}</p>
                            <br />
                            <p>{coin["datesMinted"]}</p>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );
};