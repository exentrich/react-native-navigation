const React = require('react')
const { Text, View } = require('react-native')

function SplitViewDetail() {
  return (
    <View style={styles.root}>
        <Text>DETAIL VIEW</Text>
    </View>
  );
}

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

module.exports = SplitViewDetail