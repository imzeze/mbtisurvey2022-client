/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';

interface StopWatchProps {
    // 시간
    seconds: number;
    // 재시작
    retryCount: number;
}

const Timer = ({ seconds, retryCount }: StopWatchProps) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setTime(seconds);
    }, [retryCount]);

    useEffect(() => {
        if (time > 0) {
            const tick = setTimeout(() => {
                setTime((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(tick);
        }
    }, [time]);

    return (
        <div
            css={{
                fontFamily: 'Montserrat',
                fontWeight: '300',
                fontSize: '200px',
            }}
        >
            {`${Math.floor(time / 60)}`.padStart(2, '0')}:
            {`${time % 60}`.padStart(2, '0')}
        </div>
    );
};

export default Timer;
