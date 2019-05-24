import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import profileAction from '../../Actions/profileAction'

class Header extends Component{
	componentDidMount(){
		setInterval(()=>{
			this.props.profileAction();
		},1000);
	}
	render(){
		const {title, counter, name} = this.props;
		return (
			<View>
				<Text>
					{title}
					{name}
					{counter}
				</Text>
			</View>
		)
	}
}


const styles = StyleSheet.create({

});

mapStateToProps = (state, oldProps)=>{
	const {title, counter} = state.profileReducer;
	return {
		title: oldProps.title||title,
		counter: counter
	};
}

mapActionsToProps = (dispatch)=>{
	
	return {
		profileAction: ()=>{dispatch(profileAction())},
	};
}

export default connect(mapStateToProps, mapActionsToProps)(Header);