import { ReactNode, MouseEvent, useState } from "react";
import "./Accordion.css";
type AccordionProps = {
  num: string;
  title: string;
  children: ReactNode;
};

export default function Accordion({ num, title, children }: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  function handleAccordionClick(e: MouseEvent<HTMLButtonElement>) {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="accordion-container">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          onClick={handleAccordionClick}
          type="button"
          aria-expanded={isExpanded}
        >
          <span className="accordion-num">{num}</span>
          <span className="accordion-title">{title}</span>
          <img
            className="accordion-symbol"
            alt="caret down"
            src="/caret-down.png"
          />
        </button>
      </h2>
      <section className={`${isExpanded? 'accordion-text-section' : 'accordion-text-section hidden'}`}>{children}</section>
    </div>
  );
}
