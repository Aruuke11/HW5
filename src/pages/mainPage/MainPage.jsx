import React, { useState } from 'react';

function NameList() {
    const [nameInput, setNameInput] = useState('');
    const [names, setNames] = useState([]);
    const addName = () => {
        if (nameInput.trim()) {
            setNames([...names, nameInput.trim()]);
            setNameInput('');
        }
    };

    const changeName = (index) => {
        const newName = nameInput.trim();
        if (newName) {
            const updatedNames = [...names];
            updatedNames[index] = newName;
            setNames(updatedNames);
            setNameInput('');
        }
    };

    const handleInputChange = (e) => {
        setNameInput(e.target.value);
    };

    return (
        <div style={{ width: '450px', margin: '25px auto', fontFamily: 'Arial, sans-serif' }}>
            <h2>Список</h2>

            <input
                type="text"
                value={nameInput}
                onChange={handleInputChange}
                placeholder="Введите имя"
                style={{ width: '100%', padding: '25px', marginBottom: '20px' }}
            />
            <button
                onClick={addName}
                disabled={!nameInput.trim()}
                style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: nameInput.trim() ? '#ac4caf' : '#1717c9',
                    color: 'white',
                    cursor: nameInput.trim() ? 'pointer' : 'not-allowed',
                }}
            >
                Добавить
            </button>

            {names.length === 0 && <p style={{ color: '#888' }}>Список пуст</p>}

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {names.map((name, index) => (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
                        {name}
                        <button
                            onClick={() => changeName(index)}
                            disabled={!nameInput.trim()}
                            style={{
                                backgroundColor: nameInput.trim() ? '#ff0008' : '#0b0b0c',
                                color: 'white',
                                border: 'none',
                                cursor: nameInput.trim() ? 'pointer' : 'not-allowed',
                            }}
                        >
                            отмена
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NameList;
