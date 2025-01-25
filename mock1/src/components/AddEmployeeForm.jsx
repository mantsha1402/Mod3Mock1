import React, { useState } from "react";
import "./../styles/AddEmployeeForm.css";


const AddEmployeeForm = ({ addEmployee})=>{
    const[name, setName]= useState("");
    const[designation, setDesignation]= useState("");
    const [department, setDepartment]= useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newEmployee={name, designation, department};
        addEmployee(newEmployee);
        setName("");
        setDesignation("");
        setDepartment("");

    };

    return(
        <form className="add-employee-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input value ={name} onChange={(e)=> setName(e.target.value)}required />
                </label>
        </form>
    )
}