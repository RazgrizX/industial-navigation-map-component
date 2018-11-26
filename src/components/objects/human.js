import React, { Component } from 'react';
import {Circle} from 'react-konva';

export class Human extends React.Component {
	constructor(...args) {
   super(...args);
 }
 render() {
  return (
    <Circle
    key={this.props.key}
    x={this.props.x*10-5} y={this.props.y*10-5} radius={5}
    fill={"#FF9900"}
    shadowBlur={10}
    />
    );
  }
}

export default Human;