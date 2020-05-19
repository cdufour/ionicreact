import React,{useState, ReactChildren} from 'react';

interface Props {
    title: string;
    message?: string;
}

const Test: React.FC<Props> = ({ title }) => {
    const onClick = () => {
        console.log('click !');
        setToken(!token);
    };
    const [message,setMessage] = useState('');
    const [token,setToken] = useState(true);

    if(token)
    {
        return (
            <>
                <div>{ title }</div>
                <button onClick={onClick}>Click</button>
            </>
        );
    }
    else
    {
        return (
            <>
                <div>Token non valide</div>
            </>
        );
    }


}

export default Test;