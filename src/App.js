import "./App.css";
import { useState } from "react";
import calcPPF from "./utils/calcPPF";
import Header from "./components/Header";
import SliderInput from "./components/SliderInput";
import ResultCard from "./components/ResultCard";
import DonutChart from "./components/DonutChart";

export default function App() {
  const [deposit, setDeposit] = useState(150000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(7.1);

  const result = calcPPF(deposit, years, rate);
  return (
    <div className="page">
      <Header />
      <div className="card">
        <div className="left">
          <SliderInput
            label="Yearly investment"
            min={500}
            max={150000}
            step={500}
            value={deposit}
            onChange={(val) => setDeposit(Number(val))}
            display={deposit.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            })}
          />
          <hr className="divider" />
          <SliderInput
            label="Time period (in Years)"
            min={1}
            max={15}
            step={1}
            value={years}
            onChange={(val) => setYears(Number(val))}
            display={years + "yr"}
          />
          <hr className="divider" />
          <SliderInput
            label="Rate of interest"
            min={1}
            max={15}
            step={0.1}
            value={rate}
            onChange={(val) => setRate(Number(val))}
            display={rate + "%"}
          />
          <ResultCard
            label="Invested amount"
            value={"₹" + result.invested.toLocaleString("en-IN")}
          />
          <ResultCard
            label="Total interest"
            value={"₹" + result.interest.toLocaleString("en-IN")}
          />
          <ResultCard
            label="Maturity value"
            value={"₹" + result.maturity.toLocaleString("en-IN")}
          />
        </div>

        <div className="right">
          <DonutChart invested={result.invested} interest={result.interest} />
        </div>
      </div>
    </div>
  );
}
