function shallowEqual(objA, objB) {
	if (objA === objB) {
		return true;
	}

	if (typeof objA !== 'object' || objA === null ||
		typeof objB !== 'object' || objB === null) {
		return false;
	}


	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) {
		return false;
	}

	// Test for A's keys different from B.
	const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	for (let i = 0; i < keysA.length; i++) {
		if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
			
			if (typeof objB[keysA[i]] !== 'function'){
				return false;
			}
		}
	}

	return true;
}

const pure = base => class extends base {

	shouldComponentUpdate(nextProps, nextState) {
		return !shallowEqual(this.props, nextProps) ||
			!shallowEqual(this.state, nextState);
	}
}

export default pure;