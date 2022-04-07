import "./meats.css";
import { useState, useEffect } from "react";
import SectionBanner from "../../components/section-banner/SectionBanner";
import BannerImg from "/src/images/Meats-Chicken/meats-banner.png";
import { useNavigate, useParams } from "react-router-dom";
import MeatItem from "../../components/meat-item/MeatItem";

const categories = [
  { name: "Chicken", link: "/meats/chicken" },
  { name: "Pork", link: "/meats/pork" },
  { name: "Sausage", link: "/meats/sausage" },
  { name: "Smoked U.S. Angus Beef", link: "/meats/angus-beef" },
  { name: "Gift Box", link: "/meats/gift-box" },
  { name: "Others", link: "/meats/others" },
];

const Meats = () => {
  const navigate = useNavigate();
  const [meats, setMeats] = useState([]);
  let { category } = useParams();

  const [selectedCategory, setSelectedCategory] = useState("Chicken");

  const filteredItems = meats.filter(
    (meat) => meat.category.toUpperCase() === selectedCategory.toUpperCase()
  );

  const getAllMeats = async () => {
    const res = await fetch("/src/data/meats.json");
    const data = await res.json();
    setMeats(data);
  };

  useEffect(() => {
    getAllMeats();
  }, []);

  useEffect(() => {
    // Maps the category from route parameters into original category string
    const hashCategories = {
      chicken: "Chicken",
      pork: "Pork",
      sausage: "Sausage",
      "angus-beef": "Smoke U.S. Angus Beef",
      "gift-box": "Gift Box",
      others: "Others",
    };
    setSelectedCategory(hashCategories[`${category}`]);
  }, [category]);

  return (
    <div className="meats">
      <SectionBanner
        data={{
          topHeading: "SHOP. EAT. MEAT.",
          subHeading: "MEATS",
          img: BannerImg,
        }}
      />

      <section>
        <table className="categories">
          <thead>
            <tr>
              <th>Categories</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.name} onClick={() => navigate(cat.link)}>
                <td className="name">{cat.name}</td>
                <td>&gt;</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="items">
          <h1>{selectedCategory}</h1>
          {filteredItems.map((meat, i) => (
            <MeatItem key={i} item={meat} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Meats;
