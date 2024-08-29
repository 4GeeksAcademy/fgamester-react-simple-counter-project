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
			<Timer id="unitMinutes" compLabel={Math.floor((Math.floor(sec / 3600) % 60 / 10))} />
			<Timer id="unitMinutes" compLabel={(Math.floor(sec / 3600) % 10)} />
			<h1>:</h1>
			<Timer id="unitMinutes" compLabel={Math.floor((Math.floor(sec / 60) % 60 / 10))} />
			<Timer id="unitMinutes" compLabel={(Math.floor(sec / 60) % 10)} />
			<h1>:</h1>
			<Timer id="tensSeconds" compLabel={Math.floor((sec % 60) / 10)} />
			<Timer id="unitSeconds" compLabel={sec % 10} />
		</div>
	);
};

export default Home;
