import React, { useState, useEffect } from 'react';
import './LowerBody.scss';
import exercisesData from '../../data/lowerExercises.json'; 

const LowerBody = () => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('quads');
  const [lowerCompound, setLowerCompound] = useState([]);
  const [lowerUnilateral, setLowerUnilateral] = useState(null);
  const [lowerAccessory, setLowerAccessory] = useState(null);

  useEffect(() => {
    const lowerCompoundFiltered = exercisesData.filter(exercise => exercise.type === 'compound' && exercise.muscleGroup === selectedMuscleGroup);
    const lowerUnilateralFiltered = exercisesData.filter(exercise => exercise.type === 'unilateral' && exercise.muscleGroup === selectedMuscleGroup);
    const lowerAccessoryFiltered = exercisesData.filter(exercise => exercise.type === 'accessory' && exercise.muscleGroup === selectedMuscleGroup);

    const selectRandomExercises = (exercises, count) => {
      const shuffledExercises = exercises.sort(() => 0.5 - Math.random());
      return shuffledExercises.slice(0, count);
    };

    setLowerCompound(selectRandomExercises(lowerCompoundFiltered, 2));
    setLowerUnilateral(selectRandomExercises(lowerUnilateralFiltered, 1)[0]);
    setLowerAccessory(selectRandomExercises(lowerAccessoryFiltered, 1)[0]);
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
