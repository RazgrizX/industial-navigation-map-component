import React, { Component } from 'react';
import {Circle, Wedge, Group, Ring} from 'react-konva';

export class Loader extends React.Component {
	constructor(...args) {
     super(...args);
 }
  render() {

    return (
        <Group>
            <Circle
            key={"loader"+this.props.key}
            x={this.props.x*10-5} y={this.props.y*10-5} radius={10}
            fill={"#FFFF00"}
            shadowBlur={10}
            />
            <Circle
            key={"lamp"+this.props.key}
            x={this.props.x*10-5} y={this.props.y*10-5} radius={3}
            fill={"#0000FF"}
            shadowBlur={10}
            />
            {this.props.direction!=null && <Wedge
            key={"radius"+this.props.key}
            x={this.props.x*10-5} y={this.props.y*10-5} radius={this.props.speed*50}
            angle={70} rotation={this.props.direction-35}
            fill={"#FF0000"} opacity={0.2}
            shadowBlur={10}
            />}
            {this.props.warned && <Ring
            key={"lamp"+this.props.key}
            x={this.props.x*10-5} y={this.props.y*10-5} 
            innerRadius={10} outerRadius={15}
            fill={"#0000FF"}
            opacity={0.4}
            />}
        </Group>
    );
  }
}

export default Loader;