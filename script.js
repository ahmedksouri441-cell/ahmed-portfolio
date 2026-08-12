/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section");

function updateActiveLink() {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveLink);

window.addEventListener("load", updateActiveLink);


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

    project1: {

        type: "REVERSE ENGINEERING · COFICAB",

        title: "Bobbin Changing System",

        description: `
            Reverse engineering of the SV402D mechanical subsystem
            from physical components and scanned drawings.
            The project involved dimensional measurements,
            mechanical reconstruction and assembly modeling.
        `,

        methodology: `
            The mechanical components were measured manually and
            reconstructed under SolidWorks. The assembly was rebuilt
            by defining the different components and their kinematic
            relationships while considering functional tolerances.
        `,

        tools: [
            "SolidWorks",
            "CAD",
            "Reverse Engineering",
            "3D Modeling",
            "Assembly"
        ]

    },


    project2: {

        type: "MECHANICAL DESIGN · MULTIPHYSICS",

        title: "Automated Photovoltaic Panel Cleaning System",

        description: `
            Design of an automated mechanical system for cleaning
            photovoltaic panel surfaces.
        `,

        methodology: `
            The project included functional analysis and definition
            of the engineering requirements, followed by 3D CAD
            modeling and evaluation of drive and displacement
            solutions while considering mechanical and environmental
            constraints.
        `,

        tools: [
            "CAD",
            "Mechanical Design",
            "Functional Analysis",
            "3D Modeling",
            "Mechanisms"
        ]

    },


    project3: {

        type: "CATIA V5 · MECHANICAL DESIGN",

        title: "Five-Vane Positive Displacement Pump",

        description: `
            Mechanical CAD project involving the modeling of a
            five-vane positive displacement pump with an eccentric
            rotor.
        `,

        methodology: `
            The different mechanical components and the eccentric
            rotor configuration were modeled using CATIA V5 to
            represent the operating mechanism and assembly.
        `,

        tools: [
            "CATIA V5",
            "CAD",
            "Mechanical Design",
            "Mechanisms"
        ]

    },


    project4: {

        type: "ABAQUS · FEA",

        title: "2D V-Bending Simulation",

        description: `
            Finite element simulation of a 2D aluminium sheet
            undergoing V-bending.
        `,

        methodology: `
            The numerical model includes contact between the sheet
            and tooling together with plastic behavior represented
            using a Johnson–Cook material model.
        `,

        tools: [
            "Abaqus",
            "FEA",
            "Contact",
            "Plasticity",
            "Johnson–Cook"
        ]

    },


    project5: {

        type: "ABAQUS · ELASTOPLASTICITY",

        title: "3D Elastoplastic Tensile Test",

        description: `
            3D finite element simulation of tensile loading with
            elastoplastic behavior and necking.
        `,

        methodology: `
            The simulation investigates the deformation behavior
            during tensile loading and includes thermomechanical
            coupling to represent the interaction between mechanical
            deformation and thermal effects.
        `,

        tools: [
            "Abaqus",
            "3D FEA",
            "Elastoplasticity",
            "Necking",
            "Thermomechanics"
        ]

    },


    project6: {

        type: "INDUSTRIAL ENGINEERING · SGBIA",

        title: "Industrial Maintenance Optimization",

        description: `
            Industrial engineering project focused on improving
            the performance and reliability of a PET production line.
        `,

        methodology: `
            The work included calculation of TRS, machine FMEA/AMDEC
            on the SMI packer and contribution to TPM implementation.
            Improvement actions were proposed to increase equipment
            availability and reliability.
        `,

        tools: [
            "TRS / OEE",
            "AMDEC / FMEA",
            "TPM",
            "Maintenance",
            "Reliability"
        ]

    }

};


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(projectId) {

    const project = projects[projectId];

    if (!project) return;

    const modal = document.getElementById("project-modal");

    const modalContent =
        document.getElementById("modal-content");

    modalContent.innerHTML = `

        <span class="modal-project-type">
            ${project.type}
        </span>

        <h2>
            ${project.title}
        </h2>

        <h3>
            Project Overview
        </h3>

        <p>
            ${project.description}
        </p>

        <h3>
            Approach
        </h3>

        <p>
            ${project.methodology}
        </p>

        <h3>
            Tools & Skills
        </h3>

        <div class="modal-tags">

            ${project.tools
                .map(tool => `<span>${tool}</span>`)
                .join("")
            }

        </div>

    `;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProject() {

    const modal =
        document.getElementById("project-modal");

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

}


/* Close when clicking outside */

document
    .getElementById("project-modal")
    .addEventListener("click", (event) => {

        if (event.target.id === "project-modal") {

            closeProject();

        }

    });


/* Close with ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeProject();

    }

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        contactForm.querySelector("input[type='text']").value;

    const email =
        contactForm.querySelector("input[type='email']").value;

    const message =
        contactForm.querySelector("textarea").value;


    const subject =
        encodeURIComponent(
            `Portfolio Contact - ${name}`
        );

    const body =
        encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        );


    window.location.href =
        `mailto:ahmed.ksouri@etudiant-enit.utm.tn?subject=${subject}&body=${body}`;

});
