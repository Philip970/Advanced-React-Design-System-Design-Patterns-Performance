import Button from "./components/button";

import Buttons from "./components/buttons";
import { CartProvider } from "./components/cart-context";
import Display from "./components/display";
import "./style.css";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
};

function App() {
  return (
    <CartProvider>
      <Display />
      <Buttons />
      {/* <div style={style}>
      <Button size="s">Small</Button>
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
      <Button size="xl">xLarge</Button>
      <Button As="a" href="/">
        Link
      </Button>
    </div> */}
    </CartProvider>
  );
}

export default App;
