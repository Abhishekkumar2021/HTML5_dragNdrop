const cards = document.querySelectorAll(".card");
for (const card of cards) {
	card.addEventListener("dragstart", (evt) => {
		card.classList.add("dragStart");
		console.log("started dragging");
	});
	card.addEventListener("dragend", (evt) => {
		card.classList.add("dragEnd");
		console.log("end dragging");
	});
	card.addEventListener("dragenter", (evt) => {
		card.classList.add("dragEnter");
		console.log("drag enterd");
	});
	card.addEventListener("dragover", (evt) => {
		card.classList.add("dragOver");
		console.log("Drag over");
	});
	card.addEventListener("dragleave", (evt) => {
		card.classList.add("dragLeave");
		console.log("drag leave");
	});
	card.addEventListener("drop", (evt) => {
		card.classList.add("dragDrop");
		console.log("drag drop");
	});
}
