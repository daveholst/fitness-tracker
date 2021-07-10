const router = require('express').Router();

// bring in Workout model
const Workout = require('../../models/Workout');

// TODO API routes in here!
// get all workouts
router.get('/workouts', async (req, res) => {
  try {
    const allWorkouts = await Workout.find({});
    res.send(allWorkouts);
  } catch (error) {
    console.error(error);
    res.status(500).json('could not fetch all records');
  }
});

// create a workout -- Creates a blank workout with NO exercise data
router.post('/workouts', async (req, res) => {
  try {
    const newWorkout = await Workout.create(req.body);
    res.json(newWorkout);
  } catch (error) {
    console.error(error);
    res.status(500).json('could not create new workout');
  }
});

// update a workout -- adds an axercise
router.put('/workouts/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const data = await Workout.findByIdAndUpdate(
      id,
      {
        $push: { exercises: req.body },
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

// get stats
router.get('/workouts/range', async (req, res) => {
  try {
    const allWorkoutData = await Workout.find({});
    res.send(allWorkoutData);
  } catch (error) {
    console.error(error);
    res.status(500).json('could not get workout data');
  }
});

module.exports = router;
