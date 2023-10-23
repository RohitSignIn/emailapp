import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterEmailsRed } from "../redux/slices/EmailSlice";

export default function TopRow() {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterEmailsRed(filter));
  }, [filter]);

  return (
    <div className='flex gap-4 items-center my-4'>
      <p>Filter By: </p>
      <button
        onClick={() => setFilter("all")}
        className={`${
          filter == "all" ? "bg-FilterBtn" : ""
        } px-2 py-1 rounded-xl`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("unread")}
        className={`${
          filter == "unread" ? "bg-FilterBtn" : ""
        } px-2 py-1 rounded-xl`}
      >
        Unread
      </button>
      <button
        onClick={() => setFilter("read")}
        className={`${
          filter == "read" ? "bg-FilterBtn" : ""
        } px-2 py-1 rounded-xl`}
      >
        Read
      </button>
      <button
        onClick={() => setFilter("favorites")}
        className={`${
          filter == "favorites" ? "bg-FilterBtn" : ""
        } px-2 py-1 rounded-xl`}
      >
        Favorites
      </button>
    </div>
  );
}
