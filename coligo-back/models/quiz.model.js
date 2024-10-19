const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, "Please enter a title"]
        }, 
        course: {
            type: String,
            required: [true, "Please enter course name"]
        },
        topic: {
            type: String,
            required: [true, "Please specify the topic"]
        },
        dueDate: {
            type: String,
            required: [true, "Please enter a due date"]
        }, 
        taskType: {
            type: String,
            required: [true, "Please enter a task type"]
        }
    },
    {
        timestamps: true
    }
);

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;