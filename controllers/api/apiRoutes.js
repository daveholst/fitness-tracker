const router = require('express').Router();

// bring in Exercise model
const Exercise = require('../../models/Exercise');

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

// create a workout
router.post('/workouts', async (req, res) => {
  const exercise = new Exercise(req.body);
  try {
    const newWorkout = await Exercise.create(exercise);
    res.json(newWorkout);
  } catch (error) {
    console.error(error);
    res.status(500).json('could not create exercise');
  }
});

// update a workout
router.put('/workouts/:id', async (req, res) => {
  const { id } = req.params;
  const newWorkoutData = req.body;
  try {
    const data = await Exercise.findByIdAndUpdate(id, newWorkoutData, {
      new: true,
    });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json('could not update workout');
  }
});

module.exports = router;
