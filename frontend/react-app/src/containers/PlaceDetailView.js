import React from "react";
import axios from "axios";
import { button, Card } from "antd";
import CustomForm from "../components/Form";

class PlaceDetail extends React.Component {
  state = {
    place: {}
  };

  componentDidMount() {
    const placeID = this.props.match.params.placeID;
    axios.get(`http://127.0.0.1:8000/api/${placeID}`).then(res => {
      this.setState({
        place: res.data
      });
    });
  }

  handleDelete = event => {
    const placeID = this.props.match.params.placeID;
    axios.delete(`http://127.0.0.1:8000/api/${placeID}`);
    this.props.history.push("/");
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <Card title={this.state.place.title}>
          <p>{this.state.place.content}</p>
        </Card>
        <CustomForm
          requestType="put"
          placeID={this.props.match.params.placeID}
          btnText="Update"
        />
        <form onSubmit={this.handleDelete}>
          <button type="danger" htmlType="submit">
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default PlaceDetail;
