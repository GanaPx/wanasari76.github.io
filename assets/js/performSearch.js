function performSearch() {
  // Get the input value
  const inputValue = document.getElementById('searchInput').value.trim().toLowerCase();

  // Define the mapping of keywords to project-specific pages
  const searchMapping = [
    { keywords: ["home", "index", "main",], path: "index.html" },
    { keywords: ["about", "about us", "visi misi", "visi", "misi", "sejarah", "logo", "guideline", "team"], path: "about.html" },
    { keywords: ["provision", "services", "provision services", "konstruksi", "pemeliharaan", "konstruksi jalan", "jalan"], path: "provisionServices.html" },
    { keywords: ["contact", "contact us", "maps", "google maps", "location"], path: "contactUs.html" }
  ];

  // Find the corresponding path based on input keywords
  const match = searchMapping.find(item =>
    item.keywords.some(keyword => keyword === inputValue)
  );

  if (match) {
    // Redirect to the corresponding page within the project
    window.location.href = match.path;
  } else {
    // Show an alert if the value is not found
    window.location.href = "errorSearchHandling.html";
  }
}

function performSearch1() {
  // Get the input value
  const inputValue = document.getElementById('searchInput1').value.trim().toLowerCase();

  // Define the mapping of keywords to project-specific pages
  const searchMapping = [
    { keywords: ["home", "index", "main",], path: "index.html" },
    { keywords: ["about", "about us", "visi misi", "visi", "misi", "sejarah", "logo", "guideline", "team"], path: "about.html" },
    { keywords: ["provision", "services", "provision services", "konstruksi", "pemeliharaan", "konstruksi jalan", "jalan"], path: "provisionServices.html" },
    { keywords: ["contact", "contact us", "maps", "google maps", "location"], path: "contactUs.html" }
  ];

  // Find the corresponding path based on input keywords
  const match = searchMapping.find(item =>
    item.keywords.some(keyword => keyword === inputValue)
  );

  if (match) {
    // Redirect to the corresponding page within the project
    window.location.href = match.path;
  } else {
    // Show an alert if the value is not found
    window.location.href = "errorSearchHandling.html";
  }
}