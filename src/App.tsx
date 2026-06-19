import React from 'react';

// ==========================================
// TYPES FOR TYPESCRIPT
// ==========================================
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

interface CourseCardProps {
  title: string;
  batch: string;
  description: string;
  onDetailsClick: () => void;
}

// ==========================================
// 1. HEADER COMPONENT
// ==========================================
const Header = () => {
  return (
    <header style={{
      backgroundColor: '#1a1a2e',
      color: '#ffffff',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: 0, fontSize: '24px' }}>React Syntax Lab</h2>
      <nav>
        <span style={{ marginRight: '20px', cursor: 'pointer' }}>Home</span>
        <span style={{ marginRight: '20px', cursor: 'pointer' }}>Assignments</span>
        <span style={{ cursor: 'pointer' }}>Profile</span>
      </nav>
    </header>
  );
};

// ==========================================
// 2. REUSABLE BUTTON COMPONENT
// ==========================================
const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const isPrimary = variant === 'primary';
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: isPrimary ? '#4e34e1' : '#e2e8f0',
        color: isPrimary ? '#fff' : '#334155',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        margin: '5px'
      }}
    >
      {text}
    </button>
  );
};

// ==========================================
// 3. REUSABLE CARD COMPONENT
// ==========================================
const CourseCard: React.FC<CourseCardProps> = ({ title, batch, description, onDetailsClick }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      maxWidth: '350px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
      margin: '15px',
      display: 'inline-block',
      textAlign: 'left',
      verticalAlign: 'top'
    }}>
      <span style={{ 
        backgroundColor: '#e0f2fe', 
        color: '#0369a1', 
        padding: '4px 8px', 
        borderRadius: '4px', 
        fontSize: '12px', 
        fontWeight: 'bold' 
      }}>
        Batch {batch}
      </span>
      <h3 style={{ margin: '10px 0 5px 0', color: '#1e293b' }}>{title}</h3>
      <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>{description}</p>
      <Button text="View Task Details" onClick={onDetailsClick} variant="primary" />
    </div>
  );
};

// ==========================================
// 4. FOOTER COMPONENT
// ==========================================
const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: '#94a3b8',
      textAlign: 'center',
      padding: '15px',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      fontSize: '14px'
    }}>
      <p style={{ margin: 0 }}>© 2026 Saylani MIT Batch-04 Assignment Submission Portal</p>
    </footer>
  );
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================
function App() {
  const handleAlert = (taskName: string) => {
    alert(`Navigating to details for: ${taskName}`);
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      <Header />

      <main style={{ padding: '40px 20px', paddingBottom: '80px', textAlign: 'center' }}>
        <h1 style={{ color: '#0f172a' }}>React.js Component Syntax Practice</h1>
        <p style={{ color: '#64748b' }}>Single-file rendering with multiple reusable sub-components.</p>

        <div style={{ margin: '20px 0' }}>
          <Button text="Refresh Dashboard" onClick={() => alert('Dashboard Refreshed!')} variant="secondary" />
          <Button text="Submit All Files" onClick={() => alert('Ready to Push to Git!')} variant="primary" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
          <CourseCard 
            title="Web & Mobile Development" 
            batch="04" 
            description="Explore folder structure setups and design isolated JSX interfaces."
            onDetailsClick={() => handleAlert('Web & Mobile Dev Task')}
          />
          <CourseCard 
            title="React Component Architecture" 
            batch="04" 
            description="Deep dive into functional design hooks, properties, and module imports."
            onDetailsClick={() => handleAlert('React Component Task')}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;