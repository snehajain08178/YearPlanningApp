import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';

class App extends Component {
	render(){
		return (
		<View style={styles.mainContainer}>
			<View style={styles.profileContainer}>
				<View style={styles.imageContainer}>
					<Image source={{uri: 'https://www.imagediamond.com/blog/wp-content/uploads/2019/07/hair-face-dp.jpg'}} style={styles.image} />
					<View style={styles.sameRow}>
						<IconEnt name='edit' size={25} color='grey' style={styles.border} />
						<IconAnt name='infocirlceo' size={25} color='grey' style={styles.border}/>
					</View>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.hiText}>Hi, <Text style={styles.snehaText}>Sneha!</Text></Text>
					<Text style={styles.outsideText}>Outside the window, the year 2020 has come and its time to fulfill your goals !</Text>
				</View>
			</View>
			<View style={styles.goalContainerView}>
				<View style={styles.goalContainer}>
					<View style={styles.bellIconContainer}>
						<IconEnt name='bell' color='white' size={18} />
					</View>
					<Text style={styles.goalText}>Need to complete the <Text style={styles.goalYearText}>Goals of the year</Text></Text>
					<IconEnt name='cross' size={25} color='grey' />
				</View>
			</View>
			<View>
			<View style={styles.yearTextView}>
				<Text style={styles.yearText}>Year Planning</Text>
				<IconEnt name='dots-three-vertical' size={25} color='grey' />
			</View>
			<View style={styles.greyContainer}>
				<View style={styles.firstContainerView}></View>
				<View style={styles.firstContainer}>
					<Text>Wheel of life</Text>
					<Text>Balance all areas of your life ...</Text>
				</View>
				<View style={styles.midContainer}></View>
				<View style={styles.secondContainer}>
					<Text>Year Goals</Text>
					<Text>Formulate motivating goals for next year!</Text>
				</View>
			</View>
			</View>
		</View>
		)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		padding: 20,
		backgroundColor: 'white',
		flex: 1,
		justifyContent: 'space-between'
	},
	profileContainer: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: 'darkgrey',
		borderRadius: 10,
		padding: 5
	},
	imageContainer: {
		padding: 5,
		flex: 2
	},
	sameRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 15,
		paddingBottom: 0,
		paddingHorizontal: 18
	},
	image: {
		width: 110,
		height: 100,
		borderRadius: 15,
		alignSelf: 'center'
	},
	border: {
		borderWidth: 1,
		padding: 4,
		borderRadius: 10,
		borderColor: 'darkgrey'
	},
	textContainer: {
		flex: 3.5,
		padding: 5
	},
	hiText: {
		fontSize: 30,
		paddingBottom: 4
	},
	snehaText: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	outsideText: {
		fontSize: 20,
		color: 'darkgrey'
	},
	goalContainerView: {
		//paddingVertical: 20
	},
	goalContainer: {
		backgroundColor: '#F5F5F5',
		padding: 8,
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bellIconContainer: {
		backgroundColor: 'blue',
		borderRadius: 20,
		padding: 2
	},
	goalText: {
		fontSize: 16
	},
	goalYearText: {
		color: 'blue',
		textDecorationLine: 'underline',
	},
	yearTextView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 20
	},
	yearText: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 2
	},
	greyContainer: {
		backgroundColor: 'darkgrey',
		flexDirection: 'row',
		padding: 10
	},
	firstContainerView: {
		backgroundColor: 'white',
		flex: 1,
	},
	firstContainer: {
		backgroundColor: 'orange',
		position: 'absolute',
		top: 25,
		flex: 1
	},
	midContainer: {
		flex: 0.1
	},
	secondContainer: {
		backgroundColor: '#0066FF',
		flex: 1,
		//width: 100,
		height: 100
	}
})
  
export default App;
