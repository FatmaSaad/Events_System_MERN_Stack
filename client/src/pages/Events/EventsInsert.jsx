// import React, { Component } from "react";
// import api from "../../api";
// import styled from "styled-components";
// import { DropdownList } from "react-widgets";
// const Title = styled.h1.attrs({
// 	className: "h1",
// })``;

// const Wrapper = styled.div.attrs({
// 	className: "form-group",
// })`
// 	margin: 0 30px;
// `;

// const Label = styled.label`
// 	margin: 5px;
// `;

// const InputText = styled.input.attrs({
// 	className: "form-control",
// })`
// 	margin: 5px;
// `;

// const Button = styled.button.attrs({
// 	className: `btn btn-primary`,
// })`
// 	margin: 15px 15px 15px 5px;
// `;

// const CancelButton = styled.a.attrs({
// 	className: `btn btn-danger`,
// })`
// 	margin: 15px 15px 15px 5px;
// `;

// class SpeakersInsert extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: "",
// 			age: "",
// 			UserName: "",
// 			email: "",
// 			Password: "",
// 			city: "",
// 			street: "",
// 			building: "",
// 			profileImg: "",
// 		};
// 	}
// 	onFileChange = async event => {
// 		this.setState({ profileImg: event.target.files[0] });
// 	};
// 	handleChangeInputName = async event => {
// 		const name = event.target.value;
// 		this.setState({ name });
// 	};

// 	handleChangeInputAge = async event => {
// 		const age = event.target.value;
// 		this.setState({ age });
// 	};
// 	handleChangeInputUserName = async event => {
// 		const UserName = event.target.value;
// 		this.setState({ UserName });
// 	};
// 	handleChangeInputEmail = async event => {
// 		const email = event.target.value;
// 		this.setState({ email });
// 	};
// 	handleChangeInputPassword = async event => {
// 		const Password = event.target.value;
// 		this.setState({ Password });
// 	};
// 	handleChangeInputCity = async event => {
// 		const city = event.target.value;
// 		this.setState({ city });
// 	};
// 	handleChangeInputStreet = async event => {
// 		const street = event.target.value;
// 		this.setState({ street });
// 	};
// 	handleChangeInputBuilding = async event => {
// 		const building = event.target.value;
// 		this.setState({ building });
// 	};
// 	handleIncludeSpeaker = async () => {
// 		const {
// 			name,
// 			age,
// 			UserName,
// 			email,
// 			Password,
// 			city,
// 			street,
// 			building,
// 			profileImg,
// 		} = this.state;
// 		const payload = {
// 			name,
// 			age,
// 			UserName,
// 			email,
// 			Password,
// 			city,
// 			street,
// 			building,
// 			profileImg,
// 		};
// 		console.log("payload " + payload);
// 		await api.insertSpeaker(payload).then(res => {
// 			console.log(payload);
// 			window.alert(`Speaker inserted successfully`);
// 			this.setState({
// 				name: "",
// 				age: "",
// 				UserName: "",
// 				email: "",
// 				Password: "",
// 				city: "",
// 				street: "",
// 				building: "",
// 				profileImg: "",
// 			});
// 		});
// 	};

// 	render() {
// 		const {
// 			name,
// 			age,
// 			UserName,
// 			Password,
// 			email,
// 			city,
// 			street,
// 			building,
// 			profileImg,
// 		} = this.state;
// 		// let { DropdownList } = ReactWidgets;

// 		let colors = ["orange", "red", "blue", "purple"];
// 		return (
// 			<Wrapper>
// 				<Title> Add Speaker</Title>

// 				<Label>Name: </Label>
// 				<InputText
// 					type="text"
// 					value={name}
// 					onChange={this.handleChangeInputName}
// 				/>
// 				<Label>Age: </Label>
// 				<InputText
// 					type="numper"
// 					value={age}
// 					onChange={this.handleChangeInputAge}
// 				/>
// 				<Label>User Name: </Label>
// 				<InputText
// 					type="text"
// 					value={UserName}
// 					onChange={this.handleChangeInputUserName}
// 				/>
// 				<Label>Email: </Label>
// 				<InputText
// 					type="text"
// 					value={email}
// 					onChange={this.handleChangeInputEmail}
// 				/>
// 				<Label>Password: </Label>
// 				<InputText
// 					type="text"
// 					value={Password}
// 					onChange={this.handleChangeInputPassword}
// 				/>
// 				<Label> Address </Label>
// 				<Label>city: </Label>
// 				<InputText
// 					type="text"
// 					value={city}
// 					onChange={this.handleChangeInputCity}
// 				/>
// 				<Label>street: </Label>
// 				<InputText
// 					type="text"
// 					value={street}
// 					onChange={this.handleChangeInputStreet}
// 				/>
// 				<Label>building: </Label>
// 				<DropdownList disabled data={colors} defaultValue={"orange"} />
// 				<Button onClick={this.handleIncludeSpeaker}>Add Speaker</Button>
// 				<CancelButton href={"/speakers/list"}>Cancel</CancelButton>
// 			</Wrapper>
// 		);
// 	}
// }

// export default SpeakersInsert;
