import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="brand">
          <span className="brand-icon">🌾</span>
          <h1>KrishiMitra AI</h1>
        </div>

        <button onClick={logout}>Log Out</button>
      </header>

      <main className="dashboard-content">
        <h2>Namaste, {user?.name}! 👋</h2>

        <p>
          Welcome to your KrishiMitra AI farmer dashboard.
        </p>

        <div className="welcome-card">
          <h3>Your agricultural assistant is coming soon.</h3>
          <p>
            We'll soon help you compare mandi prices, estimate
            profits, and make better crop-selling decisions.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;