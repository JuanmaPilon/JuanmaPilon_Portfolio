export type Project = {
    nombre: string,
    imagen: string,
    shortDescription: string,
    descripcion: string,
    link?: string,

}

export const projectInfo: Project[] = [
    {
        "nombre": "Chatbot IA para la atención al cliente",
        "imagen": "/projects/Chatbot.png",
        "shortDescription": "Un Chatbot creado con IA para la empresa WIS",
        "descripcion": "Un Chatbot creado con IA para la empresa WIS",
        "link": ""
    },
    {
        "nombre": "Proyecto 2",
        "imagen": "https://via.placeholder.com/150",
        "shortDescription": "Descripcion del proyecto 2",
        "descripcion": "Descripcion del proyecto 2",
        "link": ""

    },
    {
        "nombre": "Proyecto 3",
        "imagen": "https://via.placeholder.com/150",
        "shortDescription": "Descripcion del proyecto 3",
        "descripcion": "Descripcion del proyecto 3",
        "link": ""
    },
    {
        "nombre": "Proyecto 4",
        "imagen": "https://via.placeholder.com/150",
        "shortDescription": "Descripcion del proyecto 4",
        "descripcion": "Descripcion del proyecto 4",
        "link": ""
    }
]