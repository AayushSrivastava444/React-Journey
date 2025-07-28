import PropTypes from "prop-types";

function Student(props) {
  console.log("Props:", props); // Debugging ke liye

  return (
    <div>
      <p>Name: {props.name || "Guest"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
};

Student.defaultProps = {
  name: "Guest",
};

export default Student;