const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExerciseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    },
  ],
});

const Workout = mongoose.model('Workout', ExerciseSchema);

module.exports = Workout;
