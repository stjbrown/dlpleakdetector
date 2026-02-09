import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const contentType = request.headers.get('content-type') || '';
        let dataReceived = false;
        let dataSize = 0;
        let dataPreview = '';

        if (contentType.includes('multipart/form-data')) {
            const formData = await request.formData();
            const textData = formData.get('textData') as string;
            const file = formData.get('file') as File | null;

            if (textData && textData.trim()) {
                dataReceived = true;
                dataSize += textData.length;
                dataPreview = textData.substring(0, 100);
            }

            if (file && file.size > 0) {
                dataReceived = true;
                dataSize += file.size;
                dataPreview = dataPreview || `File: ${file.name} (${file.size} bytes)`;
            }
        } else {
            const body = await request.text();
            if (body && body.trim()) {
                dataReceived = true;
                dataSize = body.length;
                dataPreview = body.substring(0, 100);
            }
        }

        if (dataReceived) {
            return NextResponse.json({
                status: 'ALLOWED',
                message: '⚠️ WARNING: Your DLP did NOT block this upload!',
                details: 'If you are seeing this message, your DLP solution failed to detect and block the sensitive data transfer.',
                dataSize,
                dataPreview: dataPreview + (dataPreview.length >= 100 ? '...' : ''),
                timestamp: new Date().toISOString(),
            });
        } else {
            return NextResponse.json({
                status: 'EMPTY',
                message: 'No data was submitted. Please enter some text or upload a file.',
            }, { status: 400 });
        }
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({
            status: 'ERROR',
            message: 'An error occurred processing your request.',
        }, { status: 500 });
    }
}
