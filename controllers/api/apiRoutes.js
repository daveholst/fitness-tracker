const router = require('express').Router();

// bring in Exercise model
const Exercise = require('../../models/Exercise');
const Workout = require('../../models/Workout');

// TODO API routes in here!
// get all workouts
router.get('/workouts', async (req, res) => {
  try {
    const allWorkouts = await Exercise.find({});
    res.send(allWorkouts);
  } catch (error) {
    console.error(error);
    res.status(500).json('could not fetch all records');
  }
});

// create a workout -- Creates a blank workout with NO exercise data
router.post('/workouts', async (req, res) => {
  const exercise = new Exercise(req.body);
  try {
    const newWorkout = await Workout.create(exercise);
    res.json(newWorkout);
  } catch (error) {
    console.error(error);
    res.status(500).json('could not create new workout');
  }
});

// update a workout
router.put('/workouts/:id', async (req, res) => {
  const { id } = req.params;
  const newExerciseData = await Exercise.create(req.body);
  // const newExerciseData = req.body;
  console.log(newExerciseData);
  try {
    const data = await Workout.findByIdAndUpdate(
      id,
      {
        $push: { exercises: newExerciseData._id },
      },
      {
        new: true,
      }
    );
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json('could not update workout');
  }
});

module.exports = router;
