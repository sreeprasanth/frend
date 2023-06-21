import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../services/ProductService";
import { Button } from "primereact/button";

export default function TableComponent() {
  const data = [
    { id: "1", code: "s", name: "name", category: "category", quantity: "10" },
    { id: "2", code: "s", name: "name", category: "category", quantity: "10" },
    { id: "3", code: "s", name: "name", category: "category", quantity: "10" },
    { id: "4", code: "s", name: "name", category: "category", quantity: "10" },
    { id: "5", code: "s", name: "name", category: "category", quantity: "10" },
    { id: "6", code: "s", name: "name", category: "category", quantity: "10" },
    { code: "s", name: "name", category: "category", quantity: "10" },
  ];
  const [products, setProducts] = useState(data);
  const columns = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ];

  //   useEffect(() => {
  //     ProductService.getProductsMini().then((data) => setProducts(data));
  //   }, []);
  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          label="Edit"
          className="p-button-rounded p-button-success mr-2"
          //   onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          label="delete"
          className="p-button-rounded p-button-warning"
          //   onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };
  return (
    <div
      className="card bg-red-300"
      //   style={{
      //     background: "red",
      //   }}
    >
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        {/* {columns.map((col, i) => ( */}
        <Column field="code" header="Code" />
        <Column field="name" header="Name" />
        <Column field="category" header="Category" />
        <Column field="quantity" header="Quantity" />
        <Column header="" body={actionBodyTemplate} />

        {/* ))} */}
      </DataTable>
    </div>
  );
}
