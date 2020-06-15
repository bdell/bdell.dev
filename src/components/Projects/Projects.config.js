const projects = [
    {
        title: `goto.pizza`,
        url: `https://github.com/bdell/goto.pizza`,
        description: `The Fastest way to find hot pizza in your area!  Built using google maps, google places api, and react.`,
        secondaryLink: 'https://github.com/bdell/goto.pizza',
        projectId: 5,
        image: `https://raw.githubusercontent.com/bdell/goto.pizza/master/public/screenshot.png`,
    },
    {
        title: `bdell.dev`,
        url: `https://github.com/bdell/bdell.dev`,
        description: `A simple personal portfolio site`,
        projectId: 4,
        image: `${process.env.PUBLIC_URL}/projectImages/bdellDevScreenshot.png`,
    },
    {
        title: `OS Input Capture (OIC)`,
        url: `https://github.com/bdell/os-input-capture`,
        description: `OS level keylogger with mouse support and optional window screen shot capabilities for linux`,
        projectId: 3,
        image: `${process.env.PUBLIC_URL}/projectImages/oicImage.png`,
    },
    {
        title: `jupyter-themes (contrib)`,
        url: `https://github.com/dunovank/jupyter-themes/pull/59`,
        description: `Small theme contribution.  I love the monokai color scheme and was tired that jupyter didn't have one, so I added it.`,
        projectId: 2,
        image: `https://cloud.githubusercontent.com/assets/5677735/18818416/906381d8-8346-11e6-8842-8226b992a7d3.png`,
    },
    {
        title: `Electron Angular Material Yeoman Generator`,
        url: `https://github.com/bdell/generator-electron-angular-material`,
        description: `A yeoman generator to quickly scaffold out Electron apps with the Angular Material styling`,
        projectId: 1,
        image: `${process.env.PUBLIC_URL}/projectImages/angularMaterialElectronGenerator.png`,
    },
    {
        title: `Python PWA Toolkit`,
        url: `https://github.com/bdell/pyPWA`,
        description: `A python toolkit for partial wave analysis`,
        projectId: 0,
        image: `${process.env.PUBLIC_URL}/projectImages/pyPWAScreenShot.png`,
    },
];

export default projects;
