import React from 'react'

const sidebar = () => {
    return (
        <nav className="flex flex-col items-center gap-4 overflow-y-auto no-scrollbar bg-gray-100 py-4 flex-shrink-0" role="navigation" aria-label="Main sidebar">
            <ul className="flex flex-col items-center w-full list-none p-0 m-0">
                <li>
                    <button
                        className="flex flex-col items-center hover:bg-gray-200 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" type="button" aria-label="View all apps">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid3x3-icon lucide-grid-3x3"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
                        <span className="text-xs">All apps</span>
                    </button>
                </li>
                <li><button className="flex flex-col items-center hover:bg-gray-200 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="button" aria-label="Go to home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                    <span className="text-xs">Home</span>
                </button>
                </li>
                <li>
                    <button
                        className="flex flex-col items-center hover:bg-gray-200 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="button"
                        aria-label="Create new content"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                        <span className="text-xs">Create</span>
                    </button>
                </li>
                <li>
                    <button
                        className="flex flex-col items-center hover:bg-gray-200 p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="button"
                        aria-label="Access my files"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-icon lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>                        <span className="text-xs">More</span></button>
                </li>
            </ul>
        </nav>

    )
}

export default sidebar
