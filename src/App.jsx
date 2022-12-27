import star from './images/icon-star.svg'
import sent from './images/illustration-thank-you.svg'
import "./style.scss"
import { useState } from 'react';

function App() {
  const [rating, setRating] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const clickHandler = (event) => {
    event.preventDefault();
    setIsSubmit(true)
  }

  return (
    <div className="wrapper">
      <div className='content'>
        <form className='rate'>
          {isSubmit === false ?
            <>
              <img className='icon' src={star} alt='icon' />
              <h2 className='rate--title'>How did we do?</h2>
              <p className='rate--par'>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
              </p>
              <ul className='rate--rating'>
                <li className={rating === 1 ? 'active' : ''} onClick={() => { setRating(1) }}>1</li>
                <li className={rating === 2 ? 'active' : ''} onClick={() => { setRating(2) }}>2</li>
                <li className={rating === 3 ? 'active' : ''} onClick={() => { setRating(3) }}>3</li>
                <li className={rating === 4 ? 'active' : ''} onClick={() => { setRating(4) }}>4</li>
                <li className={rating === 5 ? 'active' : ''} onClick={() => { setRating(5) }}>5</li>
              </ul>
              {rating === null ?
                <button disabled className='rate--button'>SUBMIT</button>
                :
                <button onClick={clickHandler} className='rate--button'>SUBMIT</button>}
            </> :
            <div className='sent'>
              <img className='sent--image' src={sent} alt="sent!" />
              <span className='sent--rating'>You selected {rating} out of 5</span>
              <h2 className='sent--title'>Thank you!</h2>
              <p className='sent--par'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>}
        </form>
      </div>
    </div>
  );
}

export default App;
