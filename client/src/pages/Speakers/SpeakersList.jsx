import React, { Component } from "react";
// import ReactTable from "react-table";
import api from "../../api";

import styled from "styled-components";

import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'

const Wrapper = styled.div`
	padding: 0 40px 40px 40px;
`;

const Update = styled.div`
	color: #ef9b0f;
	cursor: pointer;
`;

const Delete = styled.div`
	color: #ff0000;
	cursor: pointer;
`;

class UpdateSpeaker extends Component {
	updateSpeakerById = event => {
		event.preventDefault();
		console.log("id : " + this.props.id);
		window.location.href = `/speakers/update/${this.props.id}`;
	};

	render() {
		return <Update onClick={this.updateSpeakerById}>Update</Update>;
	}
}
class DeleteSpeaker extends Component {
	deleteUser = event => {
		event.preventDefault();

		if (
			window.confirm(
				`Do tou want to delete the speaker ${this.props.id} permanently?`,
			)
		) {
			api.deleteSpeakerById(this.props.id);
			window.location.reload();
		}
	};

	render() {
		return <Delete onClick={this.deleteUser}>Delete</Delete>;
	}
}

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
			console.log(speakers.data.data);

			this.setState({
				speakers: speakers.data.data,
				isLoading: false,
			});
			console.log(this.state.speakers[0]);
		});
	};

	render() {
		const { speakers, isLoading } = this.state;
		console.log("props : " + this.props);
		
		const columns = [
			{
				Header: "Image",
				Cell: row => {
					return (
						<div>
							<img height={50} src={row.original.profileImg} />
						</div>
					);
				},
				id: "status",
			},
			// {
			// 	Header: "ID",
			// 	accessor: "_id",
			// 	filterable: true,
			// },
			{
				Header: "Name",
				accessor: "name",
				filterable: true,
			},
			{
				Header: "User Name",
				accessor: "UserName",
				filterable: true,
			},
			{
				Header: "Email",
				accessor: "email",
				filterable: true,
			},
			{
				Header: "Age",
				accessor: "age",
				filterable: true,
			},
			{
				Header: "Street",
				accessor: "street",
				filterable: true,
			},
			{
				Header: "City",
				accessor: "city",
				filterable: true,
			},
			{
				Header: "Building",
				accessor: "building",
				filterable: true,
			},
			{
				Header: "",
				accessor: "",
				Cell: function(props) {
					return (
						<span>
							<DeleteSpeaker id={props.original._id} />
						</span>
					);
				},
			},
			{
				Header: "",
				accessor: "",
				Cell: function(props) {
					return (
						<span>
							<UpdateSpeaker id={props.original._id} />
						</span>
					);
				},
			},
		];

		console.log(this.state.speakers);

		let showTable = true;
		if (!speakers.length) {
			showTable = false;
			console.log("false");
			return <div>false</div>;
		}
		console.log(this.state.speakers);
		console.log(columns);

		return (
			<Wrapper>
				{showTable && (
					<ReactTable
						data={speakers}
						columns={columns}
						loading={isLoading}
						defaultPageSize={10}
						showPageSizeOptions={true}
						minRows={0}
					/>
				)}
			</Wrapper>
		);
	}
}

export default SpeakersList;
