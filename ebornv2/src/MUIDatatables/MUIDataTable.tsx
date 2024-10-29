import { Paper, paperClasses } from "@mui/material";
import { MUIDataTableColumnDef, MUIDataTableOptions, MUIDataTableProps, TableBody, TableFilterList, TableFooter, TableHead, TableResize, TableToolbar, TableToolbarSelect } from "mui-datatables";
import { ReactNode } from "react";

import DefaultTableBody from './components/TableBody';
import DefaultTableFilter from './components/TableFilter';
import DefaultTableFilterList from './components/TableFilterList';
import DefaultTableFooter from './components/TableFooter';
import DefaultTableHead from './components/TableHead';
import DefaultTableResize from './components/TableResize';
import DefaultTableToolbar from './components/TableToolbar';
import DefaultTableToolbarSelect from './components/TableToolbarSelect';



export const  MUIDataTable = (props : MUIDataTableProps ): ReactNode => {


console.info('MUIDataTable', props);

    
    return (<></>
    )
  
}