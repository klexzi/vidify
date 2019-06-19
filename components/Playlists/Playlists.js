import { Segment, Item } from "semantic-ui-react";
import Playlist from "../Playlist/Playlist";

class Playlists extends React.Component {
  render() {
    return (
      <Item.Group>
        {this.props.playlistsItems.map(item => (
          <Playlist type={this.props.type} playlist={item} />
        ))}
      </Item.Group>
    );
  }
}

export default Playlists;
