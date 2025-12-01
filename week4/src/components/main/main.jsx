import React from 'react'

const main = () => {
    return (
        <div className="flex flex-col flex-grow overflow-hidden" role="main">
            <nav className="flex items-center justify-between bg-gray-100 text-gray-800 px-4 py-5 flex-shrink-0" role="navigation" aria-label="Main navigation">
                <div className="flex items-center gap-4 w-full">
                    <span className="text-red-700 font-semibold text-lg" aria-label="Microsoft 365" >Microsoft 365</span>
                    <div className="hidden md:flex flex-grow max-w-2xl">
                        <div className="flex items-center w-full px-2 py-1 bg-white ">
                            <svg className="w-4 h-4" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                            <input
                                type="search"
                                placeholder="Search"
                                aria-label="Search Microsoft 365"
                                className="flex-grow px-2 text-sm bg-transparent"
                            />
                        </div>
                    </div>
                    <div className="flex md:hidden "> <button aria-label="Search" type="button"><svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></button></div>
                    <div className="flex items-center gap-4 ms-auto">
                        <button aria-label="Calendar" type="button"><svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check-icon lucide-calendar-check"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg></button>
                        <button aria-label="Settings" type="button"><svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg></button>
                        <button aria-label="Help" type="button"><svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></button>
                        <button aria-label="User profile" type="button"><svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></button>
                    </div>
                </div>
            </nav>
            <div className="flex-1 overflow-y-auto">
                <div className="bg-gradient-to-r from-rose-50 to-indigo-50 px-4 py-3 flex items-center flex-wrap relative" role="alert">
                    <div className="flex items-center gap-2 flex-grow flex-wrap">
                        <img src="https://img.icons8.com/color/32/microsoft-office-2019.png" className="w-7 h-7" alt="Office icon" />
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        <img src="https://img.icons8.com/?size=100&id=g7UKWvv49CoI&format=png" className="w-7 h-7" alt="Microsoft 365 icon" />
                        <span className="text-sm ms-2 flex-grow">
                            The Office app is becoming the new Microsoft 365 app, your home to find, create, and share your content and ideas.
                            <a href="/" className="text-orange-600 underline font-medium" aria-label="Learn more about Microsoft 365 app changes">Learn more</a>
                        </span>
                    </div>
                    <button aria-label="Close notification" type="button"><svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
                </div>

                <main className=" p-6 space-y-8" role="main" aria-label="Main content area">
                    <div className="flex justify-between items-center" role="banner" aria-label="Apps header">
                        <h5 className="font-semibold text-lg">Apps</h5>
                        <button className="bg-red-600 text-white flex items-center px-3 py-2 rounded-md text-sm" type="button" aria-label='Add new apps'>
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus-icon lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>Add apps
                        </button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" aria-label="Main apps">
                        <button className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition" type="button" aria-label="Open Teams">
                            <img src="https://img.icons8.com/color/48/microsoft-teams.png" className="w-12 h-12 mx-auto mb-2" alt="Teams" aria-hidden="true" />
                            <span>Teams</span>
                        </button>
                        <button className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition" type="button" aria-label="Open Word">
                            <img src="https://img.icons8.com/color/48/ms-word.png" className="w-12 h-12 mx-auto mb-2" alt="Word" aria-hidden="true" />
                            <span>Word</span></button>

                        <button className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition" type="button" aria-label="Open Excel">
                            <img src="https://img.icons8.com/color/48/ms-excel.png" className="w-12 h-12 mx-auto mb-2" alt="Excel" aria-hidden="true" />
                            <span>Excel</span>
                        </button>
                        <button className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition" type="button" aria-label="Open PowerPoint">
                            <img src="https://img.icons8.com/color/48/ms-powerpoint.png" className="w-12 h-12 mx-auto mb-2" alt="PowerPoint" aria-hidden="true" />
                            <span>PowerPoint</span>
                        </button>
                        <button className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition" type="button" aria-label="Open Outlook">
                            <img src="https://img.icons8.com/fluency/48/new-post.png" className="w-12 h-12 mx-auto mb-2" alt="Outlook" aria-hidden="true" />
                            <span>Outlook</span>
                        </button>
                        <button className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition" type="button" aria-label="Open OneDrive">
                            <img src="https://img.icons8.com/?size=100&id=PnENrLMMW4eV&format=png" className="w-12 h-12 mx-auto mb-2"
                                alt="OneDrive" aria-hidden="true" />
                            <span>OneDrive</span>
                        </button>
                    </div>
                    <div className="flex justify-end">
                        <a href="/" className="text-red-600 font-semibold text-sm" aria-label="View all applications">All apps →</a>
                    </div>
                    <h5 className="font-semibold text-lg">Previously Added</h5>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4" aria-label="Previously added apps">
                        <li>
                            <button className="flex flex-row items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition text-left w-full" type="button" aria-label="Open App Studio">
                                <img src="https://img.icons8.com/color/48/source-code.png" className="w-10 h-10" alt="App Studio" aria-hidden="true" />
                                <span className="text-sm">App Studio</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex flex-row items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition text-left w-full" type="button" aria-label="Open Assignments">
                                <img src="https://img.icons8.com/color/48/lock--v1.png" className="w-10 h-10" alt="Assignments" aria-hidden="true" />
                                <span className="text-sm">Assignments</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex flex-row items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition text-left w-full" type="button" aria-label="Open Excel">
                                <img src="https://img.icons8.com/color/48/ms-excel.png" className="w-10 h-10" alt="Excel" aria-hidden="true" />
                                <span className="text-sm">Excel</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex flex-row items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition text-left w-full" type="button" aria-label="Open Power BI">
                                <img src="https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png" className="w-10 h-10" alt="Power BI" aria-hidden="true" />
                                <span className="text-sm">Power BI</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex flex-row items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition text-left w-full" type="button" aria-label="Open PowerPoint">
                                <img src="https://img.icons8.com/color/48/ms-powerpoint.png" className="w-10 h-10" alt="PowerPoint" aria-hidden="true" />
                                <span className="text-sm">PowerPoint</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex flex-row items-center gap-2 p-3 bg-white rounded-lg shadow-md border border-gray-200 text-left w-full" type="button" aria-label="Open Task Module Sample">
                                <img src="https://img.icons8.com/?size=100&id=jzaaE6lUq9fx&format=png" className="w-10 h-10" alt="Task Module Sample →" aria-hidden="true" />
                                <span className="text-sm">Task Module Sample →</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex flex-row items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition text-left w-full" type="button" aria-label="Open Word">
                                <img src="https://img.icons8.com/color/48/ms-word.png" className="w-10 h-10" alt="Word" aria-hidden="true" />
                                <span className="text-sm">Word</span>
                            </button>
                        </li>
                    </ul>


                    <div className="flex flex-wrap gap-3" aria-label="Category filters">
                        <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm" aria-pressed="true" type="button">Productivity</button>
                        <button className="border border-gray-900  px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition" aria-pressed="false" type="button">Utilities</button>
                        <button className="border border-gray-900 px-5 py-2 rounded-full text-sm  hover:bg-black hover:text-white transition" aria-pressed="false" type="button">Education</button>
                        <button className="border border-gray-900 px-5 py-2 rounded-full text-sm  hover:bg-black hover:text-white transition" aria-pressed="false" type="button">4 more</button>
                    </div>
                    <div className="flex  gap-3 px-4 py-4 justify-end">
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2" type="button" aria-label="Provide feedback">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
                         Feedback
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2" type="button" aria-label="Get help">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg> Need help?
                        </button>
                    </div>
                </main>
            </div>
        </div>

    )
}

export default main