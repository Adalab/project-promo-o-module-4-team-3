import { Link } from "react-router-dom";
import Logo from "../images/dont-be-undefined-logo.svg";
import Footer from "./Footer";
//import Header from "./Header";

const Landing = () => {
	return (
		<>
			{/* <Header /> */}
			<div className="index--wrapper">
				<main className="main">
					<div className="container1">
						<img className="tarjeta" src={Logo} alt="tarjetas molonas" />
						<h2 className="main__title">Crea tu tarjeta de visita</h2>
						<p className="main__subtitle">
							Crea mejores contactos profesionales de forma fácil y cómoda.
						</p>
						<div className="icons">
							<div className="icons__content">
								<i className="far fa-object-ungroup design"></i>
								<p className="icons__content-design">Diseña</p>
							</div>
							<div className="icons__content">
								<i className="far fa-keyboard keyboard"></i>
								<p className="icons__content-fild">Rellena</p>
							</div>
							<div className="icons__content1">
								<i className="fas fa-share-alt share"></i>
								<p className="icons__content1-share">Comparte</p>
							</div>
						</div>
						<nav className="btn">
							<Link to="/designCard" className="start click">
								Comenzar
							</Link>
						</nav>
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
};
export default Landing;
