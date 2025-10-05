'use client'

import { useState, useEffect } from "react";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";

import CoinCats from "./coins";

export default function Coins() {
    const [domain, setDomain] = useState("");

    useEffect(() => {
        setDomain(window.location.href);
    });

    return (
        <>
            <h1>Coins</h1>

            <br />

            <Breadcrumbs>
                <BreadcrumbItem href={`http://${domain}`}>/</BreadcrumbItem>
                <BreadcrumbItem href={`http://${domain}/coins`}>coins</BreadcrumbItem>
            </Breadcrumbs>

            <br />
            
            <CoinCats />
        </>
    );
};