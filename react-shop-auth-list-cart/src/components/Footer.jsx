import { Link } from "react-router-dom";
import { FooterStyled, NavigationStyled } from "../styled";

export default function Footer() {
	return (
		<>
			<FooterStyled>
				<div>
					<Link to="/404">Made with ❤️ and React</Link>
				</div>
			</FooterStyled>
		</>
	);
}
