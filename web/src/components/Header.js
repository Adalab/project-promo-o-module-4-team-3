import logo from '../images/dont-be-undefined-logo.svg';
import '../styles/layout/Header.scss';
import '../styles/core/Mixins.scss';
import '../styles/core/Variables.scss';

const Header = () => {
	return (
		<header className="header">
			<a href="./index.html">
				<img className="image_header" src={logo} alt="tarjetas" />
			</a>
		</header>
	);
};

export default Header;
