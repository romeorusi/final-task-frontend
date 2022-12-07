import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from '@mui/material/Button';
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import AddTraining from "./AddTraining";


export default function CustomerList(){
    const [customers, setCustomers] = useState([]);

    useEffect(()=>{
        console.log("Ollaaan hook jutussa");
        fetchData();
    }, [])


    const fetchData = () => {
        console.log("Customerlistin fetchdata funktiossa")
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then(response => response.json())
        .then(data => setCustomers(data.content));
    }
    const addCustomer = (customer) => {
      console.log("Customerlist tiedoston add customerissa");
      
      fetch("https://customerrest.herokuapp.com/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      }).then((response) => {
        if (response.ok) {
          fetchData();
        }
      });
    };
    const updateCustomer = (updateCustomer, link) => {
      console.log("updatecustomerissa update funktiossa");
      fetch(link, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateCustomer),
      }).then((response) => {
        if (response.ok) {
          fetchData();
        }
      });
    };

    const deleteCustomer = (link) => {
      console.log("deletecustomerin customer funktiossa");
      fetch(link, { method: "DELETE" }).then((response) => {
        if (response.ok) {
          fetchData();
        }
      });
    };

    const [columnDefs, setColumnDefs] = useState([
        { headerName: "firstname", field: "firstname", sortable: true, filter: true, floatingFilter:true},
        { headerName: "lastname", field: "lastname", sortable: true, filter: true, floatingFilter:true },
        { headerName: "streetaddress", field: "streetaddress", sortable: true, filter: true, floatingFilter:true },
        { headerName: "postcode", field: "postcode", sortable: true, filter: true, floatingFilter:true },
        { headerName: "city", field: "city", sortable: true, filter: true, floatingFilter:true },
        { headerName: "email", field: "email", sortable: true, filter: true, floatingFilter:true },
        { headerName: "phone", field: "phone", sortable: true, filter: true, floatingFilter:true },
        {
          headerName: "",
          width: 100,
          field: "links.0.href",
          cellRenderer: (params) => (
            
            <IconButton color="error" onClick={() => deleteCustomer(params.value)}>
              <DeleteIcon />
            </IconButton>
          ),
        },
        {
          headerName: "",
          width: 100,
          field: "links.0.href",
          cellRenderer: (params) => (
            <EditCustomer updateCustomer={updateCustomer}  params={params} />
    
          ),
        },
        
        ])


    return(
      <>
      <AddCustomer addCustomer={addCustomer} />
      
        <div>
            <div style={{ height: "100%", boxSizing: "border-box" }}>
        <div
          style={{ height: 600, width: "90%" }}
          className="ag-theme-material"
        >
          <AgGridReact
            rowData={customers}
            columnDefs={columnDefs}
            paginationPageSize={10}
            pagination={true}
          />
        </div>
      </div>



        </div>
        </>
    )
}