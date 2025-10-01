import { headers } from "next/headers";
import { redirect, RedirectType } from 'next/navigation'

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
        return (
            <>
                <h1>This is a coin type page!</h1>
            </>
        )
    };

    // For specific coin | Ex: Shield penny

    const res: any = await fetch(`http://${domain}/api/coins?category=${coins[0]}&entry=${coins[1]}`);
    const json = await res.json();

    return (
        <>
            <span dangerouslySetInnerHTML={{ __html: json["html"]}}></span>
        </>
    );
} ;