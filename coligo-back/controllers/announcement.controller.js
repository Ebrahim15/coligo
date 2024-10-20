const Announcement = require('../models/announcement.model')

const addAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.create(req.body);
        res.status(200).json(announcement);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const getAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find({});
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateAnnouncement = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const announcement = await Announcement.findByIdAndUpdate(id, req.body);

        if (!announcement) {
            return res.status(404).json({
                message: "Announcement not found"
            });
        }

        const updatedAnnouncement = await Announcement.findById(id);
        res.status(200).json(updatedAnnouncement);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteAnnouncement = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        const announcement = await Announcement.findByIdAndDelete(id);

        if (!announcement) {
            return res.status(404).json({
                messgae: "Announcement not found"
            });
        }

        res.status(200).json({
            message: "Announcement deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAnnouncements,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement
};