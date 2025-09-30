import { headers } from "next/headers";

export default async function CoinEntry({ params }: { params: Promise<{ coins: string[] }> }) {
    const headersList = await headers();
    const domain = headersList.get("host");

    const { coins } = await params;

    const res: any = await fetch(`http://${domain}/api/coins?category=${coins[0]}&entry=${coins[1]}`);
    const json = await res.json();

    return (
        <>
            <span dangerouslySetInnerHTML={{ __html: json["html"]}}></span>
        </>
    )
} 