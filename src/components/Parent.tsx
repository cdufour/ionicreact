import React,{useState} from 'react';

const Parent: React.FC = (props) => {
    return (
        <>
            <h1>Composant parent</h1>
            { props.children }            
        </>
    );
}

export default Parent;