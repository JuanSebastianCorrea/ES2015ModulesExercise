const choice = (items) => {
	const randIdx = Math.floor(Math.random() * items.length);
	return items[randIdx];
};

const remove = (items, item) => {
	return items.splice(items.indexOf(item), 1)[0];
};

export { choice, remove };
