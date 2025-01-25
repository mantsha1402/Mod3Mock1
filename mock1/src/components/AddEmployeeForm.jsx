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
                <label>
                    Department:
                    <select value={department} onChange={(e)=>setDepartment(e.target.value)} required>
                        <option value="">Select Department</option>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR"> HR</option>

                    </select>
                </label>

                <button type="submit">Add Employee </button>
        </form>
    )
};
export default AddEmployeeForm;