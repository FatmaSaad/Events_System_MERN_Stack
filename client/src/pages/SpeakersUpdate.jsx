import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class SpeakersUpdate extends Component {
    constructor(props) {
        super(props)
        console.log("props : "+ this.props.match.params.id);

        this.state = {
            id: this.props.match.params.id,
            name: ' ',
			age: ' ',
			UserName: ' ',
			email: ' ',
			Password: ' ',
			city: ' ',
			street: ' ',
			building: ' ',
        }
    }
	handleChangeInputName = async event => {
		const name = event.target.value;
		this.setState({ name });
	};

	handleChangeInputAge = async event => {
		const age = event.target.value;
		this.setState({ age });
	};
	handleChangeInputUserName = async event => {
		const UserName = event.target.value;
		this.setState({ UserName });
	};
	handleChangeInputEmail = async event => {
		const email = event.target.value;
		this.setState({ email });
	};
	handleChangeInputPassword = async event => {
		const Password = event.target.value;
		this.setState({ Password });
	};
	handleChangeInputCity = async event => {
		const city = event.target.value;
		this.setState({ city });
	};
	handleChangeInputStreet = async event => {
		const street = event.target.value;
		this.setState({ street });
	};
	handleChangeInputBuilding = async event => {
		const building = event.target.value;
		this.setState({ building });
	};
  
    handleUpdateSpeaker = async () => {
		const {id,
			name,
			age,
			UserName,
			email,
			Password,
			city,
			street,
			building,
		} = this.state;
		const payload = {
			name,
			age,
			UserName,
			email,
			Password,
			city,
			street,
			building,
		};
		await api.updateSpeakerById(id,payload).then(res => {
            console.log("state : "+ this.state);

            console.log("updateSpeakerById : "+ id);
            console.log("payload : "+ payload);

			window.alert(`Speaker Updated successfully`);
			this.setState({
				name: ' ',
				age: ' ',
				UserName: ' ',
				email: ' ',
				Password: ' ',
				city: ' ',
				street: ' ',
				building: ' ',
			});
		});
	};

    componentDidMount = async () => {
        const { id } = this.state
        const speaker = await api.getSpeakerById(id)
        console.log (speaker.data.data);

        this.setState({
            name: speaker.data.data.name,
            age: speaker.data.data.age,
            UserName: speaker.data.data.UserName,
            email: speaker.data.data.email,
            Password: speaker.data.data.Password,
            city: speaker.data.data.city,
            street: speaker.data.data.street,
            building: speaker.data.data.building,
        })
        console.log ("state : "+this.state);
    }

    render() {
        console.log ("state : "+this.state);

		const { name, age, UserName, Password,email ,city, street, building } = this.state;
        return (
            <Wrapper>
                <Title>Create Speaker</Title>

                
                <Label>Name: </Label>
				<InputText
					type="text"
					value={name}
					onChange={this.handleChangeInputName}
				/>
				<Label>Age: </Label>
				<InputText
					type="numper"
					value={age}
					onChange={this.handleChangeInputAge}
				/>
				<Label>User Name: </Label>
				<InputText
					type="text"
					value={UserName}
					onChange={this.handleChangeInputUserName}
				/>
				<Label>Email: </Label>
				<InputText
					type="text"
					value={email}
					onChange={this.handleChangeInputEmail}
				/>
				<Label>Password: </Label>
				<InputText
					type="text"
					value={Password}
					onChange={this.handleChangeInputPassword}
				/>
				<Label> Address </Label>
				<Label>city: </Label>
				<InputText
					type="text"
					value={city}
					onChange={this.handleChangeInputCity}
				/>
				<Label>street: </Label>
				<InputText
					type="text"
					value={street}
					onChange={this.handleChangeInputStreet}
				/>
				<Label>building: </Label>
				<InputText
					type="text"
					value={building}
					onChange={this.handleChangeInputBuilding}
				/>

                <Button onClick={this.handleUpdateSpeaker}>Update Speaker</Button>
                <CancelButton href={'/speakers/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default SpeakersUpdate
