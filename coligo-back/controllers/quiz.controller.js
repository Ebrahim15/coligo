const Quiz = require('../models/quiz.model');

const addQuiz = async (req, res) => {
    const dueDate = new Date(req.body.dueDate);
    if (dueDate instanceof Date && !isNaN(dueDate)) {
        try {
            const quiz = dueDate ? await Quiz.create({
                    ...req.body,
                    dueDate: dueDate
                }) :
                res.status(500).json({
                    message: "Invalid date"
                })

            res.status(200).json(quiz);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    } else {
        res.status(422).json({
            message: "Invalid date"
        })
    }
};

const getQuizes = async () => {
    try {
        const quizes = await Quiz.find({});
        res.status(200).json(quizes);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateQuiz = async (req, res) => {
    const {
        id
    } = req.params;
    console.log(req.body)
    const dueDate = req.body.dueDate ? new Date(req.body.dueDate) : null;
    console.log(dueDate)

    if (dueDate !== null && dueDate instanceof Date && !isNaN(dueDate)) {
        try {
            const quiz = await Quiz.findByIdAndUpdate(id, {
                ...req.body,
                dueDate: dueDate
            });

            if (!quiz) {
                return res.status(404).json({
                    message: "Quiz not found."
                });
            }

            const updatedQuiz = await Quiz.findById(id);
            res.status(200).json(updatedQuiz);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    } else {
        if (!Object.hasOwn(req.body, 'dueDate')) {
            try {
                const quiz = await Quiz.findByIdAndUpdate(id, req.body);

                if (!quiz) {
                    return res.status(404).json({
                        message: "Quiz not found."
                    });
                }

                const updatedQuiz = await Quiz.findById(id);
                res.status(200).json(updatedQuiz);
            } catch (error) {
                res.status(500).json({
                    message: error.message
                });
            }
        } else {
            res.status(422).json({
                message: "Invalid date"
            })
        }
    }
};

const deleteQuiz = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const quiz = await Quiz.findByIdAndDelete(id);

        if (!quiz) {
            return res.status(404).json({
                message: "Quiz not found."
            });
        }

        res.status(200).json({
            message: "Quiz deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    addQuiz,
    getQuizes,
    updateQuiz,
    deleteQuiz,
};