const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExerciseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
  exercises: [
    {
      type: {
        type: String,
        // required: 'Exercise type required',
      },
      // !this is for exercise name, this was named from provided front end files!!!
      name: {
        type: String,
        // required: 'Exercise name required',
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
        // required: 'Exercise duration required',
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
    },
  ],
});

ExerciseSchema.methods.totalDurationCounter = function () {
  // const count = 0;
  this.totalDuration = this.exercises.reduce((a, b) => a + b.duration, 0);
  return this.totalDuration;
};

const Workout = mongoose.model('Workout', ExerciseSchema);

module.exports = Workout;
