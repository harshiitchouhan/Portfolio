import "./UnderDeployment.css";

export default function UnderDeployment() {
  return (
    <div className="deployment-page">
      <div className="deployment-card">
        <div className="deployment-icon">🚀</div>

        <h1>Project Under Deployment</h1>

        <p>
          This project is currently being deployed and configured for live
          access. Please check back soon.
        </p>

        <a href="/" className="back-btn">
          Back to Portfolio
        </a>
      </div>
    </div>
  );
}