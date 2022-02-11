import Palette from "./design/Palette";
import Input from "./fill/Input";
import GetAvatar from "./fill/GetAvatar";
import Profile from "./fill/Profile";
import Share from "./share/Share";

const Form = (props) => {
  const handleClickCollapsables = (ev) => {
    props.handleCollapsable(ev.currentTarget.id);
  };
  return (
    <form
      className="form js-form"
      //   onSubmit={handleSubmit}
    >
      <fieldset className="form__design">
        <legend
          id="collapsableDesign"
          className="form__title js-design__title"
          onClick={handleClickCollapsables}
        >
          <ul>
            <i className="form__title--icon icon-light far fa-object-ungroup"></i>
          </ul>
          <h2 className="form__title--text">Diseña</h2>
          <ul>
            <i
              className={`form__title--chevron icon-medium far fa-chevron-up ${props.arrowDesign}`}
            ></i>
          </ul>
        </legend>
        <div className={`form__design--wrapper ${props.collapsableDesign}`}>
          <label htmlFor="palette" className="form__label form__label--color">
            Colores
          </label>
          <div className="form__input--wrapper">
            <Palette
              data={props.data}
              paletteColor="1"
              collapsableDesign={props.collapsableDesign}
              handleInput={props.handleInput}
            />
            <Palette
              data={props.data}
              paletteColor="2"
              collapsableDesign={props.collapsableDesign}
              handleInput={props.handleInput}
            />
            <Palette
              data={props.data}
              paletteColor="3"
              collapsableDesign={props.collapsableDesign}
              handleInput={props.handleInput}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="form__fill">
        <legend
          id="collapsableFill"
          className="form__title js-fill__title"
          onClick={handleClickCollapsables}
        >
          <i className="form__title--icon far fa-keyboard"></i>
          <h2 className="form__title--text">Rellena</h2>
          <i className="form__title--chevron icon-medium far fa-chevron-down"></i>
        </legend>
        <div className={`form__fill--wrapper ${props.collapsableFill}`}>
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
            //pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[.][a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
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
            required={false}
            value={props.data.phone}
            handleInput={props.handleInput}
          />
          <Input
            type="text"
            label="Linkedin"
            htmlFor="linkedin"
            name="linkedin"
            placeholder="Ej: sally.hill"
            required={true}
            value={props.data.linkedin}
            handleInput={props.handleInput}
          />
          <Input
            type="text"
            label="Github"
            htmlFor="github"
            name="github"
            placeholder="Ej: sally-hill"
            required={true}
            value={props.data.github}
            handleInput={props.handleInput}
          />
        </div>
      </fieldset>
      <Share
        url={props.url}
        success={props.success}
        shareUrl={props.shareUrl}
        collapsableShare={props.collapsableShare}
        arrowShare={props.arrowShare}
        handleCollapsable={props.handleCollapsable}
      />
    </form>
  );
};
export default Form;
