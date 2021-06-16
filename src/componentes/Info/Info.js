import PropTypes from "prop-types";

export const Info = (props) => {
  const { mostrarMensaje } = props;
  return (
    <>
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
      <span className={`mensaje${mostrarMensaje ? "" : " off"}`}>
        Llamando...
      </span>
    </>
  );
};

Info.propTypes = {
  mostrarMensaje: PropTypes.bool.isRequired,
};
