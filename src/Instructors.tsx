import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Instructor from "./components/Instructor";
import { pb } from "./main";
import { useQuery } from "react-query";
function Instructors() {
  const { isLoading, data } = useQuery("Instructors", async () => {
    const result = await pb.collection("Instructor").getFullList();
    const newresult = result.map((instructor) => {
      const url = pb.files.getUrl(instructor, instructor.image);
      return {
        id: instructor.id,
        name: instructor.name,
        imageLink: url,
      };
    });
    return newresult;
  });

  if (isLoading) return "Loading...";

  return (
    <>
      <Container as="main" className="flex-grow-1">
        <Row>
          {data!.map((instructor) => (
            <Col md={3}>
              <Instructor
                imageLink={instructor.imageLink}
                name={instructor.name}
                id={instructor.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Instructors;
