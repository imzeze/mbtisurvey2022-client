import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta
                    name="description"
                    content="우리가 아는 MBTI에 대한 편견은 사실일까요? 여러분의
                소중한 시간을 투자해주세요!"
                />
                <link rel="icon" href="/images/favicon.ico" />
                <meta property="og:image" content="/images/ogimage.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
