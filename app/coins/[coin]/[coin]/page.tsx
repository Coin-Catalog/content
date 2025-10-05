'use client';

import { RelatedCoins } from "../related";

export default function Coin() {
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
};