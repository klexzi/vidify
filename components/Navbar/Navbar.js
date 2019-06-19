import { Grid, Search, Header, Segment, Menu } from "semantic-ui-react";

class Navbar extends React.Component {
  render() {
    return (
      <Segment inverted>
        <Menu secondary inverted>
          <Menu.Item>
            <Menu.Header>
              <Header size="huge" inverted>
                Vidify
              </Header>
            </Menu.Header>
          </Menu.Item>
          <Menu.Item position="right">Signup</Menu.Item>
          <Menu.Item postition="right">Login</Menu.Item>
        </Menu>
      </Segment>
    );
  }
}

export default Navbar;
