import { Embed, Segment, Header } from "semantic-ui-react";

const VideoPlayer = props => {
  return (
    <Segment inverted>
      <Embed
        autoplay
        brandedUI
        color="dark"
        hd
        id={props.videoId}
        placeholder={props.data.snippet.thumbnails.standard.url}
        source="youtube"
      />
      <Header content={props.data.snippet.title} as="h2" />
    </Segment>
  );
};

export default React.memo(VideoPlayer);
