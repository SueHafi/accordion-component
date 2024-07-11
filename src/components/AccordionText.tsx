import { ReactNode } from "react";
import "./AccordionText.css";

type AccordionTextProps = {
  children: ReactNode;
};

export default function AccordionText({children}: AccordionTextProps) {
  return <p className="accordion-text">{children}</p>;
}
