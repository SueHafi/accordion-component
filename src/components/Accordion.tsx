import { ReactNode, MouseEvent } from "react";
import "./Accordion.css";
type AccordionProps = {
  num: string;
  title: string;
  children: ReactNode;
};

export default function Accordion({ num, title, children }: AccordionProps) {
  function handleAccordionClick(e: MouseEvent<HTMLButtonElement>) {
    console.log(e.target);
  }

  return (
    <div className="accordion-container">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          onClick={handleAccordionClick}
          type="button"
          aria-expanded={true}
        >
          <span className="accordion-num">{num}</span>
          <span className="accordion-title">{title}</span>
          <span className="accordion-symbol">&#65088;</span>
        </button>
      </h2>
      <section className="accordion-text-section">{children}</section>
    </div>
  );
}
