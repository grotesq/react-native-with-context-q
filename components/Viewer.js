import React from 'react';
import { withContext } from 'context-q';
import { Text, View } from 'react-native';

let Viewer = props => (
	<View>
		<Text style={{textAlign: 'center'}}>
			Count : {props.context.count}
		</Text>
	</View>
);

export default withContext( Viewer );
