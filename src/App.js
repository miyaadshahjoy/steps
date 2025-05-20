import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  // JSX
  return (
    <>
      <div className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">{`Step ${step}: ${messages[step - 1]}`}</p>
          <div className="buttons">
            <button className="previous" onClick={handlePrevious}>
              previous
            </button>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
