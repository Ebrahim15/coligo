const mongoose = require('mongoose');

const AnnouncementSchema = mongoose.Schema(
    {
        author: {
            type: String,
            required: [true, "Please enter an author name"]
        },
        title: String,
        description: String,
    },
    {
        timestamps: true
    }
);

const Announcement = mongoose.model("Announcement", AnnouncementSchema);

module.exports = Announcement;