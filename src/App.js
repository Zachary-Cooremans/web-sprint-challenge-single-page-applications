import React, {useState, useEffect} from "react";
import './App.css'
import PizzaForm from './components/PizzaForm'
import axios from 'axios'
import * as yup from 'yup'
import {Route, Switch} from 'react-router-dom'
import HomePage from "./components/Home"
import Nav from './components/Nav'
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
  name: 'name must be at least 2 characters',
  size: 'size is required',
  sauce: 'must pick a sauce',
}

const App = () => {

  const [pizza, setPizza] = useState({})
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const postPizza = newPizza => {
    console.log(newPizza)
    axios
    .post('https://reqres.in/api/orders', newPizza)
    .then((res) => {
      console.log('THIS IS POST PIZZA', newPizza)
      console.log('RES>DATA', res.data)
      setPizza(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
    setFormValues(initialFormValues)
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
    const toppings = ['pepperoni', 'sausage','canadian', 'italian',
    'chicken', 'onions','green', 'tomatoes', 'olives', 'garlic',
   'artichoke', 'cheese', 'pineapple', 'extra']
    const newPizza = {

      name: formValues.name.trim(),
      size: formValues.size,
      special: formValues.special.trim(),
      gluten: formValues.gluten,  
    }
    toppings.forEach(top => {
      newPizza[top] = formValues[top]
    })
    console.log('BEFORE REQUEST', newPizza)
    postPizza(newPizza)
    console.log('THIS IS NEW PIZZA', newPizza)
  };

  useEffect(() => {
    formSchema
    .isValid(formValues)
    .then((valid) => setDisabled(!valid))
  }, [formValues])

  return (
    <>
    <Switch>

      <Route path="/pizza" id ='pizza-form'>
        <Nav />
        <PizzaForm 
        values={formValues} 
        change={change} 
        submit={submit} 
        disabled={disabled} 
        errors={formErrors}
        pizzaDetails={pizza}
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
