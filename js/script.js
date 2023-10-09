const hover = (cardStr) => {
	const cardBody = document.querySelector(`#${cardStr} .card-body-1`);
	const cardImg = document.querySelector(`#${cardStr} .card-img-top`);
	cardImg.style.animation = "img-shrink .5s forwards";
	cardBody.style.animation = "body-grow .5s forwards";
};

const unHover = (cardStr) => {
	const cardBody = document.querySelector(`#${cardStr} .card-body`);
	const cardImg = document.querySelector(`#${cardStr} .card-img-top`);
	cardImg.style.animation = "img-grow .5s forwards";
	cardBody.style.animation = "body-shrink .5s forwards";
};

document.querySelector("#card-nj").addEventListener("mouseover", (event) => {
	hover("card-nj");
});
document.querySelector("#card-sj").addEventListener("mouseover", (event) => {
	hover("card-sj");
});
document.querySelector("#card-nj").addEventListener("mouseout", (event) => {
	unHover("card-nj");
});
document.querySelector("#card-sj").addEventListener("mouseout", (event) => {
	unHover("card-sj");
});
