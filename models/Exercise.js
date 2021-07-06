const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    required: 'Exercise type required',
  },
  // !this is for exercise name, this was named from provided front end files!!!
  name: {
    type: String,
    required: 'Exercise name required',
  },
  distance: {
    type: Number,
  },
  duration: {
    type: Number,
    required: 'Exercise duration required',
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
