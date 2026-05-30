export default function ResultCard({ label, value }) {
  return (
    <div className="result-row">
      <span className="result-label">{label}</span>
      <span className="result-val">{value}</span>
    </div>
  );
}
