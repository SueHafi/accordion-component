import { ReactNode, useState } from "react";
import { getUniqueNumber } from "../utils";
import "./Accordion.css";
type AccordionProps = {
  num: string;
  title: string;
  children: ReactNode;
};

export default function Accordion({ num, title, children }: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [idSuffix] = useState(getUniqueNumber);

  function handleAccordionClick(): void {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="accordion-container">
      <h2 className="accordion-header">
        <button
          id={`accordion-controls-${idSuffix}`}
          className="accordion-button"
          onClick={handleAccordionClick}
          type="button"
          aria-expanded={isExpanded}
          aria-controls={`accordion-panel-${idSuffix}`}
        >
          <span className="accordion-num">{num}</span>
          <span className="accordion-title">{title}</span>
          <img
            className="accordion-symbol"
            alt="caret down"
            src={`${isExpanded ? "/caret-up.png" : "/caret-down.png"}`}
          />
        </button>
      </h2>
      <section
        id={`accordion-panel-${idSuffix}`}
        className={`${
          isExpanded
            ? "accordion-text-section"
            : "accordion-text-section hidden"
        }`}
        role="region"
        aria-labelledby="accordion-controls"
      >
        {children}
      </section>
    </div>
  );
}
