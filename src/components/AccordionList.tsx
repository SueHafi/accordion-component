import "./AccordionList.css";

type ListItems = {
  listItems: string[];
}

export default function AccordionList({listItems}: ListItems) {
  return (
    <ul className="accordion-list">
      {listItems.map((element) => (
        <li className="accordion-list-items" key={element}>
          {element}
        </li>
      ))}
    </ul>
  );
}
