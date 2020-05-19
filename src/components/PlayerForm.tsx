import React from 'react';
import { IonItem, IonInput, IonButton } from '@ionic/react';
import { Player } from '../interfaces';

interface IState{
    player: Player;
}

interface IProps{
    onSave(): any,
}

class PlayerForm extends React.Component<IProps,IState>
{

    constructor(props:any)
    {
        super(props);
        this.state = {
            player: {
                firstname:"",
                lastname: "",
                team: "FC avignon",
                position: "attaquant"
            },
        };
    }

    handleChange(event:any,field:string)
    {
        if(field == "firstname")
        {
            let obj = Object.assign({}, this.state.player, {firstname: event.detail.value});
            this.setState({player:obj});
        }
        else if(field == "lastname")
        {
            let obj = Object.assign({}, this.state.player, {lastname: event.detail.value});
            this.setState({player:obj});
        }        
    }

    onSave()
    {
        var options = {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            }
            
        };
        fetch("http://api.opusidea.net/player",options)
            .then(res => { 
                console.log(res.status);
                this.props.onSave();
            })
        ;
        
    }

    render()
    {
        return (
            <IonItem>
                <IonInput placeholder="Prénom"  value={this.state.player.firstname} onIonChange={e => this.handleChange(e,"firstname")  } /> 
                <IonInput placeholder="Nom" value={this.state.player.lastname} onIonChange={e => this.handleChange(e,"lastname")  }/>
                <IonInput />
                <IonInput />
                <IonButton color="primary" onClick={ () => this.onSave() }>Enregistrer</IonButton>
            </IonItem>
        );
    }
}

export default PlayerForm;