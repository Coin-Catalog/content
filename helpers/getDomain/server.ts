import { headers } from "next/headers";

export async function getDomain() {
    const headersList = await headers();
    const domain = headersList.get("host");

    return domain;
};