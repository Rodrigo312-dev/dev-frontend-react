import { useSelector, useDispatch } from "react-redux";
import useForm from "../../hooks/useForm";
import { saveFormData } from "../../redux/form/formActions";

const LoginForm = () => {
    const[values, handleChange] = useForm({username: '', email: ''})
    const form = useSelector (state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(values);
        dispatch(saveFormData(values));
    }
    return(
        <>
            <h1>COMPONENTE LOGIN</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <h5> UserName: {form.formData.username}</h5>
                <h5> Email: {form.formData.email}</h5>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default LoginForm;