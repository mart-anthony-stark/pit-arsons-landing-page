import SectionBanner from "../../components/section-banner/SectionBanner";
import "./faqs.css";
import { useState } from "react";

const FAQs = () => {
  const [openedQuestions, setOpenedQuestions] = useState([1, 2]);

  const isOnTheOpenedQuestions = (id) => {
    return openedQuestions.find((q) => {
      return q == id;
    });
  };

  const handleAccordion = (id) => {
    if (isOnTheOpenedQuestions(id))
      return setOpenedQuestions((prev) => {
        return prev.filter((p) => p != id);
      });

    setOpenedQuestions([id, ...openedQuestions]);
  };

  return (
    <div className="faqs">
      <SectionBanner
        data={{
          topHeading: "Queries? CONCERNS?",
          subHeading: "FREQUENTLY ASKED QUESTIONS",
          img: "faq",
        }}
      />
      <section>
        <div className="items">
          {questions.map((question) => (
            <div className="item">
              <div
                onClick={() => handleAccordion(question.id)}
                className="question"
              >
                <h1
                  className={`indicator ${
                    isOnTheOpenedQuestions(question.id) ? "close" : "open"
                  }`}
                >
                  +
                </h1>
                <h1>{question.question}</h1>
              </div>
              {isOnTheOpenedQuestions(question.id) && (
                <div className="answer">{question.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQs;

const questions = [
  {
    id: 1,
    question: "How do I pay for my order?",
    answer: (
      <>
        We can happily receive your payments from one of the following accounts:
        <div className="grp">
          <strong>BDO</strong> - Online banking or Over the counter deposit
        </div>
        <div>PAUL JOHN AGDON </div>
        <div> 006860044321</div>
        <div>Savings Account</div>
        <div className="grp">
          <strong>BPI</strong> - Online banking or Over the counter deposit
        </div>
        <div>PAUL JOHN AGDON </div>
        <div> 1889219579</div>
        <div>Savings Account</div>
        <div className="grp">
          <strong>GCASH</strong> - Mobile Wallet
        </div>
        <div>JOHN PAUL A. </div>
        <div>09175134495</div>
      </>
    ),
  },
  {
    id: 2,
    question: "How do I reheat the packaged food?",
    answer: (
      <>
        <div className="grp">
          <strong>SIMMER</strong>
        </div>
        <div>
          1. Fill pot with enough water to submerge bag. Using stove or
          induction plate, bring it boil and then simmer on low heat.
        </div>
        <div> 2. Simmer the bag for 15 minutes.</div>
        <div>
          3. Remove the bag from the water. Open the bag and set juices aside.
        </div>
        <div>
          4. Pour some remaining juices on the meat and baste it with sauce.
        </div>

        <div className="grp">
          <strong>SOUS VIDE</strong>
        </div>
        <div>1. Pre-heat water bath to 65°C.</div>
        <div> 2. Fully submerge bag for 30 minutes (1 hour if frozen)</div>
        <div>
          3. Remove the bag from the water bath. Open the bag and set juices
          aside.
        </div>
        <div>
          4. Pour some remaining juices on the meat and baste it with sauce.
        </div>
      </>
    ),
  },
  {
    id: 3,
    question: "How many people is each order suitable for?",
    answer: <h1></h1>,
  },
  {
    id: 4,
    question: "How long is the shelf life?",
    answer: <h1></h1>,
  },
  {
    id: 5,
    question: "Do you accept COD?",
    answer: <h1></h1>,
  },
  {
    id: 6,
    question: "Do you accept personal pick-up?",
    answer: <h1></h1>,
  },
];
