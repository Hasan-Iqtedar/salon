import { useContext } from "react";
import { GlobalContext } from "../contexts/globalState";
import CategoryItem from "../components/CategoryItem";
import TableHeader from "../components/TableHeader";
import "../styles/categories.css";

const Categories = (props) => {
  const { categories } = useContext(GlobalContext);

  return (
    <div className="categories">
      <TableHeader title="Categories" />
      {categories.map((item) => {
        return <CategoryItem item={item} />
      })}
      {/* <CategoryItem></CategoryItem> */}
    </div>
  );
};

export default Categories;
