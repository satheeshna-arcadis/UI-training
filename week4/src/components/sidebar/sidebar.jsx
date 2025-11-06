import React from 'react'
import { Grid, Home, PlusCircle, Folder, MoreHorizontal } from 'lucide-react';

const sidebar = () => {
    return (
        <nav className="flex flex-col items-center gap-4 overflow-y-auto no-scrollbar bg-gray-100 py-4 flex-shrink-0" role="navigation" aria-label="Main sidebar">
            <ul className="flex flex-col items-center w-full list-none p-0 m-0">
                <li>
                    <button
                        className="flex flex-col items-center hover:bg-gray-200 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" type="button" aria-label="View all apps">
                        <Grid className="w-5 h-5" aria-hidden="true" />
                        <span className="text-xs">All apps</span>
                    </button>
                </li>
                <li><button className="flex flex-col items-center hover:bg-gray-200 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="button" aria-label="Go to home">
                    <Home className="w-5 h-5" aria-hidden="true" />
                    <span className="text-xs">Home</span>
                </button>
                </li>
                <li>
                    <button
                        className="flex flex-col items-center hover:bg-gray-200 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="button"
                        aria-label="Create new content"
                    >
                        <PlusCircle className="w-5 h-5" aria-hidden="true" />
                        <span className="text-xs">Create</span>
                    </button>
                </li>
                <li>
                    <button
                        className="flex flex-col items-center hover:bg-gray-200 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="button"
                        aria-label="Access my files"
                    >
                        <Folder className="w-5 h-5" aria-hidden="true" />
                        <span className="text-xs">My Files</span>
                    </button>
                </li>
                <li>
                    <button
                        className="flex flex-col items-center hover:bg-gray-200 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="button"
                        aria-label="Open Outlook"
                    >
                        <img src="https://img.icons8.com/color/48/new-post.png" className="w-6 h-6" alt="" aria-hidden="true" />
                        <span className="text-xs">Outlook</span>
                    </button>
                </li>
                <li>
                    <button className="flex flex-col items-center hover:bg-gray-200 p-2" type="button" aria-label="Open Teams" >
                        <img src="https://img.icons8.com/color/48/microsoft-teams.png" className="w-6 h-6" alt="Teams" aria-hidden="true" />
                        <span className="text-xs">Teams</span>
                    </button>
                </li>
                <li>
                    <button className="flex flex-col items-center hover:bg-gray-200 p-2 " type="button" aria-label="Open Word">
                        <img src="https://img.icons8.com/color/48/ms-word.png" className="w-6 h-6" alt="Word" aria-hidden="true" />
                        <span className="text-xs">Word</span> </button>
                </li>
                <li>
                    <button className="flex flex-col items-center hover:bg-gray-200 p-2 " type="button" aria-label="Open Excel">
                        <img src="https://img.icons8.com/color/48/ms-excel.png" className="w-6 h-6" alt="Excel" aria-hidden="true" />
                        <span className="text-xs">Excel</span></button>
                </li>
                <li>
                    <button className="flex flex-col items-center hover:bg-gray-200 p-2 " type="button" aria-label="Open PowerPoint">
                        <img src="https://img.icons8.com/color/48/ms-powerpoint.png" className="w-6 h-6" alt="PowerPoint" aria-hidden="true" />
                        <span className="text-xs">PowerPoint</span></button>
                </li>
                <li>
                    <button className="flex flex-col items-center hover:bg-gray-200 p-2 " type="button" aria-label="Open OneDrive">
                        <img src="https://img.icons8.com/?size=100&id=PnENrLMMW4eV&format=png" className="w-6 h-6" alt="OneDrive" aria-hidden="true" />
                        <span className="text-xs">OneDrive</span></button>
                </li>
                <li>
                    <button className="flex flex-col items-center hover:bg-gray-200 p-2 " type="button" aria-label="Open OneNote">
                        <img src="https://img.icons8.com/?size=100&id=JNZqbHmBWZLU&format=png" className="w-6 h-6" alt="OneNote" aria-hidden="true" />
                        <span className="text-xs">OneNote</span></button>
                </li>
                <li>
                    <button className="flex flex-col items-center hover:bg-gray-200 p-2 " type="button" aria-label="More options">
                        <MoreHorizontal className="w-5 h-5" aria-hidden="true" />
                        <span className="text-xs">More</span></button>
                </li>
            </ul>
        </nav>

    )
}

export default sidebar
