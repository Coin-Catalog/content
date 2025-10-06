'use client';

import { Card, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Skeleton } from "@heroui/skeleton";
import { addToast } from "@heroui/toast";

import { getAPI } from "@/helpers/getAPI";

import styles from "../../../../styles/coins/coins/related.module.css";

export function RelatedCoins(props: any) {
    const related: string[][] = props.related;

    const {json, jsonLoading, jsonError} = getAPI(`../../api/coins/related?coins=${JSON.stringify(related)}`, ["json", "jsonLoading", "jsonError"]);

    if (jsonLoading) {
        return (
            <>
                <Skeleton>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt={"Shield penny"} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>Shield Penny</p>

                            <br />

                            <p>2010-present</p>
                        </CardFooter>
                    </Card>
                </Skeleton>

                <Skeleton>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt={"Shield penny"} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>Shield Penny</p>

                            <br />

                            <p>2010-present</p>
                        </CardFooter>
                    </Card>
                </Skeleton>

                <Skeleton>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt={"Shield penny"} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>Shield Penny</p>

                            <br />

                            <p>2010-present</p>
                        </CardFooter>
                    </Card>
                </Skeleton>

                <Skeleton>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt={"Shield penny"} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>Shield Penny</p>

                            <br />

                            <p>2010-present</p>
                        </CardFooter>
                    </Card>
                </Skeleton>
            </>
        );
    };

    if (jsonError) {
        console.log(jsonError);

        /*
        addToast({
            title: "Something went wrong",
            description: "Unable to get related coin data. More info in browser console",
            color: "danger",
        });
        */
       
        return (
            <>
                <Skeleton>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt={"Shield penny"} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>Shield Penny</p>

                            <br />

                            <p>2010-present</p>
                        </CardFooter>
                    </Card>
                </Skeleton>

                <Skeleton>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt={"Shield penny"} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>Shield Penny</p>

                            <br />

                            <p>2010-present</p>
                        </CardFooter>
                    </Card>
                </Skeleton>

                <Skeleton>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt={"Shield penny"} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>Shield Penny</p>

                            <br />

                            <p>2010-present</p>
                        </CardFooter>
                    </Card>
                </Skeleton>

                <Skeleton>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt={"Shield penny"} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>Shield Penny</p>

                            <br />

                            <p>2010-present</p>
                        </CardFooter>
                    </Card>
                </Skeleton>
            </>
        );
    };

    const relatedMetaData: string[][] = json["metaData"];

    console.log(relatedMetaData)

    return (
        <div className={`${styles.all}`}>
            {relatedMetaData.map((coin: any) => (
                <Link key={coin["metaData"]["title"]} href={`/${coin["metaData"]["cat"]}/${coin["metaData"]["codeTitle"]}`}>
                    <Card isFooterBlurred className={`border-none ${styles.card}`} radius="lg">
                        <img src={coin["metaData"]["full"]} alt={coin["metaData"]["title"]} />

                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>{coin["metaData"]["title"]}</p>
                            <br />
                            <p>{coin["metaData"]["datesMinted"]}</p>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );
};