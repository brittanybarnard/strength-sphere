import axios from 'axios';

export default class ExercisesApi {

    async getExercise(muscleGroup) {
        return await axios.get(`http://localhost:8080/exercises/${muscleGroup}`);
    }

}