
const Event = require("../models/event-model");

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
createEvent = (req, res) => {
	req.body.profileImg=image;
	const body = req.body;
	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a event",
		});
	}
	console.log(Event);
	const event = new Event(body);

	if (!event) {
		return res.status(400).json({ success: false, error: err });
	}

	event
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: event._id,
				message: "Event created!",
			});
		})
		.catch(error => {
			return res.status(400).json({
				error,
				message: "Event not created!",
			});
		});
};

updateEvent = async (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a body to update",
		});
	}

	Event.findOne({ _id: req.params.id }, (err, event) => {
		if (err) {
			return res.status(404).json({
				err,
				message: "Event not found!",
			});
		}
		event.title = body.title;
		event.description = body.description;
		event.time = body.time;
		event.rating = body.rating;
		event.mainSpeaker = body.mainSpeaker;
		event.otherSpeakers = body.otherSpeakers;
		
		event
			.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: event._id,
					message: "Event updated!",
				});
			})
			.catch(error => {
				return res.status(404).json({
					error,
					message: "Event not updated!",
				});
			});
	});
};

deleteEvent = async (req, res) => {
	await Event.findOneAndDelete({ _id: req.params.id }, (err, event) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!event) {
			return res
				.status(404)
				.json({ success: false, error: `Event not found` });
		}

		return res.status(200).json({ success: true, data: event });
	}).catch(err => console.log(err));
};

getEventById = async (req, res) => {
	await Event.findOne({ _id: req.params.id }, (err, event) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!event) {
			return res
				.status(404)
				.json({ success: false, error: `Event not found` });
		}
		return res.status(200).json({ success: true, data: event });
	}).catch(err => console.log(err));
};

getEvents = async (req, res) => {
	await Event.find({}, (err, event) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!event.length) {
			return res
				.status(404)
				.json({ success: false, error: `Event not found` });
		}
        console.log(event);
        //console.log(res);

		return res.status(200).json({ success: true, data: event });
	}).catch(err => console.log(err));
};

module.exports = {
	createEvent,
	updateEvent,
	deleteEvent,
	getEvents,
	getEventById,
	uploadImage,
	getSpeakers
};
