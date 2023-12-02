window.addEventListener('load', function () {
    // Hide the loading screen
    document.querySelector('.loading-screen').style.display = 'none';
});
// JavaScript for handling appliance selection
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const selectedAppliancesList = document.getElementById("selected-appliances-list");

    // Array to store selected appliances
    const selectedAppliances = [];

    // Function to add an appliance to the selected list
    function addAppliance(applianceName) {
        selectedAppliances.push(applianceName);
        updateSelectedAppliancesList();
    }

    // Function to update the selected appliances list
    function updateSelectedAppliancesList() {
        selectedAppliancesList.innerHTML = "";
        selectedAppliances.forEach(function (appliance) {
            const listItem = document.createElement("li");
            listItem.textContent = appliance;
            selectedAppliancesList.appendChild(listItem);
        });
    }

    // Event listener for clicking on an appliance in the dropdown
    dropdownContent.addEventListener("click", function (e) {
        if (e.target && e.target.tagName === "A") {
            const selectedAppliance = e.target.textContent;
            addAppliance(selectedAppliance);
            // Close the dropdown
            dropdownContent.style.display = "none";
        }
    });

    // Event listener for clicking the dropdown button
    dropdownBtn.addEventListener("click", function () {
        // Toggle the visibility of the dropdown content
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Event listener to close the dropdown when clicking outside of it
    document.addEventListener("click", function (e) {
        if (e.target !== dropdownBtn && e.target !== dropdownContent) {
            dropdownContent.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const applianceTable = document.querySelector("table");

    // Function to handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission for demonstration purposes

        // Create a new row in the table for the submitted appliance details
        const newRow = applianceTable.insertRow(-1);

        const applianceData = {
            appliance: form.elements["appliance"].value,
            number: form.elements["number"].value,
            powerSupply: form.elements["power-supply"].value,
            applianceReading: form.elements["appliance-reading"].value,
            timeInHours: form.elements["time-in-hours"].value,
            days: form.elements["days"].value,
            necessary: form.elements["necessary"].value,
        };

        // Populate the new row with data
        const keys = Object.keys(applianceData);
        keys.forEach(function (key, index) {
            const cell = newRow.insertCell(index);
            cell.textContent = applianceData[key];
        });

        // Clear the form fields after submission
        form.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("energy-wastage-textarea");
    const saveButton = document.getElementById("save-button");
    const savedTipsList = document.getElementById("saved-tips-list");

    // Function to save the content of the textarea
    saveButton.addEventListener("click", function () {
        const userTip = textarea.value.trim();
        if (userTip !== "") {
            // Create a new list item for the saved tip
            const listItem = document.createElement("li");
            listItem.textContent = userTip;

            // Add the saved tip to the "Saved Tips" list
            savedTipsList.appendChild(listItem);

            // Clear the textarea after saving
            textarea.value = "";

            // Optionally, you can save the tips to localStorage or a server for later retrieval
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("energy-wastage-textarea");
    const saveButton = document.getElementById("save-button");
    const savedTipsList = document.getElementById("saved-tips-list");

    // Function to save the content of the textarea
    saveButton.addEventListener("click", function () {
        const userTip = textarea.value.trim();
        if (userTip !== "") {
            // Create a new list item for the saved tip
            const listItem = document.createElement("li");
            listItem.textContent = userTip;

            // Add the saved tip to the "Saved Tips" list
            savedTipsList.appendChild(listItem);

            // Clear the textarea after saving
            textarea.value = "";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("energy-wastage-textarea");
    const saveButton = document.getElementById("save-button");
    const savedTipsList = document.getElementById("saved-tips-list");

    // Function to save the content of the textarea
    saveButton.addEventListener("click", function () {
        const userTip = textarea.value.trim();
        if (userTip !== "") {
            // Create a new list item for the saved tip
            const listItem = document.createElement("li");
            listItem.textContent = userTip;

            // Add the saved tip to the "Saved Tips" list
            savedTipsList.appendChild(listItem);

            // Clear the textarea after saving
            textarea.value = "";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fileUploadInput = document.getElementById("file-upload");
    const youtubeUrlInput = document.getElementById("youtube-url");
    const addYoutubeVideoButton = document.getElementById("add-youtube-video");
    const videoList = document.getElementById("video-list");

    // Function to add a YouTube video to the list
    function addYoutubeVideo() {
        const youtubeUrl = youtubeUrlInput.value.trim();
        if (youtubeUrl) {
            const videoItem = document.createElement("div");
            videoItem.classList.add("video-item");
            videoItem.innerHTML = `<iframe width="300" height="200" src="${youtubeUrl}" frameborder="0" allowfullscreen></iframe>`;
            videoList.appendChild(videoItem);
            youtubeUrlInput.value = "";
        }
    }

    // Event listener for adding YouTube videos
    addYoutubeVideoButton.addEventListener("click", addYoutubeVideo);

    // Event listener for file upload
    fileUploadInput.addEventListener("change", function () {
        const files = fileUploadInput.files;
        for (let i = 0; i < files.length; i++) {
            const videoItem = document.createElement("div");
            videoItem.classList.add("video-item");
            videoItem.innerHTML = `<video width="300" height="200" controls><source src="${URL.createObjectURL(
                files[i]
            )}" type="video/mp4"></video>`;
            videoList.appendChild(videoItem);
        }
        fileUploadInput.value = "";
    });
});
// JavaScript for animations
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-fade-in");

    function checkElements() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
            
            if (isVisible) {
                element.classList.add("fade-in");
            }
        });
    }

    // Initial check when the page loads
    checkElements();

    // Listen for scroll events
    window.addEventListener("scroll", checkElements);
});
document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of internalLinks) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of internalLinks) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});
