import { useSelector, useDispatch } from "react-redux";
import useForm from "../../hooks/useForm";
import { saveFormData, loginFormData, logOutFormData } from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username: '', email: '',password: '' });
    const [showModalinfo, setShowModalInfo] = useState(false);
    const [msgModalInfo, setMsgModalInfo] = useState('');
    const [btnPassVisible, setBtnPassVisible] = useState({ typeInput: 'password', textButton: 'Show' });
    const [btnModalExitVisible, setBtnModalExitVisible] = useState(false);

    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        /*
        console.log(values);
        dispatch(saveFormData(values));
        setMsgModalInfo(values.username + " Bienvenid@ al Módulo 7 ++ ");
        setShowModalInfo(true);
        */
        dispatch(loginFormData(values));
        if (values.password === form.passCorrect){
            setMsgModalInfo(values.username + " Bienvenid@ al Módulo 7");
        }else{
            setMsgModalInfo("Password incorrecto");
        }
        setShowModalInfo(true);
    }

    const hideModalInfo = () => {
        setMsgModalInfo("");
        setBtnModalExitVisible(false);
        setShowModalInfo(false);
    };

    const logOutModalInfo = () => {
        setMsgModalInfo("");
        if(btnModalExitVisible){
            dispatch(logOutFormData());
        }
        setBtnModalExitVisible(false);
        setShowModalInfo(false);
        resetForm();
    };


    const modalInfoShow = () => {
        setMsgModalInfo(values.username + " Bienvenid@ al Módulo 7");
        setShowModalInfo(true);
    };
    const loginDataform = () => {
        dispatch(loginFormData(values));
        if (values.password === form.passCorrect){
            setMsgModalInfo(values.username + " Bienvenid@ al Módulo 7");
        }else{
            setMsgModalInfo("Password incorrecto");
        }
        setShowModalInfo(true);
    };
    const changeTypeInputPass = () => {
        if(btnPassVisible.textButton === 'Show'){
            setBtnPassVisible({typeInput: 'text', textButton: 'Hide'});
        }else{
            setBtnPassVisible({typeInput: 'password', textButton: 'Show'});
        }
    };
    const modalLogOutShow = () => {
        setMsgModalInfo("¿Estás seguro de que quieres cerrar sesión?");
        setBtnModalExitVisible(true);
        setShowModalInfo(true);
    };

    return (
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo 
                    visible={showModalinfo}
                    message= {msgModalInfo}
                    onClose={hideModalInfo}
                    onLogOut = {logOutModalInfo}
                    btnExitVisible= {btnModalExitVisible}
                />
            <div className="container">
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
                            required
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
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type={btnPassVisible.typeInput}
                            id="password" 
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="button" onClick={changeTypeInputPass}>{btnPassVisible.textButton}</button>
                    </div>
                    <div className="button-container">
                        <button type="submit" >Submit</button> 
                        {/* <button type="button" onClick={loginDataform}>Login</button> */}
                        <a onClick={modalLogOutShow}>Logout</a>
                        {/* <button type="button" onClick={modalInfoShow}>Mostrar Modal</button> */}
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;
