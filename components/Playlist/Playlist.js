import { Image, Grid, Divider, Header } from "semantic-ui-react";
import Link from "next/link";

const Playlist = ({ playlist, type }) => {
  let videoId =
    type === "playlist" ? playlist.snippet.resourceId.videoId : playlist.id;
  let url = {
    seoUrl: `/player/${videoId}/video`,
    queryUrl: `/player?id=${videoId}&type=video`
  };
  return (
    <React.Fragment>
      <Divider />
      <div style={{ cursor: "pointer" }}>
        <Link as={url.seoUrl} href={url.queryUrl}>
          <Grid inverted>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image
                  src={playlist.snippet.thumbnails.medium.url}
                  size="small"
                  verticalAlign="top"
                />
              </Grid.Column>
              <Grid.Column>
                <Header as="h4" inverted color="black">
                  {playlist.snippet.title}
                </Header>
                <Header sub as="h6" inverted color="grey">
                  this is the description
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Playlist);
