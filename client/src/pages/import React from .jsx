import React from "react";
import MaterialTable from "material-table";

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
    getData = async () => {
		this.setState({ isLoading: true });
		await api.getAllSpeakers().then(speakers => {
			const data = speakers.data.data;
			console.log(data);
				});
	};
    	const [state, setState] = React.useState({
		columns: [
			{
				dataField: "id",
				text: "ID",
				filterable: true,
			},
			{
				dataField: "name",
				text: "Name",
				filterable: true,
			},
			{
				dataField: "UserName",
				text: "User Name",
				filterable: true,
			},
			{
				dataField: "email",
				text: "Email",
				filterable: true,
			},
			{
				dataField: "age",
				text: "Age",
				filterable: true,
			},
			{
				dataField: "street",
				text: "Street",
				filterable: true,
			},
			{
				dataField: "city",
				text: "City",
				filterable: true,
			},
			{
				dataField: "building",
				text: "Building",
				filterable: true,
			},
		],
		data: [
			{ name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
			{
				name: "Zerya Betül",
				surname: "Baran",
				birthYear: 2017,
				birthCity: 34,
			},
		],
	});

	return (
		<MaterialTable
			title="Editable Example"
			columns={state.columns}
			data={state.data}
			editable={{
				onRowAdd: newData =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve();
							setState(prevState => {
								const data = [...prevState.data];
								data.push(newData);
								return { ...prevState, data };
							});
						}, 600);
					}),
				onRowUpdate: (newData, oldData) =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve();
							if (oldData) {
								setState(prevState => {
									const data = [...prevState.data];
									data[data.indexOf(oldData)] = newData;
									return { ...prevState, data };
								});
							}
						}, 600);
					}),
				onRowDelete: oldData =>
					new Promise(resolve => {
						setTimeout(() => {
							resolve();
							setState(prevState => {
								const data = [...prevState.data];
								data.splice(data.indexOf(oldData), 1);
								return { ...prevState, data };
							});
						}, 600);
					}),
			}}
		/>
	);
}
