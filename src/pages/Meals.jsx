import { useMemo, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";

import { useGetFoodItemsByCategoryQuery } from "../../redux-store/apis/foodItemsApi";
import { addItemToCart } from "../../redux-store/slices/cartSlice";
import MealItem from "../components/Meals/MealItem";
import MealsSkeleton from "../components/UI/MealsSkeleton";
import Layout from "../containers/Layout";

export default function MealsPage() {
  const [type, setType] = useState();
  const { pathname } = useLocation();
  const category = pathname?.split("/")[2];
  console.log(category);
  const dispatch = useDispatch();

  const formatCategory = (category) =>
    category
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const { data: meals, isLoading: isMealsLoading } =
    useGetFoodItemsByCategoryQuery(formatCategory(category));

  const displayedItems = useMemo(() => {
    if (type) {
      return meals?.filter((item) => item?.type === type);
    }
    return meals;
  }, [type, meals]);

  const handleTypeChange = (type) => {
    setType((prevType) => (prevType === type ? null : type));
  };

  const addItemToCartHandler = (cartData) => {
    dispatch(addItemToCart(cartData));
  };

  return (
    <Layout>
      <div className="mx-auto">
        <h1 className="text-center font-hind font-bold text-amber-600 text-[1.8rem] tracking-wide md:text-3xl">
          {formatCategory(pathname.spli)}
        </h1>
        <div className="flex justify-center mt-5 space-x-4">
          <button
            onClick={() => handleTypeChange("Vegetarian")}
            className={`btn ${
              type === "Vegetarian" ? "btn-info" : "btn-neutral"
            } w-40 `}
          >
            Vegetarian
          </button>
          <button
            onClick={() => handleTypeChange("Non-Vegetarian")}
            className={`btn ${
              type === "Non-Vegetarian" ? "btn-info" : "btn-neutral"
            } w-40 `}
          >
            Non-Vegetarian
          </button>
        </div>
        <ul className="mb-10 mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {isMealsLoading ? (
            <>
              {[...Array(6).keys()].map((n) => (
                <MealsSkeleton key={n} />
              ))}
            </>
          ) : (
            displayedItems?.map((meal) => (
              <MealItem
                key={meal._id}
                id={meal._id}
                name={meal.name}
                desc={meal.description}
                price={meal.price}
                image={meal.image}
                onAddToCart={addItemToCartHandler}
              />
            ))
          )}
        </ul>
      </div>
    </Layout>
  );
}
