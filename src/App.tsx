import "./App.css";
import Accordion from "./components/Accordion";
import AccordionText from "./components/AccordionText";
import AccordionList from "./components/AccordionList";

function App() {
  return (
    <>
      <Accordion num="01" title="How long do I have to return my item?">
        <AccordionText>
          Our policy states that you have a month to return your item. There are
          also certain criterias listed below that your item must meet to be
          considered for return.
        </AccordionText>
        <AccordionList
          listItems={[
            "Product must be clean",
            "Product must be undamaged",
            "Product must be unused",
          ]}
        ></AccordionList>
      </Accordion>
      <Accordion
        num="02"
        title="Can I get a partial refund if my item is damaged?"
      >
        <AccordionText>
          Our policy allows for no refund on damaged items, unless it was
          damaged during shipping.
        </AccordionText>
      </Accordion>
      <Accordion num="03" title="Lorem ipsum dolor sit.">
        <AccordionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dicta expedita, ad sint distinctio assumenda non cum eaque nulla
          libero alias sequi, maiores repellat earum debitis modi! Repudiandae,
          temporibus iste?
        </AccordionText>
        <AccordionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dicta expedita, ad sint distinctio assumenda non cum eaque nulla
          libero alias sequi, maiores repellat earum debitis modi! Repudiandae,
          temporibus iste?
        </AccordionText>
        <AccordionList listItems={["Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Maiores repellat earum debitis modi! Repudiandae!"]}></AccordionList>
      </Accordion>
    </>
  );
}

export default App;
