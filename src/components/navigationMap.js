import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushAlert } from '.././actions/pushAlert'
import {Layer, Rect, Stage, Group} from 'react-konva';
import {Human} from './objects/human';
import {Loader} from './objects/loader';

class NavigationMap extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Stage className="navigation-map" width={695} height={354}>
				<Layer>
					{this.props.navigationData.coordinates && Object.keys(this.props.navigationData.coordinates.objects).map((key)=>{
						let subject = this.props.navigationData.coordinates.objects[key];

						if(subject.type == "forklift"){
							let direction = null;
							let speed = null;
							let warned = false;
							if(this.props.navigationData.coordinates_2 && this.props.navigationData.coordinates_2[key]){
								let dx = subject.x - this.props.navigationData.coordinates_2.objects[key].x;
								let dy = subject.y - this.props.navigationData.coordinates_2.objects[key].y;
								direction = Math.atan2(dy, dx) * (180 / Math.PI);
								speed = Math.round(Math.sqrt(dx * dx / 4 + dy * dy / 4) * 100) / 100;
								Object.keys(this.props.navigationData.coordinates.objects).map((obstacleKey)=>{
									if(key != obstacleKey){
										let obstacle = this.props.navigationData.coordinates.objects[obstacleKey];
										let distance = Math.sqrt(Math.pow(Math.abs(subject.x - obstacle.x), 2)+Math.pow(Math.abs(subject.y - obstacle.y), 2));
										let range = speed * 5;
										let angle = Math.atan2(obstacle.y - subject.y, obstacle.x - subject.x) * (180 / Math.PI);
										if(distance < range && Math.abs(angle - direction) < 35) {
												/*console.log("Warning Loader #"+key+", collision possible");
												console.log("With "+obstacleKey);
												console.log("distance: "+ distance+", range"+range+", angle: "+angle+",direction:"+direction);*/
												this.props.pushAlert("Warning Loader #"+key+", collision with #"+obstacleKey+" is possible!");
												warned = true;
											}
										}
									})
							}
							return <Loader key={key} x={subject.x} y={subject.y} direction={direction} speed={speed} warned={warned}/>
						} else {
							return <Human key={key} x={subject.x} y={subject.y}/>
						}
					})}
				</Layer>
			</Stage>
		);
	}
}

const mapStateToProps = state => ({
	navigationData: state.navigationData
})

const mapDispatchToProps = dispatch => ({
	pushAlert: (text) => dispatch(pushAlert(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMap);

