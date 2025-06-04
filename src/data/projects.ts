import WorkInProgress from '../assets/work-in-progress.jpg';
import WIS from "../assets/wis-logo.png";
import netLab from "../assets/queue-calling-system.jpeg";

export type Project = {
    nombre: string,
    imagen: string,
    shortDescription: string,
    descripcion: string,
    link?: string,

}

export const projectInfo: Project[] = [
    {
        "nombre": "AI Virtual Assistant for WIS (Warehouse Information System)",
        "imagen": WIS,
        "shortDescription": "A warehouse-focused AI chatbot using LLaMA 3.1, built with Python and Streamlit. It retrieves relevant documents from a vector database and generates context-aware responses, enhancing warehouse operations and logistics management.",
        "descripcion": `As part of a team, we developed an AI-powered virtual assistant as the final project for the Computer Science Technologist degree at UTEC. The assistant was designed to provide conversational support within a Warehouse Management System (WMS), responding to natural language queries with contextual memory. Built with Python and Streamlit, it integrates Meta’s LLaMA 3.1 through an OpenAI-compatible API using LM Studio. It features session state handling, fine-tuned prompt design, Retrieval-Augmented Generation (RAG), and was validated with real users.`,
        "link": "https://github.com/JuanmaPilon/UTEC_PROYECTO_ProFinal"
    },
    {
        "nombre": "Management System for Public Queue Calling System",
        "imagen": netLab,
        "shortDescription": "A desktop application created as a final project for the .NET course at UTEC. It simulates a queue management system commonly used in public institutions, where individuals are called and displayed on a screen. The system supports real-time calling, a public-facing display, and an administrator mode for monitoring and controlling operations.",
        "descripcion": "This project was developed as the final lab for the .NET course at UTEC. It is a queue calling system designed to emulate how public institutions manage waiting lines. The application allows administrative users to call individuals in order, and those calls are displayed on a separate screen intended for the public. The system is built using C# and Windows Forms, with a relational database backend managed via Entity Framework. It features two main interfaces: Admin Panel: where authorized personnel can manage the queue, call or recall people, and monitor the flow of service. Public Display: a simplified full-screen view that shows the currently called person, designed to be projected or shown on public monitors. It supports real-time updates, persistent storage, and smooth transitions between user interactions. The design was kept clean and functional, prioritizing usability and responsiveness for both administrators and the public. This project was an excellent opportunity to consolidate knowledge in .NET, OOP, and UI state management. Particular attention was given to separating concerns and ensuring a clear distinction between user-facing and admin functionality.",
        "link": "https://github.com/JuanmaPilon/UTEC_.NET_LabFinal"

    },
    {
        "nombre": "WORK IN PROGRESS",
        "imagen": WorkInProgress,
        "shortDescription": "WORK IN PROGRESS",
        "descripcion": "WORK IN PROGRESS",
        "link": ""
    },
    {
        "nombre": "WORK IN PROGRESS",
        "imagen": WorkInProgress,
        "shortDescription": "WORK IN PROGRESS",
        "descripcion": "WORK IN PROGRESS",
        "link": ""
    },
        {
        "nombre": "WORK IN PROGRESS",
        "imagen": WorkInProgress,
        "shortDescription": "WORK IN PROGRESS",
        "descripcion": "WORK IN PROGRESS",
        "link": ""
    },
        {
        "nombre": "WORK IN PROGRESS",
        "imagen": WorkInProgress,
        "shortDescription": "WORK IN PROGRESS",
        "descripcion": "WORK IN PROGRESS",
        "link": ""
    },
        {
        "nombre": "WORK IN PROGRESS",
        "imagen": WorkInProgress,
        "shortDescription": "WORK IN PROGRESS",
        "descripcion": "WORK IN PROGRESS",
        "link": ""
    },    {
        "nombre": "WORK IN PROGRESS",
        "imagen": WorkInProgress,
        "shortDescription": "WORK IN PROGRESS",
        "descripcion": "WORK IN PROGRESS",
        "link": ""
    }
]