import { useState, useEffect } from 'react';
import './UpperBody.scss';
// import exercisesData from '../../data/upperExercises.json'; 
import ExercisesApi from '../../classes/ExercisesApi';

const UpperBody = () => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('back');
  const [upperCompound, setUpperCompound] = useState([]);
  const [upperUnilateral, setUpperUnilateral] = useState(null);
  const [upperAccessory, setUpperAccessory] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const api = new ExercisesApi();
        const response = await api.getExercise(selectedMuscleGroup);
        const data = response.data;
        
        const upperCompoundFiltered = data.filter(exercise => exercise.type === 'compound');
        const upperUnilateralFiltered = data.filter(exercise => exercise.type === 'unilateral');
        const upperAccessoryFiltered = data.filter(exercise => exercise.type === 'accessory');

        const selectRandomExercises = (exercises, count) => {
          const shuffledExercises = exercises.sort(() => 0.5 - Math.random());
          return shuffledExercises.slice(0, count);
        };

        setUpperCompound(selectRandomExercises(upperCompoundFiltered, 2));
        setUpperUnilateral(selectRandomExercises(upperUnilateralFiltered, 1)[0]);
        setUpperAccessory(selectRandomExercises(upperAccessoryFiltered, 1)[0]);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, [selectedMuscleGroup]);

  const handleMuscleGroupChange = (muscle) => {
    setSelectedMuscleGroup(muscle);
  };

  return (
    <div>
        <h3>Upper Body</h3>
        <p>Build upper body strength with targeted exercises.</p>
        <div>
          <button className="dropdown-toggle">
            Select Muscle Group
          </button>
          <div className="dropdown-menu">
            <button onClick={() => handleMuscleGroupChange('back')}>Back</button>
            <button onClick={() => handleMuscleGroupChange('chest')}>Chest</button>
            <button onClick={() => handleMuscleGroupChange('shoulders')}>Shoulders</button>
            <button onClick={() => handleMuscleGroupChange('triceps')}>Triceps</button>
            <button onClick={() => handleMuscleGroupChange('biceps')}>Biceps</button>
          </div>
        </div>
        <div>
            <ul>Compound
                {upperCompound.map((exercise, index) => (
                  <li key={index}>{exercise.name}</li>
                ))}
            </ul>
        </div>
        <div>
            <ul>Unilateral
                <li>{upperUnilateral ? upperUnilateral.name : ''}</li>
            </ul>
        </div>
        <div>
            <ul>Accessory
                <li>{upperAccessory ? upperAccessory.name : ''}</li>
            </ul>
        </div>
    </div>
  )
}

export default UpperBody;

// const UpperBody = () => {
//   const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('back');
//   const [upperCompound, setUpperCompound] = useState([]);
//   const [upperUnilateral, setUpperUnilateral] = useState(null);
//   const [upperAccessory, setUpperAccessory] = useState(null);

//   useEffect(() => {
//     const upperCompoundFiltered = exercisesData.filter(exercise => exercise.type === 'compound' && exercise.muscleGroup === selectedMuscleGroup);
//     const upperUnilateralFiltered = exercisesData.filter(exercise => exercise.type === 'unilateral' && exercise.muscleGroup === selectedMuscleGroup);
//     const upperAccessoryFiltered = exercisesData.filter(exercise => exercise.type === 'accessory' && exercise.muscleGroup === selectedMuscleGroup);

//     const selectRandomExercises = (exercises, count) => {
//       const shuffledExercises = exercises.sort(() => 0.5 - Math.random());
//       return shuffledExercises.slice(0, count);
//     };

//     setUpperCompound(selectRandomExercises(upperCompoundFiltered, 2));
//     setUpperUnilateral(selectRandomExercises(upperUnilateralFiltered, 1)[0]);
//     setUpperAccessory(selectRandomExercises(upperAccessoryFiltered, 1)[0]);
//   }, [selectedMuscleGroup]);

//   const handleMuscleGroupChange = (muscle) => {
//     setSelectedMuscleGroup(muscle);
//   };

//   return (
//     <div>
//         <h3>Upper Body</h3>
//         <p>Build upper body strength with targeted exercises.</p>
//         <div>
//           <button className="dropdown-toggle">
//             Select Muscle Group
//           </button>
//           <div className="dropdown-menu">
//             <button onClick={() => handleMuscleGroupChange('back')}>Back</button>
//             <button onClick={() => handleMuscleGroupChange('chest')}>Chest</button>
//             <button onClick={() => handleMuscleGroupChange('shoulders')}>Shoulders</button>
//             <button onClick={() => handleMuscleGroupChange('triceps')}>Triceps</button>
//             <button onClick={() => handleMuscleGroupChange('biceps')}>Biceps</button>
//           </div>
//         </div>
//         <div>
//             <ul>Compound
//                 {upperCompound.map((exercise, index) => (
//                   <li key={index}>{exercise.name}</li>
//                 ))}
//             </ul>
//         </div>
//         <div>
//             <ul>Unilateral
//                 <li>{upperUnilateral ? upperUnilateral.name : ''}</li>
//             </ul>
//         </div>
//         <div>
//             <ul>Accessory
//                 <li>{upperAccessory ? upperAccessory.name : ''}</li>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default UpperBody;
