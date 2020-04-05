import React, { Component } from "react";
import api from "../../api";
import styled from "styled-components";
import FileUpload from "../../components/FileUpload";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import Select from "react-select";
let SpeakersMenu = [];
var output_data = {
	element: []
  };
const Title = styled.h1.attrs({
	className: "h1",
})``;

const Wrapper = styled.div.attrs({
	className: "form-group",
})`
	margin: 0 30px;
`;

const Label = styled.label`
	margin: 5px;
`;

const InputText = styled.input.attrs({
	className: "form-control",
})`
	margin: 5px;
`;

const Button = styled.button.attrs({
	className: `btn btn-primary`,
})`
	margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
	className: `btn btn-danger`,
})`
	margin: 15px 15px 15px 5px;
`;


class EventsInsert extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			time: "",
			rating: "",
			mainSpeaker: "",
			otherSpeakers: "",
			profileImg: "",
		};
	}

	componentWillMount = async () => {
		await api.getAllSpeakers().then(speakers => {
			console.log(speakers.data.data);
			SpeakersMenu=speakers.data.data;
			SpeakersMenu.map(x => ({

			}))
			console.log(SpeakersMenu[0].name);



		
			  
			  for (var key in speakers.data.data) {  
				var output = {}; // create new empty object on each iteration
				output.value = speakers.data.data[key]._id;
				output.label = speakers.data.data[key].name;
				output_data.element.push(output);
			  }
			  console.log(output_data);

		});
	};
	onFileChange = async event => {
		this.setState({ profileImg: event.target.files[0] });
	};
	handleChangeInputTitle = async event => {
		const title = event.target.value;
		this.setState({ title });
	};

	handleChangeInputDescription = async event => {
		const description = event.target.value;
		this.setState({ description });
	};

	handleChangeInputMainSpeaker = async mainSpeaker => {
		this.setState(
			{ mainSpeaker },
			() => console.log(`Option selected:`, this.state.mainSpeaker)
		  );
	};
	handleChangeInputOtherSpeakers = otherSpeakers => {
		this.setState(
		  { otherSpeakers },
		  () => console.log(`Option selected:`, this.state.otherSpeakers)
		);
	  };
	handleChangeInputRating = async event => {
		const rating = event.target.validity.valid
			? event.target.value
			: this.state.rating;

		this.setState({ rating });
	};

	handleChangeInputTime = async event => {
		const time = event.target.value;
		this.setState({ time });
	};
	handleIncludeEvent = async () => {
		const {
			title,
			description,
			time,
			rating,
		profileImg,
		} = this.state;
		const mainSpeaker =this.state.mainSpeaker.value;
		const otherSpeakers= this.state.otherSpeakers.value;
		const payload = {
			title,
			description,
			time,
			rating,
			mainSpeaker,
			otherSpeakers,
			profileImg,
		};
		console.log("payload " + payload);
		await api.insertEvent(payload).then(res => {
			console.log(payload);
			window.alert(`Event inserted successfully`);
			this.setState({
				title: "",
				description: "",
				time: "",
				rating: "",
				mainSpeaker: "",
				otherSpeakers: "",
				profileImg: "",
			});
		});
	};
	render() {
		console.log(output_data.element);

		const {
			title,
			description,
			time,
			rating,
			mainSpeaker,
			otherSpeakers,
			profileImg,
		} = this.state;
		
		return (
			<Wrapper>
				<Title> Add Event</Title>
				<Label> title: </Label>
				<InputText
					type="text"
					value={title}
					onChange={this.handleChangeInputTitle}
				/>
				<Label>description: </Label>
				<InputText
					type="numper"
					value={description}
					onChange={this.handleChangeInputDescription}
				/>
				<Label>rating: </Label>
				<InputText
					type="text"
					value={rating}
					onChange={this.handleChangeInputRating}
				/>
				<Label>time: </Label>
				<InputText
					type="text"
					value={time}
					onChange={this.handleChangeInputTime}
				/>
				<Label>mainSpeaker: </Label>
				<Select
					value={mainSpeaker}
					onChange={this.handleChangeInputMainSpeaker}
					options={output_data.element}
				/>
				<Label>otherSpeakers: </Label>

				<Select
					value={otherSpeakers}
					onChange={this.handleChangeInputOtherSpeakers}
					options={output_data.element}
				/>

				<div className="container mt-4">
					<h1 className="display-4 text-center mb-4">
						<i className="fab fa-react" /> Upload Image
					</h1>

					<FileUpload Key="fromEvent" />
				</div>
				<Button onClick={this.handleIncludeEvent}>Add Event</Button>
				<CancelButton href={"/speakers/list"}>Cancel</CancelButton>
			</Wrapper>
		);
	}
}

export default EventsInsert;
