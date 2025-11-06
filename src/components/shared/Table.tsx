interface Column {
    Header: string
    accessor: string
}

interface TableProps<T> {
    columns: Column[]
    data: T[]
    renderRow: (row: T, index: number) => React.ReactNode
    title?: string
    lastUpdated: string
    className?: string
}

const Table = <T,>({ columns, data, renderRow, title, className, lastUpdated }: TableProps<T>) => {
    return (
        <div className='flex flex-col gap-8 py-8'>
            <section
                className='flex flex-col gap-8 p-5 rounded-lg shadow-sm'
                style={{
                    boxShadow: '0px 0px 10px rgba(29, 29, 29, 0.2)',
                }}
            >
                <div className='flex items-center justify-between w-full'>
                    <strong className='text-lg lg:text-2xl text-[#444748] capitalize'>{title}</strong>
                    <p className='text-[#979DA0] text-xs md:text-sm'>{lastUpdated}</p>
                </div>

                <div className={`w-full overflow-auto text-center h-60 ${className}`}>
                    <table className='w-full min-w-[600px] text-gray-700 rounded-sm'>
                        <thead>
                            <tr>
                                {columns.map(column => (
                                    <th key={column.accessor}>{column.Header}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>{data.map((row, index) => renderRow(row, index))}</tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Table
