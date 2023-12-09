const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    approvedStudents: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    }
});

const Project = mongoose.model("project", projectSchema);
module.exports = Project;
