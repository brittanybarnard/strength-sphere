import './Services.scss';
import dumbbellIcon from '../../assets/icons/icons8-dumbbell-50.png';

const Services = () => {
  return (
    <div className='services'>
        <h3 className='services__heading'>/Services</h3>
        <h4 className='services__subheading'>An environment free of judgment, empowering you to achieve your utmost fitness potential.</h4>
        <div className='services__card'>
          <div className="services__content">
            <img className='services__content-icon' src={dumbbellIcon} alt='dumbbell icon' />
            <h4 className='services__content-heading'>What we offer</h4>
            <p className='services__content-boilerplate'>
                Discover our muscle-targeting app featuring compound, unilateral, and isolation exercises for precise sculpting. Tailored to target specific muscle groups, it ensures efficient workouts. Transform your fitness journey and unlock your potential today.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Services