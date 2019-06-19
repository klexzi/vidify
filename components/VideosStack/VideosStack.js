import { Grid } from "semantic-ui-react";
import Video from "../Video/Video";
const VideosStack = ({ resources, type }) => (
  <Grid stackable columns={5}>
    {resources.map(data => (
      <Video type={type} key={data.id} data={data} />
    ))}
  </Grid>
);

export default React.memo(VideosStack);
