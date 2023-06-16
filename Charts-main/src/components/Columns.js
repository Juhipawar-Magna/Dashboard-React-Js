import { ColumnFilter } from './ColumnFilter'
export const COLUMNS = [
    {
        Header: 'Item Number', 
        Footer: 'Item Number',
        accessor:'no',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Feature name',
        Footer: 'Feature name',
        accessor:'name',
        Filter: ColumnFilter
    },
    {
        Header: 'Feature State',
        Footer: 'Feature State',
        accessor:'empcode',
        Filter: ColumnFilter
    },
    {
        Header: 'Assigned User',
        Footer: 'Assigned User',
        accessor:'emp',
        Filter: ColumnFilter
    },
    {
        Header: 'Total test executed',
        Footer: 'Total test executed',
        accessor:'period',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Test passed',
        Footer: 'Test passed',
        accessor:'reason',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Test Failed',
        Footer: 'Test Failed',
        accessor:'status',
        Filter: ColumnFilter,
        disableFilters: true
    }
]