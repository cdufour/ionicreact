import React,{useState} from 'react';

interface Props {
    initialValue: number;
}

const Counter: React.FC<Props> = ({initialValue}) => {
    const onClick = () => {
        setCount(count+1);
    }
    const [count,setCount] = useState(initialValue);

    return (
        <>
            <div>{ count }</div>
            <button onClick={onClick}>Click</button>
        </>
    );
}

export default Counter;