import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'SongName', headerName: 'Song Name', width: 200 },
    { field: 'Band', headerName: 'Band', width: 130 },
    { field: 'Year', headerName: 'Year', width: 70 },
];

export default function DataTable({ data }: any) {
    if ((data.song_list) && (data.song_list.length > 0)) {

        var rows = data.song_list
        rows.map((o: any, i: any) => o['id'] = i)

        return (
            <div style={{ margin: "auto", height: 270, width: 410, }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        )
    }

    return <div></div>
}