import { NextRequest, NextResponse } from "next/server";

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    
    const cat = searchParams.get("category");
    const entry = searchParams.get("entry");

    const postsDirectory = path.join(process.cwd(), `entries/${cat}`);
    const fullPath = path.join(postsDirectory, `${entry}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult: any = matter(fileContents);

    // Combine the data with the id
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return NextResponse.json(
        {
            metaData: matterResult.data,
            html: contentHtml,
        },
        { status: 200}
    );

    return NextResponse.json(
        { status: 200 }
    )
};