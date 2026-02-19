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
            
        </nav>
    );
}
export default NavBar;