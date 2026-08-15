const projects = {

    project1: {

        type: "RÉTRO-INGÉNIERIE · COFICAB",

        title: "Système de changement de bobine",

        description: `
            Rétro-ingénierie du sous-ensemble mécanique SV402D
            à partir de pièces physiques et de plans scannés.
            Le projet comprend les relevés dimensionnels,
            la reconstruction mécanique et la modélisation
            de l'assemblage.
        `,

        methodology: `
            Les composants mécaniques ont été relevés manuellement
            puis reconstruits sous SolidWorks. L'assemblage a été
            reconstitué en définissant les différents composants,
            leurs liaisons cinématiques et les tolérances fonctionnelles.
        `,

        tools: [
            "SolidWorks",
            "CAO",
            "Rétro-ingénierie",
            "Modélisation 3D",
            "Assemblage"
        ]
    },


    project2: {

        type: "CONCEPTION MÉCANIQUE · MULTIPHYSIQUE",

        title: "Système automatisé de nettoyage photovoltaïque",

        description: `
            Conception d'un système automatisé destiné au nettoyage
            des surfaces photovoltaïques.
        `,

        methodology: `
            Le projet comprend l'analyse fonctionnelle et la définition
            du besoin, suivies de la modélisation 3D en CAO et de l'étude
            des solutions d'entraînement et de déplacement en tenant
            compte des contraintes mécaniques et environnementales.
        `,

        tools: [
            "CAO",
            "Conception mécanique",
            "Analyse fonctionnelle",
            "Modélisation 3D",
            "Mécanismes"
        ]
    },


    project3: {

        type: "CATIA V5 · CONCEPTION MÉCANIQUE",

        title: "Pompe volumétrique à cinq palettes",

        description: `
            Projet de conception mécanique portant sur la modélisation
            d'une pompe volumétrique à cinq palettes avec rotor excentré.
        `,

        methodology: `
            Les différents composants mécaniques ainsi que le rotor
            excentré ont été modélisés sous CATIA V5 afin de représenter
            le fonctionnement du mécanisme et son assemblage.
        `,

        tools: [
            "CATIA V5",
            "CAO",
            "Conception mécanique",
            "Mécanismes"
        ]
    },


    project4: {

        type: "ABAQUS · ÉLÉMENTS FINIS",

        title: "Simulation du pliage en V",

        description: `
            Simulation numérique 2D par éléments finis du pliage en V
            d'une tôle d'aluminium.
        `,

        methodology: `
            Le modèle numérique prend en compte le contact entre la tôle
            et l'outillage ainsi que le comportement plastique du matériau
            à travers le modèle de Johnson–Cook.
        `,

        tools: [
            "Abaqus",
            "Éléments finis",
            "Contact",
            "Plasticité",
            "Johnson–Cook"
        ]
    },


    project5: {

        type: "ABAQUS · ÉLASTOPLASTICITÉ",

        title: "Traction 3D élastoplastique",

        description: `
            Simulation numérique 3D d'un essai de traction avec
            comportement élastoplastique et apparition de la striction.
        `,

        methodology: `
            La simulation étudie le comportement du matériau lors
            de la traction et intègre un couplage thermomécanique
            permettant de prendre en compte les interactions entre
            déformation mécanique et effets thermiques.
        `,

        tools: [
            "Abaqus",
            "Éléments finis 3D",
            "Élastoplasticité",
            "Striction",
            "Thermomécanique"
        ]
    },


    project6: {

        type: "INGÉNIERIE INDUSTRIELLE · SGBIA",

        title: "Optimisation de la maintenance industrielle",

        description: `
            Projet d'ingénierie industrielle consacré à l'amélioration
            des performances et de la fiabilité d'une ligne de production PET.
        `,

        methodology: `
            Le travail comprend le calcul du TRS, la réalisation d'une
            AMDEC machine sur la fardeleuse SMI et une contribution à
            la mise en place de la TPM. Des actions d'amélioration ont
            été proposées afin d'améliorer la disponibilité et la
            fiabilité des équipements.
        `,

        tools: [
            "TRS / OEE",
            "AMDEC / FMEA",
            "TPM",
            "Maintenance",
            "Fiabilité"
        ]
    }

};