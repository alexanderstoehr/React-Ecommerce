import { Link } from "react-router-dom";

export default function NoPageFound() {
	return (
		<div>
			<img src="/404mario.gif" />
			<h1>No can find.. </h1>
			<p>
				We are sorry, but there is nothing here. <br />
				But how about going <Link to={"/"}>Home</Link> instead?
			</p>
		</div>
	);
}
