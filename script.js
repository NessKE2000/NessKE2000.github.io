// Sample crop data (replace with actual Palia crop info)
const crops = [
  { name: "Wheat", growthTime: 5 },
  { name: "Tomato", growthTime: 7 },
  // ... more crops
];

// Create crop list elements
const cropList = document.getElementById("crop-list");
crops.forEach(crop => {
  let cropItem = document.createElement("div");
  cropItem.textContent = crop.name;
  cropList.appendChild(cropItem);
  // Add drag-and-drop functionality later
});

// Create plot squares
const plot = document.getElementById("plot");
for (let i = 0; i < 9; i++) { // 9 squares for 3x3 grid
  let square = document.createElement("div");
  square.classList.add("plot-square");
  plot.appendChild(square);
  // Add crop placement logic later
}
