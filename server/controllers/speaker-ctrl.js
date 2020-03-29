const Speaker = require("../models/speaker-model");

createSpeaker = (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a speaker",
		});
	}
	console.log(Speaker);
	const speaker = new Speaker(body);

	if (!speaker) {
		return res.status(400).json({ success: false, error: err });
	}

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
		speaker.time = body.time;
		speaker.rating = body.rating;
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
};
