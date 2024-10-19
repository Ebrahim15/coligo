const mongoose = require('mongoose');

const AnnouncementSchema = mongoose.Schema(
    {
        author: {
            type: String,
            required: [true, "Please enter an author name"]
        },
        authorImage: {
            type: String,
            required: [true, "Please enter an image url"]
        },
        title: {
            type: String,
            required: [true, "Please enter a title"]
        },
        description: {
            type: String,
            required: [true, "Please enter a description"]
        },
    },
    {
        timestamps: true
    }
);

const Announcement = mongoose.model("Announcement", AnnouncementSchema);

module.exports = Announcement;