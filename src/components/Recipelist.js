import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';



export default function Recipelist() {

    const [recipes, setRecipes] = useState([]);


    useEffect( () => {
        fetch('${API_URL}')
        .then(response => response.json())
        .then(data => setRecipes(data))

        
        .catch(err => console.error(err));
    }, []);

    const columns = [
     
        { field: 'name', headerName: 'Resepti', width: 300 },
        { field: 'cookingTime', headerName: 'Valmistusaika', width: 150},
        { field: 'preparation', headerName: 'Valmistus', width: 300},
        { field: 'category', headerName: 'Kategoria', width: 200,
         renderCell: row => row.value.name},
        { field: 'foodIngredients', headerName: 'Ainesosat', width: 300,
         renderCell: row => row.value.map((ingredient) =>(
            `${ingredient.name}, `
         )
            
         )}


    ]


    return (
        <div style={{display: 'flex', height: 600, width: '90%'}}>
            <DataGrid 
                rows={recipes}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
            />
        </div>
    )
    

}