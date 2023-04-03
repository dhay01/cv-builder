import React from "react";
import {useFormikContext} from "formik";
import {useNavigate} from "react-router-dom";
import {Button} from "antd";


function LastStep() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/display`;
        navigate(path);
    }
    return (
        <div>
            <h1> you're done ! click the button below to generate your cv </h1>
            <Button color="primary" className="px-4"
                    onClick={routeChange}>
                go
            </Button>
        </div>



)
}



export default LastStep