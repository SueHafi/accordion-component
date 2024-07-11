import "./App.css";
import Accordion from "./components/Accordion";
import AccordionText from "./components/AccordionText";

function App() {
  return (
    <>
      <Accordion num="01" title="How long do I have to return my item?">
        <AccordionText>
          Our policy states that you have a month to return your item. There are
          also certain criterias listed below that your item must meet to be
          considered for return.
        </AccordionText>
      </Accordion>
      <Accordion num="02" title="Lorem ipsum dolor sit.">
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
      </Accordion>
    </>
  );
}

export default App;
