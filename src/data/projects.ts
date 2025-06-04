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
        "descripcion": `As part of a team, we developed an AI-powered virtual assistant for the company WIS as the final project for the Computer Science Technologist degree at UTEC. The assistant was designed to provide conversational support within a Warehouse Management System (WMS), responding to natural language queries with contextual memory. Built with Python and Streamlit, it integrates Meta’s LLaMA 3.1 through an OpenAI-compatible API using LM Studio. It features session state handling, fine-tuned prompt design, Retrieval-Augmented Generation (RAG), and was validated with real users.`,
        "link": "https://github.com/JuanmaPilon/UTEC_PROYECTO_ProFinal"
    },
    {
        "nombre": "Queue Management System for Public Offices",
        "imagen": netLab,
        "shortDescription": "C# and .NET-based queue management platform for high-traffic public service offices, with real-time calling, admin control, and analytics dashboards.",
        "descripcion": `As part of a four-person team, we developed a desktop-based queue management system for public service offices, as the final project for the .NET Lab course at UTEC. The application simulates real-world queue workflows found in high-traffic institutions and was built using C# with a Windows Forms UI, following a three-layer monolithic architecture. The system supports multiple user roles—including clients, operators, quality managers, and administrators—and enables real-time queue calling, public display screens, and centralized service control across multiple locations. It features persistent session handling, a relational database managed through Entity Framework, and integrated data visualizations using ChartJS for performance metrics. The project focused on usability, role-based interfaces, clean architecture, and production-level deployment practices, making it a scalable solution aligned with national-level digitalization initiatives.`,
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