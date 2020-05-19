import React from 'react';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';
import { Player } from '../interfaces';

interface IState{
    players: Player[];
}

class PlayerManager extends React.Component<{},IState>
{
    constructor(props:any)
    {
        super(props);
        this.state = {
            players: [],
        }
    }

    componentDidMount()
    {
        this.getPlayers();           
    }

    getPlayers()
    {
        fetch("http://api.opusidea.net/player")
            .then(res => {
                //console.log(res.content);
                return res.json();
            })
            .then(res => {
                this.setState({players: res.players});
            })  
    }

    render()
    {
        return(
            <>
                <PlayerForm onSave={() => this.getPlayers() } />
                <PlayerList players={this.state.players} />
            </>
        );
    }
}

export default PlayerManager;