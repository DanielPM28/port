import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import React from "react";


function Datatable() {
  const columns = [
    {
      name: "Habilidades",
      selector: (row: { nombre: any }) => row.nombre,
      sortable: true,
    },
    
  ];

  const data = [
    {
      nombre: "React",
      
    },
    {
      nombre: "Manejo de GitHub",
      
    },
    {
      nombre: "JS",
      
    },
    {
      nombre: "Manejo de Api",
      
    },
    {
      nombre: "TypeScript",
      
    },
    {
      nombre: "Uso de Frameworks",
      
    },
  ];
  const [records, setRecords] = useState(data);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRecords(data);
      setloading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e: { target: { value: string } }) => {
    const filteredRecords = data.filter((record) => {
      return record.nombre.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(filteredRecords);
  };

  return (
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
    <input type="text" onChange={handleChange} />
      <DataTable 
        title="Habilidades técnicas"
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        progressPending={loading}
      />
    </div>
  );
}

export default Datatable;
