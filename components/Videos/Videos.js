import { Grid, Header, Segment } from "semantic-ui-react";

import VideosPlaceholder from "../VideosPlaceholder/VideosPlaceholder";
import Video from "../Video/Video";
import { fetchPlaylist, fetchVideos } from "../../api/fetch";
import { FetchError } from "../../helpers/errors";
import VideosStack from "../VideosStack/VideosStack";
class Videos extends React.Component {
  state = { fetching: true, playlists: [], popularVideos: [], error: false };
  componentDidMount() {
    fetchPlaylist()
      .then(data => {
        this.setState(() => ({ playlists: data.items }));
        return fetchVideos();
      })
      .then(data => {
        this.setState(() => ({ popularVideos: data.items, fetching: false }));
        return fetchVideos();
      })
      .catch(error => {
        if (error instanceof FetchError) {
          this.setState(() => ({ error: true, fetching: false }));
        }
      });
  }
  render() {
    console.log(this.state.playlists);
    let playlists = this.state.playlists;
    return (
      <Segment inverted>
        {this.state.fetching ? (
          <React.Fragment>
            <VideosPlaceholder />
            <VideosPlaceholder />
          </React.Fragment>
        ) : this.state.error ? (
          <div> cant fetch playlists</div>
        ) : (
          <React.Fragment>
            <Segment inverted>
              <Header inverted size="medium">
                Playlists
              </Header>
            </Segment>

            <VideosStack type="playlist" resources={this.state.playlists} />
            <Segment inverted>
              <Header inverted size="medium">
                Popular Videos
              </Header>
            </Segment>

            <VideosStack type="video" resources={this.state.popularVideos} />
          </React.Fragment>
        )}
      </Segment>
    );
  }
}

export default Videos;
