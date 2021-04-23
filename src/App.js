import React, {useState, useEffect} from "react";
import './App.css'
import PizzaForm from './components/PizzaForm'
import axios from 'axios'
import * as yup from 'yup'
import {Route, Switch} from 'react-router-dom'
import HomePage from "./components/Home"
import Nav from './components/Nav'
import Checkout from './components/Checkout'
import formSchema from './validation/FormSchema'


const initialFormValues = {
  name:'',
  size:'',
  sauce:'',

  pepperoni:false, sausage:false, canadian:false, italian:false, chicken:false,
  onions:false, green:false, tomatoes:false, olives:false, garlic:false,
  artichoke:false, cheese:false, pineapple:false, extra:false, gluten:false,
  
  special: ''
}
const initialFormErrors = {
  name: 'name is required',
  size: 'size is required',
  sauce: 'must pick a sauce',
}

const empty = [];
const App = () => {

  const [pizza, setPizza] = useState(empty)
  const [details, setDetails] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const postPizza = newPizza => {
    console.log(newPizza)
    axios
    .post('https://reqres.in/api/users', newPizza)
    .then((res) => {
      console.log('THIS IS RES', res.data)
      setPizza(res.data, ...pizza)
      setFormValues(initialFormValues)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const change = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: '',
      });
    })
    .catch((err) => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
  setFormValues({
    ...formValues, [name]: value
    })
  }

  const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      sauce: formValues.sauce.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      gluten: ['gluten'].filter((test) => formValues[test]),
      toppings: ['pepperoni', 'sausage','canadian', 'italian',
       'chicken', 'onions','green', 'tomatoes', 'olives', 'garlic',
      'artichoke', 'cheese', 'pineapple', 'extra'].filter((topping) => formValues[topping])
         
    }
    postPizza(newPizza)
    setDetails(newPizza)
  };

  useEffect(() => {
    formSchema
    .isValid(formValues)
    .then((valid) => setDisabled(!valid))
  }, [formValues])

  return (
    <>
    <Switch>

      <Route path='/checkout'>
        <Checkout key={pizza.id} details={details} />
      </Route>

      <Route path="/Pizza">
        <Nav />
        <PizzaForm 
        values={formValues} 
        change={change} 
        submit={submit} 
        disabled={disabled} 
        errors={formErrors}
        pizzaDetails={details}
        />
        
      </Route>

      <Route exact path='/'>
        <Nav />
        <HomePage />
      </Route>
    </Switch>

    </>
    
  );
};
export default App;
