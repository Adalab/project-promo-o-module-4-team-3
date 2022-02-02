// Si esta propiedad no existe porque es la primera vez que la usuaria entra en la página la función devuelve el valor de defaultValue
const get = (key, defaultValue) => {
	const localStorageData = localStorage.getItem(key);
	if (localStorageData === null) {
		return defaultValue;
	} else {
		return JSON.parse(localStorageData);
	}
};
// Función que guarda una propiedad y su valor en el local storage
const set = (key, value) => {
	const localStorageData = JSON.stringify(value);
	localStorage.setItem(key, localStorageData);
};
// Creamos un objeto temporal que es el que queremos exportar
const objectToExport = {
	get: get,
	set: set,
};
// Exportamos el objeto para que pueda ser usado desde App
export default objectToExport;
