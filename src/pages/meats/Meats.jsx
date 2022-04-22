import "./meats.css";
import { useState, useEffect } from "react";
import SectionBanner from "../../components/section-banner/SectionBanner";
import { useNavigate, useParams } from "react-router-dom";
import MeatItem from "../../components/meat-item/MeatItem";
import { useDispatch, useSelector } from "react-redux";

const categories = [
  { name: "Chicken", link: "/meats/chicken" },
  { name: "Pork", link: "/meats/pork" },
  { name: "Sausage", link: "/meats/sausage" },
  { name: "Smoked U.S. Angus Beef", link: "/meats/beef" },
  { name: "Gift Box", link: "/meats/giftBox" },
  { name: "Others", link: "/meats/others" },
];

const Meats = ({ meats, setMeats }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  let { category } = useParams();

  const [selectedCategory, setSelectedCategory] = useState("Chicken");

  const filteredItems = meats.filter(
    (meat) => meat.category.toUpperCase() === selectedCategory.toUpperCase()
  );

  const getAllMeats = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/product`);
    const data = await res.json();
    setMeats(data);
    setLoading(false);
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
      beef: "Beef",
      giftBox: "GiftBox",
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
          img: "meats",
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
          {/* {loading && <h2>Loading...</h2>} */}
          {filteredItems.map((meat, i) => (
            <MeatItem key={i} item={meat} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Meats;
