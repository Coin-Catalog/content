'use client';

import { useState, useEffect } from "react";

import { Link } from "@heroui/link";
import { Card, CardFooter } from "@heroui/card";

import styles from "../../styles/coins/coins.module.css"

export default function CoinCats() {
    const [domain, setDomain] = useState("");

    useEffect(() => {
        setDomain(window.location.href);
    });

    interface coinType {
        name: string,
        description: string,
        image: string
    };

    const coins: coinType[] = [
        {
            name: "penny",
            description: "One cent peice minted since 1792",
            image: "/coins/penny/SC/PNGs/shieldPennies.png"
        }
    ];

    return (
        <span className={`${styles.coinCats}`}>
            {coins.map((coin: coinType) => (
                <Link key={coin["name"]} href={`${domain}/${coin["name"]}`} className={`${styles.coin}`}>
                    <Card isFooterBlurred>
                        <img src={coin["image"]} alt={coin["name"]} />
                        
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p>{coin["name"].charAt(0).toUpperCase() + coin["name"].slice(1)}</p>        

                            <p className="text-tiny">{coin["description"]}</p>       
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </span> 
    );
};