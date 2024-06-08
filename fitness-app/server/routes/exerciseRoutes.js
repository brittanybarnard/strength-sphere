const express = require('express');
const router = express.Router();
const fs = require('fs');

function readData() {
    const data = fs.readFileSync('./data/exercises.json');
    return JSON.parse(data);
} 

router.get('/back', (_req, res) => {
    const exercises = readData();
    const backExercises = exercises.filter(exercise => exercise.muscleGroup === 'back');
    res.json(backExercises);
});

router.get('/chest', (_req, res) => {
    const exercises = readData();
    const chestExercises = exercises.filter(exercise => exercise.muscleGroup === 'chest');
    res.json(chestExercises);
});

router.get('/shoulders', (_req, res) => {
    const exercises = readData();
    const shouldersExercises = exercises.filter(exercise => exercise.muscleGroup === 'shoulders');
    res.json(shouldersExercises);
});

router.get('/triceps', (_req, res) => {
    const exercises = readData();
    const tricepsExercises = exercises.filter(exercise => exercise.muscleGroup === 'triceps');
    res.json(tricepsExercises);
});

router.get('/biceps', (_req, res) => {
    const exercises = readData();
    const bicepsExercises = exercises.filter(exercise => exercise.muscleGroup === 'biceps');
    res.json(bicepsExercises);
});

router.get('/quads', (_req, res) => {
    const exercises = readData();
    const quadsExercises = exercises.filter(exercise => exercise.muscleGroup === 'quads');
    res.json(quadsExercises);
});

router.get('/hamstrings', (req, res) => {
    const exercises = readData();
    const hamstringsExercises = exercises.filter(exercise => exercise.muscleGroup === 'hamstrings');
    res.json(hamstringsExercises);
});

router.get('/glutes', (req, res) => {
    const exercises = readData();
    const glutesExercises = exercises.filter(exercise => exercise.muscleGroup === 'glutes');
    res.json(glutesExercises);
});

router.get('/calves', (req, res) => {
    const exercises = readData();
    const calvesExercises = exercises.filter(exercise => exercise.muscleGroup === 'calves');
    res.json(calvesExercises);
});

module.exports = router;
