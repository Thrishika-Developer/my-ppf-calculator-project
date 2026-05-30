export default function DonutChart({ invested, interest }) {
  const total = invested + interest;
  const interestPercent = (interest / total) * 100;
  const investedPercent = (invested / total) * 100;
  return (
    <div className="chart-container">
      <div className="legend">
        <span className="legend-item">
          <span className="legend-dot gray-dot"></span>
          Total Investment
        </span>
        <span className="legend-item">
          <span className="legend-dot blue-dot"></span>
          Total Interest
        </span>
      </div>

      <div className="donut-wrap">
        <div
          className="donut"
          style={{
            background: `conic-gradient(rgb(124, 185, 140)${interestPercent}%, rgb(224, 227, 227) ${interestPercent}%100%)`,
          }}
        ></div>
        <div className="donut-hole"></div>
      </div>
      <button className="save-btn">SAVE TAX</button>
    </div>
  );
}
