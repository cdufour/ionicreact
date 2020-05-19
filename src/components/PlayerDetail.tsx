import React from 'react';
import { Player } from '../interfaces';
import { IonCheckbox } from '@ionic/react';

interface IProps{
    player: Player;
    emphasis: boolean;
}

class PlayerDetail extends React.Component<IProps,{}> {

    constructor(props:IProps)
    {
        super(props);
    }

    render()
    {
        let color = this.props.player.team == "Juventus" && this.props.emphasis ? 'green' :'black';

        return (
            <>
                _________________________________
                <div>Prenom: {this.props.player.firstname}</div>
                <div>Nom: {this.props.player.lastname}</div>
                <div style={{color}}>Equipe: {this.props.player.team}</div>
                <div>Position: {this.props.player.position}</div>                
            </>
        );
    }
}

export default PlayerDetail;