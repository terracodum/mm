import React, { useState, useEffect} from 'react';
import toast, {Toaster} from "react-hot-toast"
import catimg from  '../public/cat.jpg';
import './style.css';


function App() { 
  const [image, setImage] = useState('')
  const [error, setError] = useState('')
  const API = 'https://dog.ceo/api'
  const [notouch, setNotouch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function Yes() {
    toast('Пойдем гулять', {
      icon: '👏',
    });
  }

  function Handledata() {
    try {
      setIsLoading(true);

    fetch(`${API}/breeds/image/random`,
      {
        method: 'GET',
      }
    )
    .then(response => response.text())
    .then(response => {
      response = JSON.parse(response);
      console.log(response.message);
      setImage(response.message);
      setIsLoading(false)
    })
    .finally(()=> {
      setIsLoading(flase)
    })
    } catch (e) {

      setError(e);
    }
  }
  useEffect(() => {
    Handledata();
  }, [])


  return (
    <div className='page' >
      <div className='content'>
        {isLoading && <p>Loading...</p>}
        {image && <img src={image} alt="cat" /> }
        {notouch ? 
          <p>this </p> :
          <p>be</p>
        }
        

        <div className='loading'></div>
        <div className='buttons'>
          <button className='button'
          onClick={()=> {Handledata();
            }}>yes</button>
          <button className='button'
          onClick={()=>{
            Handledata();
            setNotouch(true);
        }}>no</button>

        </div>

        {error && <p>error</p>}
      </div>
      <div>
        {/* <Toaster
          position='top-right'
          toastOptions={{ 
            style: {
              fontFamily: 'sans-serif',
              fontSize: '16px'
            }
          }}
        /> */}
      </div>
    </div>
  )
}

export default App
