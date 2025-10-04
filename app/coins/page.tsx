import { headers } from "next/headers";

import CoinCats from "./coins";

export default async function Coins() {
    return (
        <>
            <h1>Coins</h1>

            <br />
            
            <CoinCats />
        </>
    );
};