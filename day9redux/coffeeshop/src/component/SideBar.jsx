const SideBar=({onSort})=>{



   return (
     <div>
       <h3>Sort By</h3>
       <div>
         <button onClick={() => onSort("asc")}>Sort Ascending</button>
         <button onClick={() => onSort("desc")}>Sort Descending</button>
       </div>
     </div>
   );
}

export default SideBar