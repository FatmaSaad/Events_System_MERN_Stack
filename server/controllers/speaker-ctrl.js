const Speaker = require("../models/speaker-model");
// Upload Endpoint
let image="";
uploadImage = (req, res) => {
    console.log ("upload path")
	if (req.files === null) {
		return res.status(400).json({ msg: "No file uploaded" });
	}

	const file = req.files.file;

	file.mv(`../client/public/uploads/${file.name}`, err => {
		if (err) {
			console.error(err);
			return res.status(500).send(err);
		}
		image=file.name;
		res.json({ fileName: file.name, filePath: `${file.name}` });
	});
};

createSpeaker = (req, res) => {
	req.body.profileImg=image;
	const body = req.body;
	console.log ("body");
	console.log (body)

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a speaker",
		});
	}
	console.log(Speaker);
	const speaker = new Speaker(body);

	
	speaker
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: speaker._id,
				message: "Speaker created!",
			});
		})
		.catch(error => {
			return res.status(400).json({
				error,
				message: "Speaker not created!",
			});
		});
};

updateSpeaker = async (req, res) => {
	console.log (req)
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a body to update",
		});
	}

	Speaker.findOne({ _id: req.params.id }, (err, speaker) => {
		if (err) {
			return res.status(404).json({
				err,
				message: "Speaker not found!",
			});
		}
		speaker.name = body.name;
		speaker.age = body.age;
		speaker.UserName = body.UserName;
		speaker.email = body.email;
		speaker.Password = body.Password;
		speaker.city = body.city;
		speaker.street = body.street;
		speaker.building = body.building;
		speaker
			.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: speaker._id,
					message: "Speaker updated!",
				});
			})
			.catch(error => {
				return res.status(404).json({
					error,
					message: "Speaker not updated!",
				});
			});
	});
};

deleteSpeaker = async (req, res) => {
	await Speaker.findOneAndDelete({ _id: req.params.id }, (err, speaker) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!speaker) {
			return res
				.status(404)
				.json({ success: false, error: `Speaker not found` });
		}

		return res.status(200).json({ success: true, data: speaker });
	}).catch(err => console.log(err));
};

getSpeakerById = async (req, res) => {
	await Speaker.findOne({ _id: req.params.id }, (err, speaker) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!speaker) {
			return res
				.status(404)
				.json({ success: false, error: `Speaker not found` });
		}
		return res.status(200).json({ success: true, data: speaker });
	}).catch(err => console.log(err));
};

getSpeakers = async (req, res) => {
	await Speaker.find({}, (err, speaker) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!speaker.length) {
			return res
				.status(404)
				.json({ success: false, error: `Speaker not found` });
		}
        console.log(speaker);
        //console.log(res);

		return res.status(200).json({ success: true, data: speaker });
	}).catch(err => console.log(err));
};

module.exports = {
	createSpeaker,
	updateSpeaker,
	deleteSpeaker,
	getSpeakers,
	getSpeakerById,
	uploadImage
};
