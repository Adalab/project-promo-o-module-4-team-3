import Palette from "./design/Palette";
import Input from "./fill/Input";
import GetAvatar from "./fill/GetAvatar";
import Profile from "./fill/Profile";
import Share from "./share/Share";

const Form = (props) => {
  return (
    <form
      action="#"
      method="get"
      className="form js-form"
      //   onSubmit={handleSubmit}
    >
      <fieldset className="form__design">
        <legend className="form__title js-design__title">
          <ul>
            <i className="form__title--icon icon-light far fa-object-ungroup"></i>
          </ul>
          <h2 className="form__title--text">Diseña</h2>
          <ul>
            <i className="form__title--chevron icon-medium far fa-chevron-up"></i>
          </ul>
        </legend>
        <div className="form__design--wrapper">
          <label htmlFor="palette" className="form__label form__label--color">
            Colores
          </label>
          <div className="form__input--wrapper">
            <Palette
              handleInput={props.handleInput}
              data={props.data}
              paletteColor="1"
            />
            <Palette
              handleInput={props.handleInput}
              data={props.data}
              paletteColor="2"
            />
            <Palette
              handleInput={props.handleInput}
              data={props.data}
              paletteColor="3"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="form__fill">
        {/* linea 126 clase collapsed*/}
        <legend className="form__title js-fill__title">
          <i className="form__title--icon far fa-keyboard"></i>
          <h2 className="form__title--text">Rellena</h2>
          <i className="form__title--chevron icon-medium far fa-chevron-down"></i>
        </legend>
        <div className="form__fill--wrapper">
          <Input
            type="text"
            label="Nombre Completo"
            htmlFor="fullname"
            name="name"
            placeholder="Ej: Mrs. Chanandler Bong"
            pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
            required={true}
            value={props.data.name}
            handleInput={props.handleInput}
          />
          <Input
            type="text"
            label="Puesto"
            htmlFor="job"
            name="job"
            placeholder="Ej: Front-end turke"
            pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
            required={true}
            value={props.data.job}
            handleInput={props.handleInput}
          />
          <GetAvatar
            avatar={props.data.photo}
            updateAvatar={props.updateAvatar}
          />
          <Profile avatar={props.data.photo} />
          <Input
            type="text"
            label="Email"
            htmlFor="email"
            name="email"
            placeholder="Ej: sally-hill@gmail.com"
            // pattern=""
            required={true}
            value={props.data.email}
            handleInput={props.handleInput}
          />

          <Input
            type="number"
            label="Teléfono"
            htmlFor="phone"
            name="phone"
            placeholder="Ej: 555-55-55-55"
            // pattern=""
            required={false}
            value={props.data.phone}
            handleInput={props.handleInput}
          />
          <Input
            type="text"
            label="Linkedin"
            htmlFor="linkedin"
            name="linkedin"
            placeholder="Ej: linkedin.com/in/sally.hill"
            // pattern=""
            required={true}
            value={props.data.linkedin}
            handleInput={props.handleInput}
          />
          <Input
            type="text"
            label="Github"
            htmlFor="github"
            name="github"
            placeholder="Ej: @sally-hill"
            // pattern=""
            required={true}
            value={props.data.github}
            handleInput={props.handleInput}
          />
        </div>
      </fieldset>
      <Share
        url={props.url}
        success={props.success}
        changeUrl={props.changeUrl}
      />
    </form>
  );
};
export default Form;
