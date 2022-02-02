import ResetButton from "./ResetButton";

function Preview(props) {
  return (
    <section className="section__cards">
      <div className="card__preview">
        <ResetButton handleReset={props.handleReset} />
        <div className="card__preview--default">
          <div
            className={`preview__text js-borderleft border-text${props.data.palette}`}
          >
            <h3
              className={`preview__text--name js-preview-name text${props.data.palette}`}
            >
              {props.data.name || "Nombre Apellido"}
            </h3>
            <h4 className="preview__text--role js-preview-job">
              {props.data.job || "Front-End Developer"}
            </h4>
          </div>
          <div
            style={{
              backgroundImage: props.data.photo
                ? `url('${props.data.photo}')`
                : null,
            }}
            className="preview__image js__profile-image"
          ></div>
          <div className="preview__links">
            <a
              href={props.data.phone || "#"}
              className={`preview__links--social js-preview-phone  js-border border-icon${props.data.palette}`}
              title={props.data.phone ? `Phone: ${props.data.phone}` : `Phone`}
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={`fas fa-mobile-alt preview__links--icon js-icons icon${props.data.palette}`}
              ></i>
            </a>
            <a
              href={props.data.email ? `mailto:${props.data.email}` : "#"}
              className={`preview__links--social js-preview-email js-border border-icon${props.data.palette}`}
              title={props.data.email ? `Email: ${props.data.email}` : `Email`}
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={`far fa-envelope preview__links--icon js-icons icon${props.data.palette}`}
              ></i>
            </a>
            <a
              href={
                props.data.linkedin
                  ? `https://www.linkedin.com/in/${props.data.linkedin}`
                  : "#"
              }
              className={`preview__links--social js-preview-linkedin js-border border-icon${props.data.palette}`}
              title={
                props.data.linkedin
                  ? `Linkedin: ${props.data.linkedin}`
                  : `Linkedin`
              }
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={`fab fa-linkedin-in preview__links--icon js-icons icon${props.data.palette}`}
              ></i>
            </a>
            <a
              href={
                props.data.github
                  ? `https://github.com/${props.data.github}`
                  : "#"
              }
              className={`preview__links--social js-preview-github js-border border-icon${props.data.palette}`}
              title={
                props.data.github ? `Github: ${props.data.github}` : `Github`
              }
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={`fab fa-github-alt preview__links--icon js-icons icon${props.data.palette}`}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preview;
