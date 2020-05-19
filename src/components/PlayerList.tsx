import React from 'react';
import { Player } from '../interfaces';
import PlayerDetail from './PlayerDetail';
import { IonCheckbox } from '@ionic/react';

interface IProps{
    players: Player[];
}
interface IState{
    emphasis: boolean;
}

class PlayerList extends React.Component<IProps,IState> {

    constructor(props:any)
    {
        super(props);
        this.state = {
            emphasis: false,
        }
    }

    onIonChange(event:any)
    {
        this.setState({emphasis: event.detail.checked});
    }

    render()
    {
        if(this.props.players.length == 0)
        {
            return (<div>Loading...</div>);
        }

        let players = this.props.players.map((p,i) => <PlayerDetail key={i} player={p} emphasis={this.state.emphasis} /> );

        return (
            <>
                <h1>Player list</h1>
                <div>Nombre de joueur(s): { this.props.players.length } </div>
                <IonCheckbox onIonChange={e => this.onIonChange(e) } />
                {players}
            </>
        );
    }
}

export default PlayerList;