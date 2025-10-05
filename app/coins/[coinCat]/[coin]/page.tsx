'use client';

import { use, useEffect, useState } from "react";

import { Skeleton } from "@heroui/skeleton";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { addToast } from "@heroui/toast";

import { RelatedCoins } from "./related";

import { getAPI } from "@/helpers/getAPI";

import styles from "../../../../styles/coins/coins/page.module.css";

// For specific coin | Ex: Shield penny
export default function Coin({ params }: { params: Promise<{ coin: string }> }) {
    const { coin } = use(params);

    const [domain, setDomain] = useState("");

    useEffect(() => {
        setDomain(window.location.href);
    });

    const domainParts = domain.split("/");
    const category = domainParts[domainParts.length -2];

    const {json, jsonLoading, jsonError} = getAPI(`../../../api/coins/coins?category=${category}&entry=${coin}`, ["json", "jsonLoading", "jsonError"]);

    if (jsonLoading) {
        return (
            <Skeleton>
                <span className={`${styles.grid}`}>
                    <div className={`${styles.col1}`}>
                    <h1>Some coin name</h1>

                    <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt="Obverse and reverse of coin" />
                    <p>Designer: Some random person</p>

                    <br />
                    
                    <p>1900-1900</p>

                    <br />

                    <ul>
                        <li>Mintage: Pi I think</li>
                        <li>Mints: I think the the Antartica mint</li>

                    </ul>
                    </div>

                    <div className={`${styles.col2}`}>
                        <h2>Description</h2>
                        <p>This coin was really cool because this is a real coin.</p>
                    </div>
                </span>
            </Skeleton>
        );
    }


    if (jsonError) {
        console.log(jsonError);

        /*
        addToast({
            title: "Something went wrong",
            description: "Unable to get coin data. More info in browser console",
            color: "danger",
        });
        */
       
        return (
            <Skeleton>
                <span className={`${styles.grid}`}>
                    <div className={`${styles.col1}`}>
                    <h1>Some coin name</h1>

                    <img src={"/coins/penny/SC/PNGs/shieldPennies.png"} alt="Obverse and reverse of coin" />
                    <p>Designer: Some random person</p>

                    <br />
                    
                    <p>1900-1900</p>

                    <br />

                    <ul>
                        <li>Mintage: Pi I think</li>
                        <li>Mints: I think the the Antartica mint</li>

                    </ul>
                    </div>

                    <div className={`${styles.col2}`}>
                        <h2>Description</h2>
                        <p>This coin was really cool because this is a real coin.</p>
                    </div>
                </span>
            </Skeleton>
        );
    }

    const metaData = json["metaData"];

    return (
        <>
            <span className={`${styles.grid}`}>
                <div className={`${styles.col1}`}>
                <h1>{metaData["title"]}</h1>

                <Breadcrumbs>
                    <BreadcrumbItem href={`../`}>/</BreadcrumbItem>
                    <BreadcrumbItem href={`/coins`}>coins</BreadcrumbItem>
                    <BreadcrumbItem href={`/coins/${category}`}>{category}</BreadcrumbItem>
                    <BreadcrumbItem href={`/coins/${category}/${coin}`}>{metaData["title"]}</BreadcrumbItem>
                </Breadcrumbs>

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