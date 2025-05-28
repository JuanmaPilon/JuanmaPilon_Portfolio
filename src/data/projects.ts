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
        "nombre": "AI-Powered Assistant for WIS (Warehouse Information System)",
        "imagen": WIS,
        "shortDescription": "Final project developed for my degree in Information Technology at UTEC. The objective was to design and implement an intelligent assistant capable of answering questions related to the internal operations and documentation of a Warehouse Information System (WIS).",
        "descripcion": `This assistant is built using Retrieval-Augmented Generation (RAG) techniques, which combine traditional information retrieval with generative AI to provide accurate, context-aware responses. The system integrates:

Vector-based document retrieval: Relevant warehouse-related documents are indexed into a vector database, allowing the assistant to fetch context dynamically.

Language Model integration: A local LLM running in LM Studio is queried using retrieved content, enabling answers grounded in the company’s documentation.

Custom fine-tuning and prompt engineering to guide the assistant’s behavior and improve relevance of answers.

The project is implemented in Python using Jupyter Notebook, and serves as a strong demonstration of practical AI application in logistics and enterprise resource planning (ERP) environments.

We used LLama 3.1, a powerful language model, to enhance the assistant's capabilities. The model was fine-tuned with specific prompts and instructions to ensure it could effectively understand and respond to queries related to warehouse operations, inventory management, and logistics processes.`,
        "link": "https://github.com/JuanmaPilon/UTEC_PROYECTO_ProFinal"
    },
    {
        "nombre": "UTEC .NET Final Lab – Management System for Public Queue Calling System",
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