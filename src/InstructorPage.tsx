import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { pb } from "./main";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import VideoCard from "./components/VideoCard";
function InstructorPage() {
  const id = useParams().id as string;
  const { isLoading, data } = useQuery(["Instructor", id], async () => {
    return pb
      .collection("Lesson")
      .getList(1, 100, {
        expand: "videos,course,instructor",
        filter: `instructor="${id}"`,
      })
      .then((result) => {
        return result.items;
      });
  });

  if (isLoading) return "Loading...";

  return (
    <>
      <Container as="main" className="flex-grow-1">
        <Row>
          {data!.map((lesson) =>
            lesson.expand!.videos.map(
              (video: { video_name: string; youtube_id: string }) => (
                <Col md={6}>
                  <VideoCard
                    videoUrl={`https://www.youtube.com/embed/${video.youtube_id}`}
                    title={video.video_name}
                    description={lesson.name}
                  />
                </Col>
              )
            )
          )}
        </Row>
      </Container>
    </>
  );
}

export default InstructorPage;
