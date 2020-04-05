import React, { Fragment, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";
const FileUpload = props => {
	const [file, setFile] = useState("");
	const [filename, setFilename] = useState("Choose File");
	const [uploadedFile, setUploadedFile] = useState({});
	const [message, setMessage] = useState("");
	const [uploadPercentage, setUploadPercentage] = useState(0);
	console.log(props.Key);

	const onChange = e => {
		setFile(e.target.files[0]);
		setFilename(e.target.files[0].name);
	};

	const onSubmit = async e => {
		console.log(e);
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", file);
		console.log("formData");
		console.log(formData);
		try {
			// if(props.Key=="fromSpeaker")
			// {
			//   const res = await axios.post('http://localhost:2000/api/upload', formData, {
			//     headers: {
			//       'Content-Type': 'multipart/form-data'
			//     },
			// }else if{
			//   const res = await axios.post('http://localhost:2000/api/upload', formData, {
			//     headers: {
			//       'Content-Type': 'multipart/form-data'
			//     }
			// },
			let res;
			if (props.Key == "fromSpeaker") {
				res = await axios.post("http://localhost:2000/api/speaker/upload", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
					onUploadProgress: progressEvent => {
						setUploadPercentage(
							parseInt(
								Math.round((progressEvent.loaded * 100) / progressEvent.total),
							),
						);

						// Clear percentage
						setTimeout(() => setUploadPercentage(0), 10000);
					},
				});
			} else if (props.Key == "fromEvent") {
				res = await axios.post("http://localhost:2000/api/event/upload", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
					onUploadProgress: progressEvent => {
						setUploadPercentage(
							parseInt(
								Math.round((progressEvent.loaded * 100) / progressEvent.total),
							),
						);
						setTimeout(() => setUploadPercentage(0), 10000);
					},
				});
			}
			const { fileName, filePath } = res.data;

			setUploadedFile({ fileName, filePath });

			setMessage("File Uploaded");
		} catch (err) {
			if (err.response.status === 500) {
				setMessage("There was a problem with the server");
			} else {
				setMessage(err.response.data.msg);
			}
		}
	};

	return (
		<Fragment>
			{message ? <Message msg={message} /> : null}
			<form onSubmit={onSubmit}>
				<div className="custom-file mb-4">
					<input
						type="file"
						className="custom-file-input"
						id="customFile"
						onChange={onChange}
					/>
					<label className="custom-file-label" htmlFor="customFile">
						{filename}
					</label>
				</div>

				<Progress percentage={uploadPercentage} />

				<input
					type="submit"
					value="Upload"
					className="btn btn-primary btn-block mt-4"
				/>
			</form>
			{uploadedFile ? (
				<div className="row mt-5">
					<div className="col-md-6 m-auto">
						<h3 className="text-center">{uploadedFile.fileName}</h3>
						<img
							style={{ width: "100%" }}
							src={"./../public/uploads/" + uploadedFile.filePath}
							alt=""
						/>
					</div>
				</div>
			) : null}
		</Fragment>
	);
};

export default FileUpload;
