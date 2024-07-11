import { ReactNode } from "react";
import "./Accordion.css";
type AccordionProps = {
  num: string;
  title: string;
  children: ReactNode;
};

export default function Accordion({ num, title, children }: AccordionProps) {
  const listOfCriteria = [
    "Product must be clean",
    "Product must be undamaged",
    "Product must be unused",
  ];

  return (
    <div className="accordion-container">
      <header className="accordion-header">
        <p className="accordion-num--02">{num}</p>
        <h1 className="accordion-title">{title}</h1>
        <p className="accordion-symbol">&#65088;</p>
      </header>
      <section className="accordion-text-section">
       {children}
        <ul className="accordion-list">
          {listOfCriteria.map((element, id) => (
            <li className="accordion-list-items" key={id}>
              {element}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
