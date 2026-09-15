// ===============================
// AGEWORLD - JAVASCRIPT
// ===============================

let lastComparison = null;
let lastAgeCalculation = null;


// ===============================
// PAGE NAVIGATION
// ===============================

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
    }

    if (pageId === "profiles") {
        displayProfiles();
    }

    if (pageId === "saved") {
        displaySavedItems();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// AGE COMPARISON
// ===============================

function createPeopleInputs() {

    const count = parseInt(
        document.getElementById("peopleCount").value
    );

    const container = document.getElementById("peopleInputs");

    container.innerHTML = "";

    if (isNaN(count) || count < 2 || count > 100) {
        alert("Please enter between 2 and 100 people.");
        return;
    }

    for (let i = 1; i <= count; i++) {

        const box = document.createElement("div");
        box.className = "person-box";

        box.innerHTML = `
            <h3>Person ${i}</h3>

            <label>Name (Optional)</label>
            <input
                type="text"
                id="personName${i}"
                placeholder="Person ${i}"
            >

            <label>Date of Birth *</label>
            <input
                type="date"
                id="personDob${i}"
            >
        `;

        container.appendChild(box);
    }
}


function compareAges() {

    const boxes = document.querySelectorAll(".person-box");

    if (boxes.length < 2) {
        alert("First create at least 2 people.");
        return;
    }

    let people = [];

    for (let i = 1; i <= boxes.length; i++) {

        const nameInput = document.getElementById("personName" + i);
        const dobInput = document.getElementById("personDob" + i);

        const name =
            nameInput.value.trim() || `Person ${i}`;

        const dob = dobInput.value;

        if (!dob) {
            alert(`Please enter DOB for ${name}.`);
            return;
        }

        people.push({
            name: name,
            dob: dob,
            date: new Date(dob + "T00:00:00")
        });
    }

    people.sort((a, b) => a.date - b.date);

    let html = `
        <div class="result-box">
            <h3>Age Comparison Result</h3>
    `;

    html += `<p><strong>Oldest:</strong> ${escapeHTML(people[0].name)}</p>`;
    html += `<p><strong>Youngest:</strong> ${escapeHTML(people[people.length - 1].name)}</p>`;

    html += `<h3 style="margin-top:15px;">People Order</h3>`;

    people.forEach((person, index) => {

        html += `
            <p>
                ${index + 1}. 
                <strong>${escapeHTML(person.name)}</strong>
                — ${formatDate(person.dob)}
            </p>
        `;
    });

    html += `<h3 style="margin-top:15px;">Age Differences</h3>`;

    for (let i = 0; i < people.length - 1; i++) {

        const older = people[i];
        const younger = people[i + 1];

        const difference = Math.abs(
            daysBetween(older.date, younger.date)
        );

        html += `
            <p>
                ${escapeHTML(older.name)} is
                <strong>${difference} days</strong>
                older than
                ${escapeHTML(younger.name)}.
            </p>
        `;
    }

    html += `</div>`;

    document.getElementById("comparisonResult").innerHTML = html;

    lastComparison = {
        people: people.map(person => ({
            name: person.name,
            dob: person.dob
        })),
        createdAt: new Date().toLocaleString()
    };
}


function resetComparison() {

    document.getElementById("peopleCount").value = 2;
    document.getElementById("peopleInputs").innerHTML = "";
    document.getElementById("comparisonResult").innerHTML = "";

    lastComparison = null;
}


// ===============================
// AGE CALCULATOR
// ===============================

function calculateAge() {

    const dobValue = document.getElementById("dob").value;
    const calculateValue =
        document.getElementById("calculateDate").value;

    if (!dobValue || !calculateValue) {
        alert("Please select both dates.");
        return;
    }

    const birthDate =
        new Date(dobValue + "T00:00:00");

    const targetDate =
        new Date(calculateValue + "T00:00:00");

    if (birthDate > targetDate) {
        alert("Date of birth cannot be after calculation date.");
        return;
    }

    const age = getExactAge(birthDate, targetDate);

    const totalDays =
        Math.floor(
            (targetDate - birthDate) /
            (1000 * 60 * 60 * 24)
        );

    document.getElementById("ageResult").innerHTML = `
        <div class="result-box">
            <h3>Exact Age</h3>

            <p>
                <strong>
                    ${age.years} years,
                    ${age.months} months,
                    ${age.days} days
                </strong>
            </p>

            <p>Total days: ${totalDays}</p>

            <p>
                DOB: ${formatDate(dobValue)}
            </p>

            <p>
                Calculated on: ${formatDate(calculateValue)}
            </p>
        </div>
    `;

    lastAgeCalculation = {
        dob: dobValue,
        calculateDate: calculateValue,
        years: age.years,
        months: age.months,
        days: age.days,
        totalDays: totalDays,
        createdAt: new Date().toLocaleString()
    };
}


function getExactAge(birthDate, targetDate) {

    let years =
        targetDate.getFullYear() -
        birthDate.getFullYear();

    let months =
        targetDate.getMonth() -
        birthDate.getMonth();

    let days =
        targetDate.getDate() -
        birthDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                targetDate.getFullYear(),
                targetDate.getMonth(),
                0
            );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years: years,
        months: months,
        days: days
    };
}


function calculateNext() {

    document.getElementById("dob").value = "";
    document.getElementById("calculateDate").value = "";
    document.getElementById("ageResult").innerHTML = "";

    lastAgeCalculation = null;
}


// ===============================
// PHOTO TYPE
// ===============================

function changePhotoType() {

    const type =
        document.getElementById("photoType").value;

    const gallery =
        document.getElementById("galleryPhoto");

    const camera =
        document.getElementById("cameraPhoto");

    const url =
        document.getElementById("photoUrl");

    gallery.style.display = "none";
    camera.style.display = "none";
    url.style.display = "none";

    if (type === "gallery") {
        gallery.style.display = "block";
    }

    if (type === "camera") {
        camera.style.display = "block";
    }

    if (type === "url") {
        url.style.display = "block";
    }
}


// ===============================
// UPLOAD PROFILE
// ===============================

function uploadProfile() {

    const name =
        document.getElementById("profileName").value.trim();

    const dob =
        document.getElementById("profileDob").value;

    const address =
        document.getElementById("profileAddress").value.trim();

    const type =
        document.getElementById("photoType").value;

    if (!name) {
        alert("Name is required.");
        return;
    }

    if (type === "url") {

        const url =
            document.getElementById("photoUrl").value.trim();

        if (!url) {
            alert("Please enter image URL.");
            return;
        }

        saveProfile(
            name,
            dob,
            address,
            url
        );

        return;
    }

    let fileInput;

    if (type === "gallery") {
        fileInput =
            document.getElementById("galleryPhoto");
    } else {
        fileInput =
            document.getElementById("cameraPhoto");
    }

    if (!fileInput.files || !fileInput.files[0]) {
        alert("Please select a photo.");
        return;
    }

    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.onload = function(event) {

        saveProfile(
            name,
            dob,
            address,
            event.target.result
        );
    };

    reader.readAsDataURL(file);
}


// ===============================
// SAVE PROFILE
// ===============================

function saveProfile(
    name,
    dob,
    address,
    photo
) {

    const profiles =
        JSON.parse(
            localStorage.getItem("ageworldProfiles") || "[]"
        );

    const profile = {
        id: Date.now(),
        name: name,
        dob: dob,
        address: address,
        photo: photo,
        createdAt: new Date().toLocaleString()
    };

    profiles.push(profile);

    localStorage.setItem(
        "ageworldProfiles",
        JSON.stringify(profiles)
    );

    document.getElementById("profileName").value = "";
    document.getElementById("profileDob").value = "";
    document.getElementById("profileAddress").value = "";
    document.getElementById("photoUrl").value = "";

    document.getElementById("galleryPhoto").value = "";
    document.getElementById("cameraPhoto").value = "";

    document.getElementById("uploadMessage").innerHTML = `
        <div class="result-box">
            <h3>✅ Profile Uploaded</h3>
            <p>${escapeHTML(name)} has been saved successfully.</p>
        </div>
    `;

    displayProfiles();
}


// ===============================
// DISPLAY PROFILES
// ===============================

function displayProfiles() {

    const container =
        document.getElementById("profilesList");

    const profiles =
        JSON.parse(
            localStorage.getItem("ageworldProfiles") || "[]"
        );

    if (profiles.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No profiles uploaded yet.
            </div>
        `;

        return;
    }

    container.innerHTML = "";

    profiles.forEach(profile => {

        const card =
            document.createElement("div");

        card.className = "profile-card";

        card.onclick = function() {
            showProfileDetails(profile.id);
        };

        card.innerHTML = `
            <img
                src="${escapeAttribute(profile.photo)}"
                alt="Profile Photo"
            >

            <div class="profile-info">
                <h3>${escapeHTML(profile.name)}</h3>

                ${
                    profile.dob
                    ? `<p>DOB: ${formatDate(profile.dob)}</p>`
                    : ""
                }

                ${
                    profile.address
                    ? `<p>${escapeHTML(profile.address)}</p>`
                    : ""
                }
            </div>
        `;

        container.appendChild(card);
    });
}


// ===============================
// PROFILE DETAILS
// ===============================

function showProfileDetails(id) {

    const profiles =
        JSON.parse(
            localStorage.getItem("ageworldProfiles") || "[]"
        );

    const profile =
        profiles.find(item => item.id === id);

    if (!profile) {
        alert("Profile not found.");
        return;
    }

    let message =
        `Name: ${profile.name}\n`;

    if (profile.dob) {
        message +=
            `DOB: ${formatDate(profile.dob)}\n`;
    }

    if (profile.address) {
        message +=
            `Address: ${profile.address}\n`;
    }

    message +=
        `Uploaded: ${profile.createdAt}`;

    alert(message);
}


// ===============================
// SAVE AGE CALCULATION
// ===============================

function saveAgeCalculation() {

    if (!lastAgeCalculation) {
        alert("First calculate an age.");
        return;
    }

    const saved =
        JSON.parse(
            localStorage.getItem("ageworldSaved") || "[]"
        );

    saved.push({
        id: Date.now(),
        type: "Age Calculation",
        data: lastAgeCalculation
    });

    localStorage.setItem(
        "ageworldSaved",
        JSON.stringify(saved)
    );

    alert("Age calculation saved successfully.");
}


// ===============================
// SAVE COMPARISON
// ===============================

function saveComparison() {

    if (!lastComparison) {
        alert("First compare the ages.");
        return;
    }

    const saved =
        JSON.parse(
            localStorage.getItem("ageworldSaved") || "[]"
        );

    saved.push({
        id: Date.now(),
        type: "Age Comparison",
        data: lastComparison
    });

    localStorage.setItem(
        "ageworldSaved",
        JSON.stringify(saved)
    );

    alert("Age comparison saved successfully.");
}


// ===============================
// DISPLAY SAVED ITEMS
// ===============================

function displaySavedItems() {

    const container =
        document.getElementById("savedList");

    const saved =
        JSON.parse(
            localStorage.getItem("ageworldSaved") || "[]"
        );

    const profiles =
        JSON.parse(
            localStorage.getItem("ageworldProfiles") || "[]"
        );

    if (saved.length === 0 && profiles.length === 0) {

        container.innerHTML = `
            <div class="empty">
                No saved items yet.
            </div>
        `;

        return;
    }

    container.innerHTML = "";

    saved.forEach(item => {

        const card =
            document.createElement("div");

        card.className = "saved-card";

        if (item.type === "Age Calculation") {

            const d = item.data;

            card.innerHTML = `
                <h3>📅 Age Calculation</h3>

                <p>
                    DOB:
                    ${formatDate(d.dob)}
                </p>

                <p>
                    Date:
                    ${formatDate(d.calculateDate)}
                </p>

                <p>
                    Age:
                    <strong>
                        ${d.years} years,
                        ${d.months} months,
                        ${d.days} days
                    </strong>
                </p>

                <button
                    class="delete-btn"
                    onclick="deleteSaved(${item.id})"
                >
                    Delete
                </button>
            `;
        }

        if (item.type === "Age Comparison") {

            const d = item.data;

            card.innerHTML = `
                <h3>👥 Age Comparison</h3>

                <p>
                    People:
                    ${d.people.length}
                </p>

                ${d.people.map(person => `
                    <p>
                        ${escapeHTML(person.name)}
                        —
                        ${formatDate(person.dob)}
                    </p>
                `).join("")}

                <button
                    class="delete-btn"
                    onclick="deleteSaved(${item.id})"
                >
                    Delete
                </button>
            `;
        }

        container.appendChild(card);
    });


    // Saved profiles
    profiles.forEach(profile => {

        const card =
            document.createElement("div");

        card.className = "saved-card";

        card.innerHTML = `
            <h3>👤 Saved Profile</h3>

            <p>
                <strong>
                    ${escapeHTML(profile.name)}
                </strong>
            </p>

            ${
                profile.dob
                ? `<p>DOB: ${formatDate(profile.dob)}</p>`
                : ""
            }

            ${
                profile.address
                ? `<p>Address: ${escapeHTML(profile.address)}</p>`
                : ""
            }

            <button
                class="delete-btn"
                onclick="deleteProfile(${profile.id})"
            >
                Delete Profile
            </button>
        `;

        container.appendChild(card);
    });
}


// ===============================
// DELETE SAVED ITEM
// ===============================

function deleteSaved(id) {

    let saved =
        JSON.parse(
            localStorage.getItem("ageworldSaved") || "[]"
        );

    saved =
        saved.filter(item => item.id !== id);

    localStorage.setItem(
        "ageworldSaved",
        JSON.stringify(saved)
    );

    displaySavedItems();
}


// ===============================
// DELETE PROFILE
// ===============================

function deleteProfile(id) {

    let profiles =
        JSON.parse(
            localStorage.getItem("ageworldProfiles") || "[]"
        );

    profiles =
        profiles.filter(profile => profile.id !== id);

    localStorage.setItem(
        "ageworldProfiles",
        JSON.stringify(profiles)
    );

    displayProfiles();
    displaySavedItems();
}


// ===============================
// CLEAR SAVED ITEMS
// ===============================

function clearSaved() {

    if (!confirm("Delete all saved calculations and comparisons?")) {
        return;
    }

    localStorage.removeItem("ageworldSaved");

    displaySavedItems();
}


// ===============================
// UPLOAD BUTTON FROM CALCULATOR
// ===============================

function goToUpload() {
    showPage("upload");
}


// ===============================
// DATE HELPERS
// ===============================

function formatDate(dateString) {

    if (!dateString) {
        return "";
    }

    const parts =
        dateString.split("-");

    if (parts.length !== 3) {
        return dateString;
    }

    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}


function daysBetween(date1, date2) {

    const oneDay =
        1000 * 60 * 60 * 24;

    return Math.round(
        Math.abs(date2 - date1) / oneDay
    );
}


// ===============================
// SECURITY HELPERS
// ===============================

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function escapeAttribute(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}


// ===============================
// STARTUP
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    const today =
        new Date().toISOString().split("T")[0];

    const calculateDate =
        document.getElementById("calculateDate");

    if (calculateDate) {
        calculateDate.value = today;
    }

    createPeopleInputs();

    displayProfiles();
    displaySavedItems();

});
