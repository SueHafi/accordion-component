import "./Accordion.css";

export default function Accordion() {
  const listOfCriteria = ["Product must be clean", "Product must be undamaged", "Product must be unused"];
  return (
    <div className="accordion-container">
      <header className="accordion-header">
        <p className="accordion-num--02">02</p>
        <h1 className="accordion-title">
          How long do I have to return my item?
        </h1>
        <p className="accordion-symbol">&#65088;</p>
      </header>
      <section className="accordion-text-section">
        <p className="accordion-text">
          Our policy states that you have a month to return your item. There are
          also certain criterias listed below that your item must meet to be
          considered for return.
        </p>
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
