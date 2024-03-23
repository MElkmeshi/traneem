import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import VideoCard from "./components/VideoCard";
import { pb } from "./main";
import { useQuery } from "react-query";
import LoadingBox from "./components/LoadingBox";
function Videos() {
  const { isLoading, data } = useQuery("Videos", () =>
    pb
      .collection("Lesson")
      .getFullList({
        expand: "videos,course,instructor",
      })
      .then((result) => {
        return result;
      })
  );

  if (isLoading) return <LoadingBox />;

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

export default Videos;
