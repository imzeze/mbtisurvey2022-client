import _Image from 'next/image';

export default function Image({
    src,
    alt,
    width,
    height,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    src: any;
    alt: string;
    width: string;
    height: string;
}) {
    return (
        <div style={{ position: 'relative', width, height }}>
            <_Image src={src} alt={alt} layout="fill" />
        </div>
    );
}
