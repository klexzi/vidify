import { Grid, Placeholder } from "semantic-ui-react";
const VideoPlaceHolder = React.memo(props => {
  return (
    <Grid.Column inverted style={{ cursor: "pointer" }}>
      <Placeholder inverted>
        <Placeholder.Image square />
      </Placeholder>
      <Placeholder inverted>
        <Placeholder.Header>
          <Placeholder.Line length="very short" />
          <Placeholder.Line length="medium" />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length="short" />
        </Placeholder.Paragraph>
      </Placeholder>
    </Grid.Column>
  );
});

export default VideoPlaceHolder;
