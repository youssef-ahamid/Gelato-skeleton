module.exports = User = {
    name: {
		type: String,
		required: true,
	},
    email: {
		type: String,
		required: true,
	},
	image:  {
		type: String,
	},
	createdAt: { type: Date, default: Date.now },
};