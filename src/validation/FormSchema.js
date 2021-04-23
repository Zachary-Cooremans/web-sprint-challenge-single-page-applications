import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(2, 'Name must be at least 2 characters or longer'),

    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'ex-large'])
        .required('size is required'),
    
    sauce: yup
        .string()
        .required('must pick a sauce')
        .oneOf(['originalRed', "garlicRanch", "bbqSauce", "spinachAlfredo"]),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadian: yup.boolean(),
    italian: yup.boolean(),
    chicken: yup.boolean(),
    onions: yup.boolean(),
    green: yup.boolean(),
    tomatoes: yup.boolean(),
    olives: yup.boolean(),
    garlic: yup.boolean(),
    artichoke: yup.boolean(),
    cheese: yup.boolean(),
    pineapple: yup.boolean(),
    extra: yup.boolean(),

    gluten: yup.boolean(),

    special: yup.string(),
})

export default formSchema;