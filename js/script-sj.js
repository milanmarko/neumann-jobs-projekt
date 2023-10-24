function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

const showContainersChildren = (container) => {
	if (isInViewport(container)) {
		let index = 0;
		for (const card of container.children) {
			index++;
			setTimeout(() => {
				card.classList.add("visible");
			}, 500 * index);
		}
	}
};

document.addEventListener("scroll", (event) => {
	showContainersChildren(document.querySelector("#iskola-container-1"));
	showContainersChildren(document.querySelector("#leiras-1-container"));
	showContainersChildren(document.querySelector("#leiras-2-container"));
	showContainersChildren(document.querySelector("#leiras-3-container"));
});
