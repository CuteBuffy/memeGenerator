import react, { useState, useEffect } from 'react'

export default function Form() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes)
    }
    getMemes();
  }, [])

  const getImage = e => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  const handleChange = e => {
    const { name, value } = e.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <>
      <div className="container form__container">

        <form className='form__content'>
          <div className="form__inputs">
            <input
              type="text"
              placeholder='Enter Top Text'
              name='topText'
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder='Enter Bottom Text'
              name='bottomText'
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
          <button onClick={getImage} className='form__btn'>Get a new meme image 🖼</button>
          {meme.randomImage != '' && <div className="img__container">
            <img className='meme__image' src={meme.randomImage} alt="" />
            <h2 className='meme__text top'>{meme.topText}</h2>
            <h2 className='meme__text bottom'>{meme.bottomText}</h2>
          </div>}
        </form>
      </div>
    </>
  );
}