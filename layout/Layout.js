import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import { Grid, Segment } from "semantic-ui-react";

class Layout extends React.PureComponent {
  render() {
    return (
      <Segment inverted>
        <Head>
          <title key="title"> Vidify </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </Head>
        <div>
          <Navbar />
          {this.props.children}
        </div>
      </Segment>
    );
  }
}
export default Layout;
