import React, { useState, useEffect } from "react";
import Timer from "./Timer.jsx"

//include images into your bundle

//create your first component
const Home = () => {
	const [sec, setSec] = useState(0)


	useEffect(() => {
		const time = setInterval(() => setSec(sec + 1), 1000);
		return () => { clearInterval(time); };
	});


	return (
		<div className="d-flex justify-content-center mt-1">
			<i class="fa-regular fa-clock"></i>
			<Timer id="unitMinutes" timeLabel={(Math.floor(sec / 60) % 10)} />
			<Timer id="tensSeconds" timeLabel={Math.floor((sec % 60) / 10)} />
			<Timer id="unitSeconds" timeLabel={sec % 10} />
		</div>
	);
};

export default Home;
