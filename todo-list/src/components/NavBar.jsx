function NavBar({activeTab, setActiveTab}) {
    return ( 
        <nav className="nav-bar">
            <button 
                className = {activeTab === 'todos' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('todos')}
            > To-Dos 
            </button>
            <button 
                className = {activeTab === 'calendar' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('calendar')}
            > Events 
            </button>
            <button 
                className = {activeTab === 'finances' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('finances')}
            > Finances
            </button>
        </nav>
    );
}
export default NavBar;