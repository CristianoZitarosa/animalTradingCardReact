import React, { Component } from 'react';
import '../style/App.css';
import BottomContainer from './bottomContainer.js'
import { bird } from '../utils/Profile';

export default class App extends Component {

  state = { id: 0 }

  /**
  * working solution to add an event listener on keypress
  *    by using componentDidMount()
  * https://stackoverflow.com/a/46123962
  **/
  componentDidMount() {
    document.addEventListener("keydown", this.switchBird, false);
  }
  componentWillUnmount() {
  document.removeEventListener("keydown", this.switchBird, false);
  }

  /**
  * The function switchBird loops all the available cards.
  * When the app starts the card id is set to 0.
  * Pressing the right or left arrow keys will cause the change of the card
  *   according to the order of the cards inside the file Profile.js
  * I use (bird.length - 1) to control the max index of the card,
  *   (-1) to fix the array length not matching the index.
  **/
  switchBird = (e) => {
    switch (e.keyCode) {

      case 37: /* left arrow */
        if (this.state.id > 0) { /* if > 0 decrease current index */
          let newBird = this.state.id - 1;
          this.setState({ id: newBird });
        } else { /* else jump to the last available card */
          this.setState({ id: bird.length - 1 }); /* its index is maxLength - 1 */
        }
        break;

      case 39: /* right arrow */
        if (this.state.id < bird.length - 1) { /* if < lastItem increase current index */
          let newBird = this.state.id + 1;
          this.setState({ id: newBird });
        } else { /* if lastItem jump to first */
          this.setState({ id: 0 });
        }
        break;

      default: /* empty default case just to remove the warning in console */
        break;
    }
  }

  render() {

    let currentBird = bird[this.state.id];
    const{ name, image } = currentBird;

    return (
      <div className="container">
        <h3 className="header">{name}</h3>

        <img src={image} className="main-image" alt={name} />

          <BottomContainer currentBird={currentBird}/>

        </div>
      );
  }
}
