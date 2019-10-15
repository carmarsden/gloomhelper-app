import React from 'react';
import RenderParty from '../RenderParty/RenderParty';
import RenderChar from '../RenderChar/RenderChar';
import EntriesService from '../../services/entries-service';

class Dashboard extends React.Component {
    state = {
        parties: [],
        characters: [],
        loading: true,
        error: null,
    }

    componentDidMount() {
        EntriesService.getEntries()
            .then(res => this.setState({
                parties: res[0],
                characters: res[1],
                loading: false,
            }))
            .catch(res => {
                const errorText = res.error ? res.error : 'Something went wrong! Please try again later.';
                this.setState({ error: errorText });
            })
        ;
    }

    render() {
        const error = this.state.error;
        const loadingdisplay = this.state.loading ? <p className='form-error'>... Loading your dashboard...</p> : '';

        const partyArray = this.state.parties;
        const partyComponents = [];
        partyArray.forEach((party, i) => {
            partyComponents.push(<RenderParty key={i}>{party}</RenderParty>)
        })

        const charArray = this.state.characters;
        const charComponents = [];
        charArray.forEach((char, i) => {
            charComponents.push(<RenderChar key={i}>{char}</RenderChar>)
        })

        return (
            <main role='main'>
                <section className='bodysection'>
                    <h1>User Dashboard</h1>
                </section>

                <section role='alert'>
                    {loadingdisplay}
                    <p className='form-error'>{error}</p>
                </section>


                {partyComponents}
                {charComponents}

            </main>
        )
    }
}

export default Dashboard;