import { useState, useEffect } from 'react';
import './UpperBody.scss';
import bicepIcon from '../../assets/icons/icon-bicep-50.png';
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
    <div id='upperBody' className='upperBody'>
      <h3 className="upperBody__heading">/Upper Body</h3>
      <div className="upperBody__card">
        <div className="upperBody__content">
            <img className='upperBody__content-icon' src={bicepIcon} alt='bicep icon' />
            <h3 className='upperBody__content-subheading'>Upper Body</h3>
            <p className='upperBody__content-description'>Build upper body strength with targeted exercises.</p>
            <div className='upperBody__content-select-muscle'>
              <h4 className='upperBody__content-select-heading'>Select muscle group:</h4>
              <div className="upperBody__content-menu">
                <button className='upperBody__content-button' onClick={() => handleMuscleGroupChange('back')}>Back</button>
                <button className='upperBody__content-button' onClick={() => handleMuscleGroupChange('chest')}>Chest</button>
                <button className='upperBody__content-button' onClick={() => handleMuscleGroupChange('shoulders')}>Shoulders</button>
                <button className='upperBody__content-button' onClick={() => handleMuscleGroupChange('triceps')}>Triceps</button>
                <button className='upperBody__content-button' onClick={() => handleMuscleGroupChange('biceps')}>Biceps</button>
              </div>
            </div>
            <div className="upperBody__exercise-container">
                <ul className='upperBody__list'>
                  <h4 className='upperBody__list-heading'>Compound:</h4>
                    {upperCompound.map((exercise, index) => (
                      <li className='upperBody__list-item' key={index}>{exercise.name}</li>
                    ))}
                </ul>
                <ul className='upperBody__list'>
                  <h4 className='upperBody__list-heading'>Unilateral:</h4>
                    <li className='upperBody__list-item'>{upperUnilateral ? upperUnilateral.name : ''}</li>
                </ul>
                <ul className='upperBody__list'>
                  <h4 className='upperBody__list-heading'>Isolation:</h4>
                    <li className='upperBody__list-item'>{upperAccessory ? upperAccessory.name : ''}</li>
                </ul>
              </div>
          </div>
        </div>
    </div>
  )
}

export default UpperBody;
