// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(request: NextRequest) {
//     const { searchParams } = new URL(request.url);
//     const imageUrl = searchParams.get('url');

//     if (!imageUrl) {
//         return NextResponse.json({ error: 'Missing image URL' }, { status: 400 });
//     }

//     try {
//         const imageResponse = await fetch(imageUrl, {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
//             },
//         });

//         if (!imageResponse.ok) {
//             throw new Error('Insta Failed to fetch image');
//         }

//         const blob = await imageResponse.arrayBuffer();
//         const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';

//         // const imageBuffer = await imageResponse.arrayBuffer();
//         return new NextResponse(blob, {
//             status: 200,
//             headers: {
//                 'Content-Type': contentType,
//                 'Content-Disposition': 'attachment; filename="downloaded_image"',
//                 'Content-Length': blob.byteLength.toString(),
//                 // These headers tell the browser the connection is secure and finished
//                 'Cache-Control': 'no-cache',
//             },
//         });
//     } catch (error) {
//         return NextResponse.json({ error: 'Failed to download image' }, { status: 500 });
//     }
// }