import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import postToApi from '../services/Api';
import ls from '../services/LocalStorage';

import '../styles/App.scss';

import Header from './Header';
import Footer from './Footer';
import Form from './form/Form';
import Preview from './preview/Preview';
import Landing from './Landing';

function App() {
	//              STATES               //

	// States for create card
	const [url, setUrl] = useState(null);
	const [success, setSuccess] = useState(false);

	// States for preview
	const [data, setData] = useState(
		ls.get('data', {
			name: '',
			job: '',
			email: '',
			phone: '',
			linkedin: '',
			github: '',
			photo: '',
			palette: '1',
		})
	);

	// States for collapsables:
	const [collapsableDesign, setCollapsableDesign] = useState('');
	const [arrowDesign, setArrowDesign] = useState('');

	const [collapsableFill, setCollapsableFill] = useState('collapsed');
	const [arrowFill, setArrowFill] = useState('');

	const [collapsableShare, setCollapsableShare] = useState('collapsed');
	const [arrowShare, setArrowShare] = useState('');

	//             FUNCTIONS          //
	useEffect(() => {
		ls.set('data', data);
	}, [data]);

	// Function to handle collapsables
	const handleCollapsable = (id) => {
		const selected = id;

		if (selected === 'collapsableDesign') {
			setCollapsableDesign('');
			setArrowDesign('rotateArrowUp');
			setCollapsableFill('collapsed');
			setArrowFill('');
			setCollapsableShare('collapsed');
			setArrowShare('');
		} else if (selected === 'collapsableFill') {
			setCollapsableDesign('collapsed');
			setArrowDesign('');
			setCollapsableFill('');
			setArrowFill('rotateArrowUp');
			setCollapsableShare('collapsed');
			setArrowShare('');
		} else if (selected === 'collapsableShare') {
			setCollapsableDesign('collapsed');
			setArrowDesign('');
			setCollapsableFill('collapsed');
			setArrowFill('');
			setCollapsableShare('');
			setArrowShare('rotateArrowUp');
		}
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
	};

	// Function to update inputs
	/* Metemos en una constante el input sobre el que está actuando la usuaria con el ev.currentTarget.name. Llamamos a esa constante para cambiar el valor de la propiedad del objeto data */
	const handleInput = (name, value) => {
		const inputChanged = name;
		setData({
			...data,
			[inputChanged]: value,
		});
	};

	// Function to update image
	const updateAvatar = (avatar) => {
		setData({
			...data,
			photo: avatar,
		});
	};

	/* Al hacer click en el reset, llamamos a handleReset que vacía todas las propiedades del objeto */
	const handleReset = () => {
		setData({
			name: '',
			job: '',
			email: '',
			phone: '',
			linkedin: '',
			github: '',
			photo: '',
			palette: '1',
		});
	};

	// Function to share the card
	const shareUrl = () => {
		postToApi(data).then((dataFromApi) => {
			console.log(dataFromApi);
			setUrl(dataFromApi.cardURL);
			setSuccess(dataFromApi.success);

			// 	if (dataFromApi.success === true) {
			// 		console.log("Entra en true");
			// 		setUrl(dataFromApi.cardURL);
			// 		setSuccess(dataFromApi.success);
			// 	} else {
			// 		console.log("Entra en false");
			// 		setSuccess(success);
			// 		setUrl(url);
			// 	}
		});
	};

	return (
		<div>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route path="/designCard">
					<main className="cards__main--wrapper">
						<Header />
						<section className="card__wrapper">
							<Preview data={data} handleReset={handleReset} />
							<Form
								data={data}
								url={url}
								success={success}
								collapsableDesign={collapsableDesign}
								arrowDesign={arrowDesign}
								collapsableFill={collapsableFill}
								arrowFill={arrowFill}
								collapsableShare={collapsableShare}
								arrowShare={arrowShare}
								updateAvatar={updateAvatar}
								shareUrl={shareUrl}
								handleInput={handleInput}
								handleCollapsable={handleCollapsable}
							/>
						</section>
						<Footer />
					</main>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
