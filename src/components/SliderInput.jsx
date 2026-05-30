export default function SliderInput({
  label,
  min,
  max,
  step,
  value,
  onChange,
  display,
}) {
  return (
    <div className="input-group">
      <div className="input-row">
        <span className="label">{label}</span>
        <div className="value-box">
          <span>{display}</span>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="slider"
      />
    </div>
  );
}
