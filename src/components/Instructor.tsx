import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Instructor({
  id,
  imageLink,
  name,
}: {
  id: string;
  imageLink: string;
  name: string;
}) {
  return (
    <Link to={`/Instructors/${id}`}>
      <Card>
        <img src={imageLink} className="card-img-top" alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Card.Text>{} LYD</Card.Text> */}
        </Card.Body>
      </Card>
    </Link>
  );
}
export default Instructor;
