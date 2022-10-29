import React from 'react'
import memesData from '../memesData'
import Meme from './Meme'

export default function Form() {
    const [meme, setMeme] = React.useState({
        textTop: '',
        textButtom: '',
        img: `https://i.imgflip.com/3si4.jpg`
    });
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function handleChange(e) {
        let {name, value} = e.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    
    function renderMeme() {
        let randomMeme = Math.floor(Math.random() * ((allMemes.length) - 0)) + 0;
        let theUrl = allMemes[randomMeme].url;
        
        setMeme(prevState => {
            return ({
                ...prevState,
                img: theUrl
            })
        })
    }
    
    return (
        <>
            <div className='form--box'>
                <div className='form'>
                    <input 
                        className='form--text top' type="text" placeholder='Top Text'
                        name='textTop' value={meme.textTop} onChange={handleChange}
                    />
                    <input className='form--text buttom' type="text" placeholder='Buttom Text'
                        name='textButtom' value={meme.textButtom} onChange={handleChange}
                    />
                    <button className='form--btn' onClick={renderMeme}>Get a new meme 🎭</button>
                </div>
            </div>
            <div className='meme--area'>
                <Meme memeImg={meme.img}/>
                <h2 className="meme--text top">{meme.textTop}</h2>
                <h2 className="meme--text bottom">{meme.textButtom}</h2>
            </div>
        </>
    )
}