// 1. Create a variable to store the vizContainer
const vizContainer = document.getElementById("vizContainer");

// 2. Create a variable to store the dashboard options
const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

// 3. Create a variable to store the URL
const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?";

// 4. Define function to load the dashboard
function initViz() {
  const viz = new tableau.Viz(vizContainer, url, options);
}

// 5. Execute function to actually load the dashboard
document.addEventListener("DOMContentLoaded", initViz);

initViz();
