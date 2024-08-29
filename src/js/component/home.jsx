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
		<div className="d-flex justify-content-center align-items-center pt-1 bg-dark">
			<i class="fa-regular fa-4x fa-clock text-white me-2"></i>
			<Timer id="tensHours" seconds={sec} />
			<Timer id="unitHours" seconds={sec} />
			<h1>:</h1>
			<Timer id="tensMinutes" seconds={sec} />
			<Timer id="unitMinutes" seconds={sec} />
			<h1>:</h1>
			<Timer id="tensSeconds" seconds={sec} />
			<Timer id="unitSeconds" seconds={sec} />
		</div>
	);
};

export default Home;
