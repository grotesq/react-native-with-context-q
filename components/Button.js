import React from 'react';
import { withContext } from 'context-q';
import { Button as ReactNativeButton } from 'react-native';

let Button = props => (
	<ReactNativeButton
		onPress={() => props.context.update( { count: props.context.count + 1 } )}
		title={'Add count'}/>
);

export default withContext( Button );
