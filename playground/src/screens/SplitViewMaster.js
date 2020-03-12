const React = require('react')
const { Text, Button, View } = require('react-native')
const Navigation = require('../services/Navigation');

class SplitViewMaster extends React.Component {
    pushScreen = ()=>{
        Navigation.push(this, 'SplitViewDetail')
    }

    render() {
        return (
          <View style={styles.root}>
              <Text>MASTER VIEW</Text>
              <Button title='OPEN DETAIL AGAIN! HOW???'></Button>
              <Button title='Push screen' onPress={this.pushScreen}></Button>
          </View>
        );
    }
}

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

module.exports = SplitViewMaster