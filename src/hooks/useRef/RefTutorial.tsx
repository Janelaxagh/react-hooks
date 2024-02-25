import { useState, useRef } from 'react';

export const RefTutorial = () => {
    const [inputValue, setInputValue] = useState<string>("Home");
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        if (inputRef.current) {
            console.log(inputRef.current.value);
            setInputValue(inputRef.current.value);
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <h2>{inputValue}</h2>
            <div>
                <input placeholder="Ex..." ref={inputRef}/>
                <button onClick={onClick}>Change</button>
            </div>
        </div>
    );
}
