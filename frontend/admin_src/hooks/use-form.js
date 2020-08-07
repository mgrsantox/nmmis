import {useState} from "react";

const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const onChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        callback();
        setValues(initialState)
        // console.log(e.target)
    };
    return {
        onChange,
        onSubmit,
        setValues,
        values
    }
};

export default useForm;