import { NextRequest, NextResponse } from "next/server";

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { MetaData } from "@/helpers/types";

async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    
    const cat = searchParams.get("category");

    const postsDirectory = path.join(process.cwd(), `entries/${cat}`);
    const files = fs.readdirSync(postsDirectory);

    const metaData: MetaData[] = [];

    for (let i = 0; i < files.length; i++) {
        const fullPath = path.join(postsDirectory, files[i]);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult: any = matter(fileContents);
        const processedContent = await remark().use(html).process(matterResult.content);

        const fileMetaData = matterResult.data;

        metaData.push({
            name: fileMetaData["title"],
            codeTitle: fileMetaData["codeTitle"],
            full: fileMetaData["full"]
        });
    };

    return NextResponse.json(
        {
            coins: metaData
        },
        { status: 200 }
    );
};

export { GET };