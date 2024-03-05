import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountSection = () => {
    const [counterState, setCounterState] = useState(false)
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Creates 4 columns with equal width
        gap: '20px',
        padding: "25px 30px"
    };
    return (
        <div style={{ padding: "100px 40px", color: "black" }}>
            <h1 className="font-inter font-extrabold text-4xl text-center my-10" data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">Repair<span className="text-blue-400">-</span>Services<span className="text-blue-400">-</span>Breakdown</h1>
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)} >
                <div style={gridContainerStyle} className="border-2 border-blue-900" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ fontSize: "60px", fontWeight: "bold" }}>{
                            counterState && <CountUp start={0} end={95} duration={3.40}></CountUp>
                        }%</h2>
                        <p style={{ fontSize: "25px" }} className="text-blue-400 font-bold font-inter">Screen Replacement</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ fontSize: "60px", fontWeight: "bold" }}>{
                            counterState && <CountUp start={0} end={98} duration={3.40}></CountUp>
                        }%</h2>
                        <p style={{ fontSize: "25px" }} className="text-blue-400 font-bold font-inter">Battery Replacement</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ fontSize: "60px", fontWeight: "bold" }}>{
                            counterState && <CountUp start={0} end={94} duration={3.40}></CountUp>
                        }%</h2>
                        <p style={{ fontSize: "25px" }} className="text-blue-400 font-bold font-inter">Component Repair</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ fontSize: "60px", fontWeight: "bold" }}>{
                            counterState && <CountUp start={0} end={89} duration={3.40}></CountUp>
                        }%</h2>
                        <p style={{ fontSize: "25px" }} className="text-blue-400 font-bold font-inter">Software Troubleshooting</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div >
    );
};

export default CountSection;