import './Main.scss';

const Main = () => {
  return (
    <div className='main'>
      <div className="main__title-container">
        <h1 className='main__title-container--heading'>Strength · Sphere</h1>
        <h2 className='main__title-container--subheading'>Empowering<br/>Inclusive · Dedicated<br/>Supportive</h2>
      </div>
        <ul className='main__list'>
            <li><a className='main__list-item' href="#upperBody">Upper Body</a></li>
            <li>·</li>
            <li><a className='main__list-item' href="#lowerBody">Lower Body</a></li>
        </ul>
    </div>
  )
}

export default Main