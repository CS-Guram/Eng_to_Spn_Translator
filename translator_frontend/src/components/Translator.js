import React, { useState } from 'react';
import axios from 'axios';
import "./Translator.css"

const Translator = () => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');

    const translateWord = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000///api/translate/${word}`);
            setTranslation(response.data.translation);
        } catch (error) {
            console.error('Translation error:', error);
        }
    };

    const handleKeyPress = (e) => {
        // Check if the pressed key is Enter (key code 13)
        if (e.key === 'Enter') {
            translateWord();
        }
    };

    return (
        <div className="translator-container">
            <h1 className="translator-title">Numeric and Color Translator: English to Spanish</h1>
            <div className="translator-input-container">
                <input
                    type="text"
                    className="translator-input"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    onKeyPress={handleKeyPress} 
                    placeholder="Enter a word to translate"
                />
                <button className="translator-button" onClick={translateWord}>Translate</button>
            </div>
            <p className="translator-result">Translation: {translation}</p>
        </div>
    );
};

export default Translator;
