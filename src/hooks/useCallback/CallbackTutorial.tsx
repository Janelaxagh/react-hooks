import { useState, useCallback } from 'react';
import { Child } from './Child';

export const CallbackTutorial = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [data, setData] = useState<string>("Hello");

    const returnComment = useCallback((name: string) => {
        return data + name;
    }, [data]);

    const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value);
    };

    return (
        <div>
            <input type="text" value={data} onChange={handleDataChange} />
            <Child returnComment={returnComment} />

            <button onClick={() => {setToggle(!toggle)}}>Toggle</button>
            {toggle && <h3>Toggle</h3>}
        </div>
    );
}
