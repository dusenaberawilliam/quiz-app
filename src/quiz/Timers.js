import React from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timers = () => {

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">Too lale...</div>;
        }

        return (
            <div className="timer">
                <div className="text">Remaining</div>
                <div className="value">{remainingTime} seconds</div>
                {/* <div className="text">seconds</div> */}
            </div>
        );
    };


    return (
        <div>
            <CountdownCircleTimer
                isPlaying
                duration={300}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() => [false, 1000]}
            >
                {renderTime}
            </CountdownCircleTimer>
        </div>
    )
}

export default Timers
