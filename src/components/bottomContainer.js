import React, { Component } from 'react';

export default class BottomContainer extends Component {

  render() {

    const{ list, fact, description } = this.props.currentBird;

    /**
    * All the data about the card come from the animal's main object.
    * Inside it, as a key of the object there is there is "list", an array
    *   containing 2 sub-arrays used for the following <ul list>, one for
    *   the titles and the last for the descriptions.
    * To build every line of the <list> I need to load data from 2 arrays, so
    *   the solution I've found is to create the following "array" filled
    *   with every line of the <ul list>.
    * Each line is named el and pushed in the array.
    **/

    const array = []; /* the container array */
    let el = '';

    /* this defines the length of the iteration, list[0] because contains the titles, and the number of titles define the length of the list*/

    const loopLength = list[0].length;
    for (let i=0; i < loopLength; i++) {
      /* list[0] array of titles */
      /* list[1] array of descriptions */
      el = <li key={i}><span>{list[0][i]}</span>: {list[1][i]}</li>;
      array.push(el);
    }

    /**
    * Here finally I can use the map method on my container array, containing
    *   data from 2 different arrays, to build the list.
    **/
    const iteration = array.map( (el) => (el) );

    return(

      <div className="bottom-container">

        <p className="fact">
          {fact}
        </p>

        <ul className="list">
          {iteration}
        </ul>

        <p>
          {description}
        </p>

      </div>

    );
  }
}
