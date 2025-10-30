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
              window.location.href = "/projects/1_project.html";
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
