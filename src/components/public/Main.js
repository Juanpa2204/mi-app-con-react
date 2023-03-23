import React, { Component } from "react";
import { Cards } from "./Cards";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { mascotas: [] };
  }

  render() {
    return (
      <main>
        <section className="img py-5 text-center container">
          <div className="row py-lg-5">
            <div className="intro col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Welcome to the catalog of Rick and Morty characters</h1>
              <p className="lead text-muted mt-4">
                Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Television Distribution. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into hijinks.
              </p>
            </div>
          </div>
        </section>
        <Cards />
      </main>
    );
  }
}
