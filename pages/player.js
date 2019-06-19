import { Grid, Segment } from "semantic-ui-react";
import { withRouter } from "next/router";

import Layer from "../layout/Layout";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import { fetchVideos, fetchPlaylistItems } from "../api/fetch";
import Playlists from "../components/Playlists/Playlists";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.router.query.id;
    this.state = { currentVideo: {}, playlistsItems: [] };
  }
  static async getInitialProps(ctx) {
    if (ctx.query.type === "playlist") {
      let data = await fetchPlaylistItems(ctx.query.id);
      return {
        currentVideo: data.items[0],
        videoId: data.items[0].snippet.resourceId.videoId,
        playlistsItems: data.items,
        type: "playlist"
      };
    } else {
      let data = await fetchVideos(ctx.query.id);
      let otherVideos = await fetchVideos();
      return {
        currentVideo: data.items[0],
        videoId: data.items[0].id,
        playlistsItems: otherVideos.items,
        type: "video"
      };
    }
  }
  render() {
    return (
      <Layer>
        <Grid inverted padded columns={2}>
          <Grid.Row columns="equal">
            <Grid.Column floated="left" width={11}>
              <VideoPlayer
                videoId={this.props.videoId}
                data={this.props.currentVideo}
              />
            </Grid.Column>

            <Grid.Column width={5}>
              <div
                style={{
                  overflowY: "scroll",
                  height: "80.6vh"
                }}
              >
                <Playlists
                  type={this.props.type}
                  playlistsItems={this.props.playlistsItems}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layer>
    );
  }
}
export default withRouter(Player);
