//0-25 bg-red-400
//26-50 bg-yellow-400
//51-75 bg-green-400
//76-100 bg-sky-400
export const presentacion = {
    img: require("./assets/lenin.jpg"),
    parrafo: `
        A self-taught and technology enthusiast.
        I've improved my skills primarily in Python, 
        Java, and C#. I've developed and led desktop - web apps, and AI projects.
        Researcher of procedural content generation in video games.
        It's a  pleasure to share my skills, and I hope we can work 
        together on exciting projects in the future!
    `,
    nombre: "Lenin Acosta",
    profesion: "Software engineer",
    estilos_img: "w-1/4 h-1/4 grayscale",
};

export const datos_habilidades = [
    {
        titulo: 'Frontend',
        parrafo: `
                Working on frontend development with capable frameworks.
            `,
        lista: [
            { svg: require('./assets/vuejs.svg'), nivel: '90%', estilo1: 'bg-green-400', estilo2: 'bg-green-300' },
            { svg: require('./assets/angular.svg'), nivel: '70%', estilo1: 'bg-red-300', estilo2: 'bg-green-400' },
            { svg: require('./assets/css3.svg'), nivel: '70%', estilo1: 'bg-cyan-500', estilo2: 'bg-green-400' },
            { svg: require('./assets/materializecss.svg'), nivel: '55%', estilo1: 'bg-slate-600', estilo2: 'bg-yellow-400' },
            { svg: require('./assets/tailwindcss-icon.svg'), nivel: '80%', estilo1: 'bg-slate-600', estilo2: 'bg-green-300' },
            { svg: require('./assets/picocss.svg'), nivel: '55%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
            { svg: require('./assets/vuetify.png'), nivel: '50%', estilo1: 'bg-slate-600', estilo2: 'bg-yellow-400' },
        ]
    },
    {
        titulo: 'Backend',
        parrafo: `
            Building backend infrastructure with strong technologies.
        `,
        lista: [
            { svg: require('./assets/java.svg'), nivel: '80%', estilo1: 'bg-gradient-to-t from-cyan-500 to-yellow-500', estilo2: 'bg-green-300' },
            { svg: require('./assets/python.svg'), nivel: '90%', estilo1: 'bg-blue-600', estilo2: 'bg-green-300' },
            { svg: require('./assets/csharp.png'), nivel: '70%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
            { svg: require('./assets/sqlserver.svg'), nivel: '65%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
            { svg: require('./assets/sqlplus.svg'), nivel: '65%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
            { svg: require('./assets/mysql.svg'), nivel: '65%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
        ]
    },
    {
        titulo: 'Artificial Intelligence',
        parrafo: `
            Building AI models and computer vision using versatile tools.
        `,
        lista: [
            { svg: require('./assets/tensorflow.svg'), nivel: '70%', estilo1: 'bg-gradient-to-t from-cyan-500 to-orange-500', estilo2: 'bg-green-400' },
            { svg: require('./assets/opencv.jpeg'), nivel: '70%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
        ]
    },
    {
        titulo: 'Video Games',
        parrafo: `
            Researching to build fun.
        `,
        lista: [
            { svg: require('./assets/godot-logo.png'), nivel: '50%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
            { svg: require('./assets/unity.png'), nivel: '50%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
        ]
    },
]


export const card_contacto = {
    // img: 'url("https://picsum.photos/id/668/640/480?category=nature")',
    img: `url(${require('../src/assets/interior.jpg')})`,
    titulo: 'Contact',
    texto: ' Here are some media to contactme through '
}

export const datos_contacto = [
    {
        estilos_card: 'bg-gray-700 ',
        img: require('./assets/linkedin.svg'),
        estilos_texto: 'text-gray-400 decoration-slice underline decoration-gray-400 decoration-2 hover:text-sky-500',
        enlace: 'https://www.linkedin.com/in/lenin-acosta',
        texto: 'Find me in Linkedin! '
    },
    {
        estilos_card: 'bg-gray-700',
        img: require('./assets/gmail.png'),
        estilos_texto: 'text-gray-400 decoration-slice underline decoration-gray-400 decoration-2 hover:text-orange-500 ',
        enlace: 'mailto:rkb.lenin@gmail.com',
        texto: ' Contact me through email '
    },
    {
        estilos_card: 'bg-gray-700',
        img: require('./assets/whatsapp.svg'),
        estilos_texto: 'text-gray-400 decoration-slice underline decoration-gray-400 decoration-2 hover:text-green-500 ',
        enlace: 'https://wa.me/593959496570?text=Hola%20Lenin!%20he%20revisado%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo',
        texto: ' Send me a message by WhatsApp '
    },
    {
        estilos_card: 'bg-gray-700',
        img: require('./assets/telegram.svg'),
        estilos_texto: 'text-gray-400 decoration-slice underline decoration-gray-400 decoration-2 hover:text-sky-500 ',
        enlace: 'https://t.me/leninrkb',
        texto: ' Reach out to me via Telegram '
    },
]

export const card_proyectos = {
    img: `url(${require("../src/assets/bonsai.jpg")})`,
    titulo: 'My Projects',
    texto: 'Some of the projects I have carried out to reinforce knowledge'
}


export const datos_proyectos = [
    {
        img: require('./assets/vehicle-plate-recognition.png'),
        titulo: ' vehicle plate recognition with computer vision and cnn ',
        detalle: `
            Vehicle plate characters recognition using computer vision and CNN. 
            UI was built with Flet.
        `,
        github: 'https://github.com/leninrkb/vehicle-plate-recognition.git',
        web: 'no'
    },
    {
        img: require('./assets/proyectos/algoritmo_genetico_8_reinas/c1.png'),
        titulo: 'Genetic algorithm to solve the eight queens problem',
        detalle: `
            Genetic algorithm in Java to solve
            the problem of the eight queens.
            Its objective is to reinforce knowledge in Java,
            Artificial Intelligence and its application in resolution
            of classical problems in the theory of computation.
        `,
        github: 'https://github.com/leninrkb/Algoritmo-genetico-para-8-reinas.git',
        web: 'no'
    },
    {
        img: require('./assets/proyectos/algoritmos_puros_ia/c1.png'),
        titulo: 'Solution to route selection by genetic algorithm, informed search and uninformed search',
        detalle: `
            AI algorithms written in java to find possible routes,
            the most optimal or a route with specific length
            given a Map class containing the information
            of the streets.
        `,
        github: 'https://github.com/leninrkb/Algoritmos-puros-de-IA',
        web: 'no'
    },
    {
        img: require('./assets/proyectos/scipts-python-data-augmentation/c1.png'),
        titulo: 'Python script for data augmentation',
        detalle: `
            I have written some methods that you can use
            to do image data augmentation. The objective is
            dispense with the part where a document is read, saved or processed
            image or image directories.
            The methods are parameterized, they take the image/directory
            and the parameters to modify them.
        `,
        github: 'https://github.com/leninrkb/ScriptsPython',
        web: 'no'
    },
    {
        img: require('./assets/proyectos/modelo-ann-prediccion-colores/c1.png'),
        titulo: 'Model with ANN for color prediction',
        detalle: `
            Model with neural networks for color prediction.
            Network was trained with a dataset of up to 20 thousand images.
            You can download and use the weights by verifying the dimensions
            of the window on the images to be worked on.

            Additionally, you can find a mini implementation with
            opencv that detects the colors of the video captured by
            your camera in online time.
        `,
        github: 'https://github.com/leninrkb/Modelo-para-clasificacion-de-colores-ANN',
        web: 'https://www.kaggle.com/code/leninacosta/modelo-ann-reconocimiento-de-colores/notebook'
    },
    {
        img: require('./assets/proyectos/encriptacion-aes/c1.png'),
        titulo: ' Implementation of AES encryption in Vuejs ',
        detalle: `
            It is a simple implementation
            where you can test the website and inspect
            the code to understand better
            this type of security.
        `,
        github: 'https://github.com/leninrkb/Encriptacion-AES',
        web: 'https://leninrkb.github.io/Encriptacion-AES/'
    }, {
        img: require('./assets/proyectos/bodegas-java/c1.png'),
        titulo: ' Warehouse control with java ',
        detalle: `
            Web project to simulate the management of a
            simple warehouse using services in java
        `,
        github: 'https://github.com/leninrkb/bodegasJAVA',
        web: 'no'
    }, {
        img: require('./assets/proyectos/solucion_laberinto_busqueda_anchura/c1.png'),
        titulo: ' Deep first informed search algorithm ',
        detalle: `
            Python solution to solve mazes using
            search not informed by width.
            Given a maze mxn and the objective function, generate a tree of
            agents until reaching the objective function. Metrics are obtained from
            execution time per cycle and for the total execution, as well
            as a log of memory usage.
        `,
        github: 'https://github.com/leninrkb/Algoritmo-busqueda-no-informada---anchura---colas',
        web: 'no'
    },
    {
        img: require('./assets/proyectos/music_tag_editor/c1.png'),
        titulo: ' Metadata editor with JS and Pico CSS',
        detalle: `
            Simple editor to view metadata
            of your songs. If you like the cover of
            your favorite albums, you can download them
            with this tool.
        `,
        github: 'https://github.com/leninrkb/music-tag-editor',
        web: 'https://leninrkb.github.io/music-tag-editor/'
    }, {
        img: require('./assets/proyectos/wumpus/wumpus.png'),
        titulo: ' The world of wumpus in prolog ',
        detalle: `
            Knowledge base implementation and
            rules for solving the game "the world of
            "wumpus".
        `,
        github: 'https://github.com/leninrkb/el-mundo-de-wumpus-en-prolog',
        web: 'no'
    },
]