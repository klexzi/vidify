import { Image, Grid, Segment, Header } from "semantic-ui-react";
import Link from "next/link";

const Video = React.memo(({ data, type }) => {
  let style = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "100px",
    maxHeight: "100px"
  };
  let thumbnail = data.snippet.thumbnails.medium.url;
  let { title, description, channelTitle } = data.snippet;
  let id = data.id;
  let url = {
    seoUrl: `player/${id}/${type}`,
    queryUrl: `player?id=${id}&type=${type}`
  };
  return (
    <Link as={url.seoUrl} href={url.queryUrl}>
      <Grid.Column style={{ cursor: "pointer" }}>
        <Segment inverted>
          <Image centered src={thumbnail} size="medium" />
          <Header sub>{title}</Header>
          <Header color="grey">{channelTitle}</Header>
        </Segment>
      </Grid.Column>
    </Link>
  );
});

export default Video;
