// import React, { useMemo } from "react";
// import { useTable, useGlobalFilter, useFilters } from "react-table";
// import { UserData } from "./Data.js";
// import { COLUMNS } from "./Columns";
// import "./table.css";
// // import SelectBox from "./components/Dropdown";


// export const FilteringTable = () => {
//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => UserData, []);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     footerGroups,
//     rows,
//     prepareRow,
//     state,
//     setGlobalfilter,
//   } = useTable(
//     {
//       columns,

//       data,
//     },
//     useFilters,
//     // useGlobalFilter
//   );

//   // const { globalFilter } = state;

//   return (
//     <>
//       {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>
//                   {column.render("Header")}
//                   <div>{column.canFilter ? column.render("Filter") : null}</div>
                  
//                 </th>
//               ))}
              
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
                
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}
                    
//                     </td>
//                   );
//                 })}
               
//               </tr>
//             );
//           })}
//         </tbody>
//         <tfoot>
//           {footerGroups.map((footerGroup) => (
//             <tr {...footerGroup.getFooterGroupProps()}>
//               {footerGroup.headers.map((column) => (
//                 <td {...column.getFooterProps}>{column.render("Footer")}</td>
//               ))}
//             </tr>
//           ))}
//         </tfoot>
//       </table>
//     </>
    
//   );
//   // return(  
//   // <div className="App">
//   //   <h1>Select Feature</h1>
//   //   <div style={{ margin: "16px", position: "relative" }} />
//   //   <SelectBox
//   //       items={[
//   //         { value: "Feature1", id: 1 },
//   //         { value: "Feature2", id: 2 },
//   //         { value: "Feature3", id: 3 },
//   //         { value: "Feature4", id: 4 },
//   //         { value: "Feature5", id: 5 },
//   //         { value: "Feature6", id: 6 },
//   //         { value: "Feature7", id: 7 },
//   //         { value: "Feature8", id: 8 },
//   //       ]}
//   //   />
//   //   </div>
//   // )
// };
