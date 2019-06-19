import Layout from "../layout/Layout";
import Videos from "../components/Videos/Videos";
import { Grid } from "semantic-ui-react";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Videos />
      </Layout>
    );
  }
}

export default Index;
