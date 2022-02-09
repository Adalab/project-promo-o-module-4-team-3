const Share = (props) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    props.shareUrl();
  };

  const handleClickCollapsables = (ev) => {
    props.handleCollapsable(ev.currentTarget.id);
  };

  const renderLink = () => {
    if (props.success && props.url) {
      return (
        <div className="sharewrapper">
          <h3 className="form__card--title">La tarjeta ha sido creada:</h3>
          <a
            className="form__card--link"
            href={`${props.url}`}
            target="_blank"
            title="URL card"
            rel="noreferrer"
          >
            {props.url}
          </a>
          <a
            className="form__twitter--link"
            href={`https://twitter.com/intent/tweet?text=¡Hola!%20Mira%20mi%20tarjeta%20de%20presentación%20de%20Awesome%20Cards%20&url=${props.url}`}
            target="_blank"
            title="twitter"
            rel="noreferrer"
          >
            <i className="form__twitter--icon fab fa-twitter"></i>Compartir en
            twitter
          </a>
        </div>
      );
    } else if (!props.success && props.url === null) {
      return (
        <p>
          ¡Hola! Los campos con <span className="required">* </span>son
          obligatorios.
        </p>
      );
    }
  };

  return (
    <fieldset className="form__share">
      <legend
        id="collapsableShare"
        className="form__title js-share__title"
        onClick={handleClickCollapsables}
      >
        <i className="form__title--icon fas fa-share-alt"></i>
        <h2 className="form__title--text">Comparte</h2>
        <i
          className={`form__title--chevron icon-medium far fa-chevron-down ${props.arrowShare}`}
        ></i>
      </legend>

      <div className={`form__share--wrapper ${props.collapsableShare}`}>
        <button
          className="form__submit js-submit"
          type="submit"
          onClick={handleClick}
        >
          <i className="form__submit--icon far fa-address-card"></i>
          crear tarjeta
        </button>

        <div> {renderLink()} </div>
      </div>
    </fieldset>
  );
};
export default Share;
