import { Grid, Segment } from "semantic-ui-react";

import VideoPlaceHolder from "../VideoPlaceHolder/VideoPlaceholder";

const VideosPlaceholder = React.memo(() => {
  return (
    <Segment inverted>
      <Grid inverted columns={5}>
        {new Array(8).fill("dummy").map((item, i) => (
          <VideoPlaceHolder key={i} />
        ))}
      </Grid>
    </Segment>
  );
});
export default VideosPlaceholder;
