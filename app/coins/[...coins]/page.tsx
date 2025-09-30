export default async function CoinEntry({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

    const { slug } = await params;

    console.log(slug)


    //const res: any = await fetch(`../api/coins?category=${cat}&entry=${entry}`);

    return (
        <>
            {"Hello World"}
        </>
    )
} 