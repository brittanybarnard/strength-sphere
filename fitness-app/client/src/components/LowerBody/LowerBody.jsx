import { useState, useEffect } from 'react';
import './LowerBody.scss';
import legIcon from '../../assets/icons/icon-leg-50.png';
import ExercisesApi from '../../classes/ExercisesApi';

const LowerBody = () => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('quads');
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
    <div id='lowerBody' className='lowerBody'>
        <h3 className='lowerBody__heading'>/Lower Body</h3>
        <div className="lowerBody__card">
          <div className="lowerBody__content">
            <img className='lowerBody__content-icon' src={legIcon} alt='leg icon' />
            <h3 className='lowerBody__content-subheading'>Lower Body</h3>
            <p className='lowerBody__content-description'>Build lower body strength with targeted exercises.</p>
            <div className='lowerBody__content-select-muscle'>
            <h4 className='lowerBody__content-select-heading'>Select muscle group:</h4>
              <div className="lowerBody__content-menu">
                <button className='lowerBody__content-button' onClick={() => handleMuscleGroupChange('quads')}>Quads</button>
                <button className='lowerBody__content-button' onClick={() => handleMuscleGroupChange('hamstrings')}>Hamstrings</button>
                <button className='lowerBody__content-button' onClick={() => handleMuscleGroupChange('glutes')}>Glutes</button>
                <button className='lowerBody__content-button' onClick={() => handleMuscleGroupChange('calves')}>Calves</button>
              </div>
            </div>
            <div className="lowerBody__exercise-container">
                <ul className='lowerBody__list'>
                <h4 className='lowerBody__list-heading'>Compound:</h4>
                    {lowerCompound.map((exercise, index) => (
                      <li className='lowerBody__list-item' key={index}>{exercise.name}</li>
                    ))}
                </ul>
                <ul className='lowerBody__list'>
                  <h4 className='lowerBody__list-heading'>Unilateral:</h4>
                    <li className='lowerBody__list-item'>{lowerUnilateral ? lowerUnilateral.name : ''}</li>
                </ul>
                <ul className='lowerBody__list'>
                  <h4 className='lowerBody__list-heading'>Isolation:</h4>
                    <li className='lowerBody__list-item'>{lowerAccessory ? lowerAccessory.name : ''}</li>
                </ul>
              </div>
          </div>
        </div>
    </div>
  )
}

export default LowerBody;

