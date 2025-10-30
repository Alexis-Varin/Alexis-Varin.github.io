// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-contact",
    title: "Contact",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bioinformatic-analyses",
          title: "Bioinformatic analyses",
          description: "This portfolio presents a selection of bioinformatic methods I routinely use. While this list reflects my current expertise, I can also implement new analyses upon request, provided that relevant R packages or Python libraries are available. To support computationally intensive projects, I have access to the Mésocentre de Franche-Comté supercomputing facilities. This includes high-memory nodes (up to 1TB RAM) for large-scale data processing (e.g., expression matrices with millions of cells) and Nvidia A100 40GB GPUs for machine learning and AI model training and inference. For questions or collaboration inquiries, you can reach me using the links in the navigation bar of the Contact section.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bioinformatic-analyses/";
          },
        },{id: "nav-code",
          title: "Code",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-alignment",
          title: 'Alignment',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Bulk_alignment.html";
            },},{id: "projects-biomex",
          title: 'BIOMEX',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Bulk_biomex.html";
            },},{id: "projects-diablo",
          title: 'DIABLO',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Multiomics_diablo.html";
            },},{id: "projects-mofa2",
          title: 'MOFA2',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Multiomics_mofa2.html";
            },},{id: "projects-alignment",
          title: 'Alignment',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sc_alignment.html";
            },},{id: "projects-cellchat",
          title: 'CellChat',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sc_cellchat.html";
            },},{id: "projects-pseudotime",
          title: 'Pseudotime',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sc_pseudotime.html";
            },},{id: "projects-seurat-scanpy",
          title: 'Seurat/Scanpy',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sc_seurat.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
