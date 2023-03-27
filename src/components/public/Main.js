import React, { Component } from "react";
import { Cards } from "./Cards";
import Navbar from './Navbar';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { mascotas: [] };
  }

  render() {
    return (
      <main>
        <Navbar/>
        <section className="img py-4 text-center container">
          <div className="row">
            <div className="intro col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light"><img className="titulo" src="https://th.bing.com/th/id/R.d371938deaf4d30b08619f885bf9d6d2?rik=TLTB5Xj1VeONww&pid=ImgRaw&r=0" alt="logo"></img></h1>
              <p className="lead text-muted mt-4 text-dark">
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
