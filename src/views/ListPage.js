import React from 'react'
import Relay from 'react-relay'
import {withRouter} from 'react-router'
import PokemonPreview from '../components/PokemonPreview'
import classes from './ListPage.css'

class ListPage extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object,
  }
  render () {
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          {`There are 28 Pokemons in your pokedex`}
        </div>
        <div className={classes.container}>
        </div>
      </div>
    )
  }
}

export default Relay.createContainer(
  withRouter(ListPage),
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          id
        }
      `,
    },
  },
)
