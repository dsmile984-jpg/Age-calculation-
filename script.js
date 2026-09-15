/* ==================================================
   AGEWORLD — GLOBAL STYLES
================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Arial,
        sans-serif;

    background:
        linear-gradient(
            135deg,
            #f5f8ff 0%,
            #eef4ff 45%,
            #f8fbff 100%
        );

    color: #172033;
    min-height: 100vh;
    line-height: 1.5;
}


/* ==================================================
   HEADER
================================================== */

.site-header {
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid #e3e9f3;
    box-shadow: 0 4px 20px rgba(30, 55, 90, 0.06);
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(14px);
}

.header-content {
    max-width: 1100px;
    margin: auto;
    padding: 16px 20px;
}

.logo-area {
    display: flex;
    align-items: center;
    gap: 13px;
}

.logo-icon {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 14px;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
        );

    color: white;
    font-size: 25px;

    box-shadow:
        0 8px 20px rgba(37, 99, 235, 0.22);
}

.logo-area h1 {
    font-size: 23px;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #14213d;
}

.logo-area p {
    font-size: 12px;
    color: #718096;
    margin-top: 1px;
}


/* ==================================================
   NAVIGATION
================================================== */

.main-navigation {
    max-width: 1100px;
    margin: 18px auto 0;

    padding: 0 15px;

    display: flex;
    gap: 8px;

    overflow-x: auto;

    scrollbar-width: none;
}

.main-navigation::-webkit-scrollbar {
    display: none;
}

.nav-button {
    flex: 0 0 auto;

    border: 1px solid #dce5f2;
    background: #ffffff;

    color: #536176;

    padding: 10px 15px;

    border-radius: 12px;

    cursor: pointer;

    font-size: 13px;
    font-weight: 650;

    display: flex;
    align-items: center;
    gap: 7px;

    transition:
        transform 0.2s ease,
        background 0.2s ease,
        color 0.2s ease,
        box-shadow 0.2s ease;
}

.nav-button:hover {
    transform: translateY(-1px);
    background: #f7faff;
}

.nav-button.active {
    background: #2563eb;
    color: white;
    border-color: #2563eb;

    box-shadow:
        0 7px 18px rgba(37, 99, 235, 0.20);
}


/* ==================================================
   MAIN CONTAINER
================================================== */

.main-container {
    width: 100%;
    max-width: 900px;

    margin: 0 auto;

    padding:
        28px 18px
        60px;
}


/* ==================================================
   PAGE
================================================== */

.page {
    display: none;
    animation: pageFade 0.3s ease;
}

.page.active {
    display: block;
}

@keyframes pageFade {
    from {
        opacity: 0;
        transform: translateY(8px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* ==================================================
   PAGE HEADER
================================================== */

.page-header {
    display: flex;
    align-items: center;
    gap: 14px;

    margin-bottom: 22px;
}

.page-icon {
    width: 54px;
    height: 54px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 16px;

    background: #e9f0ff;

    font-size: 27px;

    border: 1px solid #d9e5ff;
}

.page-header h2 {
    font-size: 26px;
    line-height: 1.15;

    color: #17213a;

    letter-spacing: -0.5px;
}

.page-header p {
    color: #718096;
    font-size: 14px;

    margin-top: 4px;
}


/* ==================================================
   FORM CARD
================================================== */

.form-card {
    background: #ffffff;

    border: 1px solid #e1e8f2;

    border-radius: 20px;

    padding: 22px;

    margin-bottom: 18px;

    box-shadow:
        0 10px 35px rgba(25, 50, 90, 0.07);
}

.card-title {
    font-size: 18px;
    color: #1c2942;
    margin-bottom: 5px;
}

.card-description {
    color: #748096;
    font-size: 13px;
    margin-bottom: 18px;
}


/* ==================================================
   LABELS
================================================== */

.form-label {
    display: block;

    font-size: 14px;
    font-weight: 700;

    color: #26344d;

    margin-bottom: 7px;
}

.input-help {
    color: #8793a7;
    font-size: 12px;
    margin-bottom: 12px;
}

.optional {
    color: #8995a8;
    font-size: 11px;
    font-weight: 500;
    margin-left: 4px;
}


/* ==================================================
   NUMBER CONTROL
================================================== */

.number-control {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 14px;
}

.number-control input {
    width: 100%;
    max-width: 160px;

    height: 46px;

    border: 1px solid #d8e1ee;
    border-radius: 12px;

    text-align: center;

    font-size: 17px;
    font-weight: 700;

    color: #1e293b;

    outline: none;

    background: #fbfdff;
}

.number-control input:focus {
    border-color: #4f7ff0;

    box-shadow:
        0 0 0 3px rgba(37, 99, 235, 0.10);
}

.small-control-button {
    width: 44px;
    height: 44px;

    border: 1px solid #d7e1ef;

    background: #f7faff;

    color: #2563eb;

    border-radius: 11px;

    font-size: 23px;

    cursor: pointer;

    transition: 0.2s ease;
}

.small-control-button:hover {
    background: #eaf1ff;
}


/* ==================================================
   INPUTS
================================================== */

.text-input,
.text-area,
.normal-select,
.file-input {
    width: 100%;

    border: 1px solid #d9e2ef;

    background: #fbfdff;

    border-radius: 12px;

    color: #25334b;

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.text-input {
    height: 46px;
    padding: 0 14px;

    font-size: 14px;

    margin-bottom: 18px;
}

.text-area {
    min-height: 100px;

    padding: 12px 14px;

    font-size: 14px;

    resize: vertical;

    margin-bottom: 18px;
}

.normal-select {
    height: 46px;

    padding: 0 13px;

    font-size: 14px;

    margin-bottom: 15px;

    cursor: pointer;
}

.file-input {
    padding: 10px;

    font-size: 13px;

    margin-bottom: 18px;

    cursor: pointer;
}

.text-input:focus,
.text-area:focus,
.normal-select:focus {
    border-color: #4f7ff0;

    box-shadow:
        0 0 0 3px rgba(37, 99, 235, 0.10);
}


/* ==================================================
   DATE SELECTOR
================================================== */

.date-selector {
    display: grid;

    grid-template-columns:
        1fr
        1.5fr
        1.2fr;

    gap: 10px;

    margin-bottom: 14px;
}

.date-field {
    min-width: 0;
}

.date-select {
    width: 100%;

    height: 48px;

    border: 1px solid #d9e2ef;

    border-radius: 12px;

    padding: 0 11px;

    background: #fbfdff;

    color: #26344c;

    font-size: 14px;

    outline: none;

    cursor: pointer;

    transition: 0.2s ease;
}

.date-select:focus {
    border-color: #4f7ff0;

    box-shadow:
        0 0 0 3px rgba(37, 99, 235, 0.10);
}


/* ==================================================
   QUICK DATE
================================================== */

.quick-date-area {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.small-button {
    border: 1px solid #dbe4f1;

    background: #f7faff;

    color: #31527f;

    border-radius: 10px;

    padding: 8px 12px;

    font-size: 12px;
    font-weight: 650;

    cursor: pointer;

    transition: 0.2s ease;
}

.small-button:hover {
    background: #edf3ff;
}


/* ==================================================
   TODAY BUTTON
================================================== */

.today-button {
    width: 100%;

    border: 1px solid #d8e4fb;

    background: #f3f7ff;

    color: #2563eb;

    height: 44px;

    border-radius: 11px;

    font-size: 13px;

    font-weight: 700;

    cursor: pointer;

    transition: 0.2s ease;
}

.today-button:hover {
    background: #e8f0ff;
}


/* ==================================================
   PEOPLE CONTAINER
================================================== */

.people-container {
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 15px;

    margin-bottom: 18px;
}

.person-box {
    background: #ffffff;

    border: 1px solid #e0e7f0;

    border-radius: 17px;

    padding: 18px;

    box-shadow:
        0 7px 25px rgba(30, 50, 80, 0.05);
}

.person-box h3 {
    font-size: 16px;

    margin-bottom: 14px;

    color: #263550;
}

.person-box input {
    width: 100%;

    height: 44px;

    padding: 0 12px;

    border: 1px solid #d9e2ef;

    border-radius: 10px;

    background: #fbfdff;

    outline: none;

    font-size: 13px;

    margin-bottom: 13px;
}

.person-box input:focus {
    border-color: #4f7ff0;

    box-shadow:
        0 0 0 3px rgba(37, 99, 235, 0.09);
}

.person-box label {
    display: block;

    font-size: 12px;

    font-weight: 650;

    color: #64748b;

    margin-bottom: 6px;
}


/* ==================================================
   BUTTONS
================================================== */

.primary-button,
.secondary-button,
.success-button,
.upload-button,
.danger-button {
    border: none;

    border-radius: 12px;

    min-height: 46px;

    padding: 11px 17px;

    font-size: 14px;

    font-weight: 750;

    cursor: pointer;

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        opacity 0.2s ease;
}

.primary-button {
    background:
        linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
        );

    color: white;

    box-shadow:
        0 8px 20px rgba(37, 99, 235, 0.18);
}

.success-button {
    background:
        linear-gradient(
            135deg,
            #159957,
            #0f8f67
        );

    color: white;
}

.upload-button {
    background:
        linear-gradient(
            135deg,
            #7c3aed,
            #5b21b6
        );

    color: white;
}

.secondary-button {
    background: #edf2f8;

    color: #40516b;
}

.danger-button {
    background: #fff0f0;

    color: #c62828;

    border: 1px solid #ffd5d5;

    width: 100%;
}

.primary-button:hover,
.secondary-button:hover,
.success-button:hover,
.upload-button:hover,
.danger-button:hover {
    transform: translateY(-2px);
}

.primary-button:active,
.secondary-button:active,
.success-button:active,
.upload-button:active,
.danger-button:active {
    transform: translateY(0);
}

.full-button {
    width: 100%;
}

.large-button {
    width: 100%;

    min-height: 52px;

    font-size: 15px;

    margin-bottom: 16px;
}


/* ==================================================
   ACTION BUTTONS
================================================== */

.action-buttons {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 10px;

    margin-top: 4px;
}

.action-buttons button {
    width: 100%;
}


/* ==================================================
   RESULT
================================================== */

.result-container {
    width: 100%;
}

.result-box {
    background:
        linear-gradient(
            135deg,
            #ffffff,
            #f6f9ff
        );

    border: 1px solid #dbe5f4;

    border-radius: 18px;

    padding: 20px;

    margin-bottom: 16px;

    box-shadow:
        0 8px 25px rgba(35, 60, 100, 0.06);
}

.result-box h3 {
    color: #1d3557;

    font-size: 18px;

    margin-bottom: 10px;
}

.result-box p {
    color: #53647b;

    font-size: 14px;

    padding: 7px 0;

    border-bottom: 1px solid #edf1f6;
}

.result-box p:last-child {
    border-bottom: none;
}

.result-box strong {
    color: #2563eb;
}


/* ==================================================
   PROFILE CARDS
================================================== */

.profiles-container {
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 15px;
}

.profile-card {
    display: flex;

    align-items: center;

    gap: 14px;

    padding: 14px;

    background: #ffffff;

    border: 1px solid #e0e7f0;

    border-radius: 17px;

    cursor: pointer;

    box-shadow:
        0 7px 25px rgba(30, 50, 80, 0.05);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.profile-card:hover {
    transform: translateY(-3px);

    box-shadow:
        0 12px 30px rgba(30, 50, 80, 0.10);
}

.profile-card img {
    width: 70px;
    height: 70px;

    border-radius: 50%;

    object-fit: cover;

    background: #eef2f8;

    border: 2px solid #e1e8f2;
}

.profile-info {
    min-width: 0;
}

.profile-info h3 {
    font-size: 16px;

    color: #25334d;

    margin-bottom: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.profile-info p {
    font-size: 12px;

    color: #77849a;

    margin-top: 3px;
}


/* ==================================================
   SAVED CARDS
================================================== */

.saved-container {
    display: grid;

    gap: 14px;

    margin-bottom: 18px;
}

.saved-card {
    background: #ffffff;

    border: 1px solid #e0e7f0;

    border-radius: 17px;

    padding: 18px;

    box-shadow:
        0 7px 25px rgba(30, 50, 80, 0.05);
}

.saved-card h3 {
    font-size: 17px;

    color: #243450;

    margin-bottom: 10px;
}

.saved-card p {
    font-size: 13px;

    color: #69778d;

    padding: 5px 0;
}

.saved-card strong {
    color: #2563eb;
}

.delete-btn {
    margin-top: 12px;

    background: #fff1f1;

    color: #c62828;

    border: 1px solid #ffd6d6;

    border-radius: 9px;

    padding: 8px 12px;

    font-size: 12px;

    font-weight: 700;

    cursor: pointer;
}

.delete-btn:hover {
    background: #ffe5e5;
}


/* ==================================================
   EMPTY STATE
================================================== */

.empty {
    text-align: center;

    background: #ffffff;

    border: 1px dashed #cdd8e8;

    border-radius: 17px;

    padding: 35px 20px;

    color: #7b8799;

    font-size: 14px;
}


/* ==================================================
   UPLOAD MESSAGE
================================================== */

.message-container {
    margin-top: 5px;
}

.profile-date-title {
    margin-top: 4px;
}


/* ==================================================
   FOOTER
================================================== */

.site-footer {
    text-align: center;

    padding: 30px 18px 40px;

    border-top: 1px solid #e2e8f1;

    background: rgba(255, 255, 255, 0.65);

    color: #758198;
}

.site-footer p:first-child {
    color: #2d405f;

    font-size: 16px;

    font-weight: 800;

    margin-bottom: 4px;
}

.site-footer p:nth-child(2) {
    font-size: 12px;

    margin-bottom: 12px;
}

.copyright {
    font-size: 11px;

    color: #9aa5b5;
}


/* ==================================================
   TABLET
================================================== */

@media (max-width: 750px) {

    .main-container {
        padding:
            24px 15px
            50px;
    }

    .people-container {
        grid-template-columns: 1fr;
    }

    .profiles-container {
        grid-template-columns: 1fr;
    }

    .action-buttons {
        grid-template-columns: 1fr;
    }

}


/* ==================================================
   MOBILE
================================================== */

@media (max-width: 560px) {

    .header-content {
        padding: 13px 15px;
    }

    .logo-icon {
        width: 43px;
        height: 43px;

        border-radius: 12px;

        font-size: 22px;
    }

    .logo-area h1 {
        font-size: 20px;
    }

    .logo-area p {
        font-size: 10px;
    }


    .main-navigation {
        margin-top: 12px;

        padding:
            0 12px
            2px;
    }

    .nav-button {
        padding: 9px 12px;

        font-size: 11px;

        border-radius: 10px;
    }


    .page-header {
        gap: 11px;

        margin-bottom: 18px;
    }

    .page-icon {
        width: 46px;
        height: 46px;

        border-radius: 13px;

        font-size: 23px;
    }

    .page-header h2 {
        font-size: 22px;
    }

    .page-header p {
        font-size: 12px;
    }


    .form-card {
        padding: 17px;

        border-radius: 17px;
    }


    .date-selector {
        grid-template-columns:
            1fr 1.3fr 1.1fr;

        gap: 7px;
    }

    .date-select {
        height: 45px;

        padding: 0 7px;

        font-size: 12px;
    }


    .action-buttons {
        gap: 8px;
    }

    .action-buttons button {
        min-height: 44px;
    }


    .result-box {
        padding: 16px;

        border-radius: 16px;
    }


    .profile-card {
        padding: 12px;
    }

    .profile-card img {
        width: 60px;
        height: 60px;
    }

}


/* ==================================================
   VERY SMALL PHONES
================================================== */

@media (max-width: 360px) {

    .date-selector {
        grid-template-columns: 1fr;
    }

    .date-select {
        height: 46px;
    }

    .number-control input {
        max-width: 130px;
    }

    .page-header h2 {
        font-size: 20px;
    }

}


/* ==================================================
   ACCESSIBILITY
================================================== */

button,
select,
input,
textarea {
    -webkit-tap-highlight-color: transparent;
}

button:focus-visible,
select:focus-visible,
input:focus-visible,
textarea:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.20);
    outline-offset: 2px;
}


/* ==================================================
   REDUCED MOTION
================================================== */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }

            }
