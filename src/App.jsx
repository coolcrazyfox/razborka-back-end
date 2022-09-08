import React, {useEffect, useState} from 'react';
import './App.css';
// import TabPage from "./pages/TabPage";
// import OEM_DATA from "./OEM_DATA.json";
// import {BrowserRouter} from "react-router-dom";
// import AppRouter from "./components/AppRouter";

// const data = OEM_DATA;

function App() {
    // https://youtu.be/N7zlfRyXQes
    // https://dev-gang.ru/article/naczalo-raboty-s-postgres-v-vashem-prilozhenii-react-olh4g437dj/
    const [device, setDevice]= useState([])
    useEffect (()=>{
        fetchDevice()

    },[])
    const fetchDevice=async()=>{
        const response = await fetch('http://localhost:8080/device')
        const data = await response.json()
        setDevice(data)
    }



    // const [itemCarList, setItemCarList]=useState(data)
    // const [modalActive, setModalActive] = useState(false)

    return (
        <div className={"main_container"}>
            {device.map(t=>{
                <div key={t.id}>{t.model}</div>
            })}

        </div>
        // <BrowserRouter>
        //     <AppRouter/>
        // </BrowserRouter>
        // <>
        //     {/*<div className="main_container">                */}
        //     {/*    <TabPage oemList={itemCarList}/>*/}
        //     {/*</div>*/}
        //
        //     {/*<Modal active={modalActive} setActive={setModalActive} oemList={itemCarList}>*/}
        //     {/*    /!*{children}*!/*/}
        //     {/*</Modal>*/}
        //
        //
        // </>


    );
}

export default App;
