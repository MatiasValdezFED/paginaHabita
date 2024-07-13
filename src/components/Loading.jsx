import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="loading">
      <Spinner animation="border" variant="dark" />
    </div>
  );
}

export default Loading;
