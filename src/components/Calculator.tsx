import React from 'react';

const Loading:React.FC = () => {
    return (
        <div>Loading...</div>
    );
}

interface IState{
    color: string;
    underline: boolean;
}

interface IProps{
    title: string;
}

class Calculator extends React.Component<IProps,IState>
{
    constructor(props:IProps){
        super(props);
        console.log(props.title);
        this.state = {
            color: "green",
            underline: true,
        };

        console.log('Componenent constructed');
    }

    componentDidMount()
    {
        //here get some data (bd for instance)
        console.log('Componenent mounted');
    }

    onClick()
    {
        //this.state.color ='red'; //use setter instead
        this.setState({color:'red'});
    }

    render() {
        console.log("Compenent rendered");
        return (
            <>
                <h1 style={{ color: this.state.color }}>Calculator</h1>
                <button onClick={() => {this.onClick()}}>Change color</button>
                <Loading />
            </>
        );      
    }
}

export default Calculator;