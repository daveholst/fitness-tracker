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
    await Exercise.create(exercise);
    res.json('exercise created');
  } catch (error) {
    console.error(error);
    res.status(500).json('could not create exercise');
  }
});

module.exports = router;
