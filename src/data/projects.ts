import WorkInProgress from '../assets/work-in-progress.jpg';
import WIS from "../assets/wis-logo.png";

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

The project is implemented in Python using Jupyter Notebook, and serves as a strong demonstration of practical AI application in logistics and enterprise resource planning (ERP) environments.`,
        "link": "https://github.com/JuanmaPilon/UTEC_PROYECTO_ProFinal"
    },
    {
        "nombre": "Final lab of the JakartaEE workshop",
        "imagen": WorkInProgress,
        "shortDescription": "Final lab of the JakartaEE workshop",
        "descripcion": "Final lab of the JakartaEE workshop",
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