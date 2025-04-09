import { useState, useRef } from "react";
import "./Coupon.css";
import confetti from "npm:canvas-confetti";

const Coupon = () => {
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    setError("");

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !inputs[index] && index > 0) {
      const newInputs = [...inputs];
      newInputs[index - 1] = "";
      setInputs(newInputs);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = inputs.join("");
    if (code === "5050") {
      setShowPopup(true);
      setError("");
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else {
      setShowPopup(false);
      setError("Купон не подходит");
    }
  };

  return (
    <div className="coupon">
      <h2>Купоны</h2>
      <div className="coupon-inputs">
        {inputs.map((value, i) => (
          <input
            key={i}
            type="tel"
            maxLength={1}
            inputMode="numeric"
            className="digit-input"
            value={value}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
          />
        ))}
      </div>
      <button type="button" onClick={handleSubmit} className="submit-coupon">
        Проверить купон
      </button>
      {error && <p className="error-message">{error}</p>}

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h3>🎉 Поздравляем!</h3>
            <p>Вы выиграли две бутылки сидра 🍾🍾</p>
            <button type="button" onClick={() => setShowPopup(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coupon;
