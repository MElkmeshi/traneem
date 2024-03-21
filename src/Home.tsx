import Instructors from "./Instructors";
import Videos from "./Videos";

const CustomLayout = () => {
  return (
    <>
      <h1>All Instructors</h1>
      <Instructors />
      <h1>All Videos</h1>
      <Videos />;
    </>
  );
};

export default CustomLayout;
