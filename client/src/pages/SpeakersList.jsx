import React, { Component } from "react";
import ReactTable from "react-table";
import api from "../api";

class SpeakersList extends Component {
	constructor(props) {
		super(props);
		console.log("props : " + props);

		this.state = {
			speakers: [],
			columns: [],
			isLoading: false,
		};
	}

	componentDidMount = async () => {
		this.setState({ isLoading: true });

		await api.getAllSpeakers().then(speakers => {
			console.log("Data : " + api.getAllSpeakers());
			console.log(speakers.data.data);

			this.setState({
				speakers: speakers.data.data,
				isLoading: false,
			});
		});
	};

	render() {
		console.log(this.state.speakers);
		const listItems = this.state.speakers.map((number) =>
		<React.Fragment>
		<li>{number.name}</li>
		<li>{number.age}</li>
		<li>{number.UserName}</li>
		<li>{number.email}</li>
		<li>{number.street}</li>
		<li>{number.city}</li>
		<li>{number.building}</li>
		</React.Fragment>

		);
		return (
			<ul>{listItems}</ul>
		  
		);
	}
}

export default SpeakersList;
