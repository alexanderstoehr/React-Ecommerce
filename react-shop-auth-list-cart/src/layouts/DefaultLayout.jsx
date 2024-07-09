import { Outlet } from "react-router-dom";
import { MainContainer, MainContent } from "../styled";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
	return (
		<MainContainer>
			<Header />
			<MainContent>
				<Outlet />
			</MainContent>
			<Footer />
		</MainContainer>
	);
}
