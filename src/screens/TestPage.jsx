import React, { useState, useCallback, memo } from "react";
import TestComponent from "../components/Test";
import { Reorder, motion } from "framer-motion";

const TestPage = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // const getItems = () => {
  //   return [number, number + 1, number + 2]
  // }

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  const [items, setItems] = useState([0, 1, 2, 3]);
  const [counter, setCounter] = useState(4);
  const [menuOpen, setMenuOpen] = useState(false);

  const addItems = () => {
    setCounter(counter + 1);
    setItems((oldArray) => [...oldArray, counter]);
  };

  console.log("Items ", items);

  const variants = {
    open: { opacity: 1, height: '400px' },
    closed: { opacity: 0, height: '0px' },
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <TestComponent getItems={getItems} />
      <div>
        <button onClick={() => setMenuOpen((prevDark) => !prevDark)}>
          Toggle Theme
        </button>
      </div>
      <div>
        <button onClick={() => addItems()}>Add Items</button>
      </div>
      <Reorder.Group axis="x" values={items} onReorder={setItems}>
        <div className="flex">
          {items.map((item) => (
            <Reorder.Item key={item} value={item}>
              <p className="bg-red-300 p-4 my-3 mx-auto">{item}</p>
            </Reorder.Item>
          ))}
        </div>
      </Reorder.Group>

      <motion.div
        initial={{
          opacity: 0,
          background: "red",
          scale: 0.5,
          marginLeft: "-1000px",
          position: "absolute",
        }}
        animate={{
          opacity: 1,
          background: "green",
          scale: 1,
          marginLeft: "0px",
          position: "absolute",
          padding: "1rem",
        }}
        transition={{ property: "all", duration: 0.5 }}
      >
        <h1>THis would be animated</h1>
      </motion.div>
      <motion.nav animate={menuOpen ? "open" : "closed"} variants={variants}>
        <p className="bg-red-700 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta placeat sunt, sed facere dolores nostrum quam officiis sapiente sint ab?
        </p>  
      </motion.nav>
    </div>
  );
};

export default memo(TestPage);
