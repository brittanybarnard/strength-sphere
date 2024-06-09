import { useState, useEffect } from 'react';
import './LowerBody.scss';
// import exercisesData from '../../data/lowerExercises.json'; 
import ExercisesApi from '../../classes/ExercisesApi';

const LowerBody = () => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState("quads");
  const [lowerCompound, setLowerCompound] = useState([]);
  const [lowerUnilateral, setLowerUnilateral] = useState(null);
  const [lowerAccessory, setLowerAccessory] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const api = new ExercisesApi();
        const response = await api.getExercise(selectedMuscleGroup);
        const data = response.data;
        
        const lowerCompoundFiltered = data.filter(exercise => exercise.type === 'compound');
        const lowerUnilateralFiltered = data.filter(exercise => exercise.type === 'unilateral');
        const lowerAccessoryFiltered = data.filter(exercise => exercise.type === 'accessory');

        const selectRandomExercises = (exercises, count) => {
          const shuffledExercises = exercises.sort(() => 0.5 - Math.random());
          return shuffledExercises.slice(0, count);
        };

        setLowerCompound(selectRandomExercises(lowerCompoundFiltered, 2));
        setLowerUnilateral(selectRandomExercises(lowerUnilateralFiltered, 1)[0]);
        setLowerAccessory(selectRandomExercises(lowerAccessoryFiltered, 1)[0]);
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
        <h3>Lower Body</h3>
        <p>Build lower body strength with targeted exercises.</p>
        <div>
          <button className="dropdown-toggle">
            Select Muscle Group
          </button>
          <div className="dropdown-menu">
            <button onClick={() => handleMuscleGroupChange('quads')}>Quads</button>
            <button onClick={() => handleMuscleGroupChange('hamstrings')}>Hamstrings</button>
            <button onClick={() => handleMuscleGroupChange('glutes')}>Glutes</button>
            <button onClick={() => handleMuscleGroupChange('calves')}>Calves</button>
          </div>
        </div>
        <div>
            <ul>Compound
                {lowerCompound.map((exercise, index) => (
                  <li key={index}>{exercise.name}</li>
                ))}
            </ul>
        </div>
        <div>
            <ul>Unilateral
                <li>{lowerUnilateral ? lowerUnilateral.name : ''}</li>
            </ul>
        </div>
        <div>
            <ul>Accessory
                <li>{lowerAccessory ? lowerAccessory.name : ''}</li>
            </ul>
        </div>
    </div>
  )
}

export default LowerBody;

// const LowerBody = () => {
//   const [selectedMuscleGroup, setSelectedMuscleGroup] = useState("quads");
//   const [lowerCompound, setLowerCompound] = useState([]);
//   const [lowerUnilateral, setLowerUnilateral] = useState(null);
//   const [lowerAccessory, setLowerAccessory] = useState(null);

//   useEffect(() => {
//     const lowerCompoundFiltered = exercisesData.filter(exercise => exercise.type === 'compound' && exercise.muscleGroup === selectedMuscleGroup);
//     const lowerUnilateralFiltered = exercisesData.filter(exercise => exercise.type === 'unilateral' && exercise.muscleGroup === selectedMuscleGroup);
//     const lowerAccessoryFiltered = exercisesData.filter(exercise => exercise.type === 'accessory' && exercise.muscleGroup === selectedMuscleGroup);

//     const selectRandomExercises = (exercises, count) => {
//       const shuffledExercises = exercises.sort(() => 0.5 - Math.random());
//       return shuffledExercises.slice(0, count);
//     };

//     setLowerCompound(selectRandomExercises(lowerCompoundFiltered, 2));
//     setLowerUnilateral(selectRandomExercises(lowerUnilateralFiltered, 1)[0]);
//     setLowerAccessory(selectRandomExercises(lowerAccessoryFiltered, 1)[0]);
//   }, [selectedMuscleGroup]);

//   const handleMuscleGroupChange = (muscle) => {
//     setSelectedMuscleGroup(muscle);
//   };

//   return (
//     <div>
//         <h3>Lower Body</h3>
//         <p>Build lower body strength with targeted exercises.</p>
//         <div>
//           <button className="dropdown-toggle">
//             Select Muscle Group
//           </button>
//           <div className="dropdown-menu">
//             <button onClick={() => handleMuscleGroupChange('quads')}>Quads</button>
//             <button onClick={() => handleMuscleGroupChange('hamstrings')}>Hamstrings</button>
//             <button onClick={() => handleMuscleGroupChange('glutes')}>Glutes</button>
//             <button onClick={() => handleMuscleGroupChange('calves')}>Calves</button>
//           </div>
//         </div>
//         <div>
//             <ul>Compound
//                 {lowerCompound.map((exercise, index) => (
//                   <li key={index}>{exercise.name}</li>
//                 ))}
//             </ul>
//         </div>
//         <div>
//             <ul>Unilateral
//                 <li>{lowerUnilateral ? lowerUnilateral.name : ''}</li>
//             </ul>
//         </div>
//         <div>
//             <ul>Accessory
//                 <li>{lowerAccessory ? lowerAccessory.name : ''}</li>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default LowerBody;
