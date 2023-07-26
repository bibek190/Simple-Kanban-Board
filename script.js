const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

droppables.forEach((droppable) => {
  droppable.addEventListener("dragover", (e) => {
    e.preventDefault();

    const dragging = document.querySelector(".is-dragging");
    droppable.appendChild(dragging);
  });
});
