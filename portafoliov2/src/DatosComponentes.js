//0-25 bg-red-400
//26-50 bg-yellow-400
//51-75 bg-green-400
//76-100 bg-sky-400
export const datos_habilidades = [
    {
        titulo: 'Frontend',
        parrafo: `Creación de 
            paginas web atractivas y responsivas
            utilizando tecnologías versatiles para ofrecer 
            soluciones de calidad en el frontend.`,
        lista: [
            { svg: require('./assets/angular.svg'), nivel: '35%', estilo1: 'bg-red-300', estilo2: 'bg-red-400' },
            { svg: require('./assets/vuejs.svg'), nivel: '60%', estilo1: 'bg-green-400', estilo2: 'bg-green-400' },
            { svg: require('./assets/css3.svg'), nivel: '40%', estilo1: 'bg-cyan-500', estilo2: 'bg-yellow-400' },
            { svg: require('./assets/materializecss.svg'), nivel: '40%', estilo1: 'bg-slate-600', estilo2: 'bg-yellow-400' },
            { svg: require('./assets/tailwindcss-icon.svg'), nivel: '55%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
            { svg: require('./assets/picocss.svg'), nivel: '55%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
            { svg: require('./assets/vuetify.png'), nivel: '35%', estilo1: 'bg-slate-600', estilo2: 'bg-yellow-400' },
        ]
    },
    {
        titulo: 'Backend',
        parrafo: `Desarrollo robusto
        y eficiente en el servidor, 
        optimizando recursos y ofreciendo
        soluciones escalables.`,
        lista: [
            { svg: require('./assets/java.svg'), nivel: '75%', estilo1: 'bg-gradient-to-t from-cyan-500 to-yellow-500', estilo2: 'bg-green-400' },
            { svg: require('./assets/python.svg'), nivel: '70%', estilo1: 'bg-blue-600', estilo2: 'bg-green-400' },
            { svg: require('./assets/csharp.png'), nivel: '55%', estilo1: 'bg-slate-600', estilo2: 'bg-yellow-400' },
            { svg: require('./assets/sqlserver.svg'), nivel: '60%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
            { svg: require('./assets/sqlplus.svg'), nivel: '60%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
            { svg: require('./assets/mysql.svg'), nivel: '60%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
        ]
    },
    {
        titulo: 'Inteligencia Artificial',
        parrafo: `Desarrollo e implementacion de algoritmos puros de IA, MachineLearning y DeepLearning`,
        lista: [
            { svg: require('./assets/tensorflow.svg'), nivel: '60%', estilo1: 'bg-gradient-to-t from-cyan-500 to-orange-500', estilo2: 'bg-green-400' },
            { svg: require('./assets/opencv.jpeg'), nivel: '60%', estilo1: 'bg-slate-600', estilo2: 'bg-green-400' },
        ]
    }
]

export const presentacion = {
    img: require('./assets/lenin.jpg'),
    parrafo: `Como apasionado de la tecnología, 
        he desarrollado habilidades en lenguajes de 
        programación como Python, Java y C#. 
        Tengo experiencia en proyectos de escritorio, 
        web e inteligencia artificial. ¡Es un placer compartir 
        mis habilidades, espero trabajemos en proyectos 
        emocionantes en el futuro!`,
    nombre: 'Lenin Acosta',
    profesion: 'Ingeniero en software',
    estilos_img: 'w-1/4 h-1/4 grayscale'
}

export const datos_contacto = [
    {
        estilos_card:'bg-gray-700 ',
        img:require('./assets/linkedin.svg'),
        estilos_texto:'text-gray-400 decoration-slice underline decoration-gray-400 decoration-2 hover:text-sky-500',
        enlace:'https://www.linkedin.com/in/lenin-acosta',
        texto:'Estoy en Linkedin! '
    },
    {
        estilos_card:'bg-gray-700',
        img:require('./assets/gmail.png'),
        estilos_texto:'text-gray-400 decoration-slice underline decoration-gray-400 decoration-2 hover:text-orange-500 ',
        enlace:'mailto:rkb.lenin@gmail.com',
        texto:'Aquí tienes mi correo '
    },
    {
        estilos_card:'bg-gray-700',
        img:require('./assets/whatsapp.svg'),
        estilos_texto:'text-gray-400 decoration-slice underline decoration-gray-400 decoration-2 hover:text-green-500 ',
        enlace:'https://wa.me/593959496570?text=Hola%20Lenin!%20he%20revisado%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo',
        texto:'Escríbeme por WhatsApp '
    },
    {
        estilos_card:'bg-gray-700',
        img:require('./assets/telegram.svg'),
        estilos_texto:'text-gray-400 decoration-slice underline decoration-gray-400 decoration-2 hover:text-sky-500 ',
        enlace:'https://t.me/leninrkb',
        texto:'Escríbeme por Telegram '
    },
]