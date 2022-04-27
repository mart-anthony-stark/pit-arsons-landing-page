import SectionBanner from "../../components/section-banner/SectionBanner";
import "./faqs.css";
import { useState, useEffect } from "react";

const FAQs = () => {
  const [openedQuestions, setOpenedQuestions] = useState([1, 2]);
  const [faqs, setFaq] = useState([]);

  const getData = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/faq`);
    const data = await res.json();
    setFaq(data);
  };

  useEffect(() => {
    getData();
  }, []);

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
          {faqs.map((question) => (
            <div className="item">
              <div
                onClick={() => handleAccordion(question._id)}
                className="question"
              >
                <h1
                  className={`indicator ${
                    isOnTheOpenedQuestions(question._id) ? "close" : "open"
                  }`}
                >
                  +
                </h1>
                <h1>{question.question}</h1>
              </div>
              {isOnTheOpenedQuestions(question._id) && (
                <textarea readOnly className="answer">
                  {question.answer}
                </textarea>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQs;
