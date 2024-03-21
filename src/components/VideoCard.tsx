import { Card } from "react-bootstrap";

const VideoCard = ({
  videoUrl,
  title,
  description,
}: {
  videoUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={videoUrl}
            title={title}
            width="100%"
            height="300"
            allowFullScreen
          ></iframe>
        </div>
        <Card.Title className="mt-2">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
