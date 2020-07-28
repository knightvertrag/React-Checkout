import React from "react";
import { Container } from "./components/Utilities/Container/Container";
import classes from "./App.module.scss";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <Container>
      <header className={classes.header}>
        <h1>Checkout</h1>
      </header>
      <main className={classes.main}>
        <div className={classes.formContainer}>
          <Form />
        </div>
        <div className={classes.cartContainer}>
          <Cart />
        </div>
      </main>
    </Container>
  );
};

export default App;
