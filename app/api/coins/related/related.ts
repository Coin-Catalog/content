import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
    const headersList = await headers();
    const domain = headersList.get("host");

    const searchParams = req.nextUrl.searchParams;
    
    const coins: string[][] = JSON.parse(searchParams.get("coins"));
    
    if (coins.length != 4) {
        return NextResponse.json(
            {
                "error": "You need exactly 4 related coins"
            },
            { status: 400 }
        );
    };

    interface MetaData {
        name: string,
        codeTitle: string,
        full: string
    };

    const metaData: MetaData[] = [];

    for (let i = 0; i < coins.length; i++) {
        const res = await fetch(`http://${domain}/api/coins/coins?category=${coins[i][0]}&entry=${coins[i][1]}`);
        const json = await res.json();

        metaData.push(json);
    };

    return NextResponse.json(
        {
            "metaData": metaData
        },
        { status: 200 }
    );
};