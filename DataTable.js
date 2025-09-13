import React, { useState } from "react";

const DataTable = <T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleRowClick = (row: T) => {
    if (!selectable) return;
    const alreadySelected = selectedRows.includes(row);
    const newSelection = alreadySelected
      ? selectedRows.filter((r) => r !== row)
      : [...selectedRows, row];
    setSelectedRows(newSelection);
    onRowSelect && onRowSelect(newSelection);
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) =>
      a[sortKey] > b[sortKey] ? (sortAsc ? 1 : -1) : sortAsc ? -1 : 1
    );
  }, [data, sortKey, sortAsc]);

  if (loading) return <div>Loading...</div>;
  if (!data.length) return <div>No data available</div>;

  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className="border-b px-4 py-2 cursor-pointer"
              onClick={() => col.sortable && setSortKey(col.dataIndex)}
            >
              {col.title}
              {sortKey === col.dataIndex ? (sortAsc ? " ↑" : " ↓") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, idx) => (
          <tr
            key={idx}
            onClick={() => handleRowClick(row)}
            className={`hover:bg-gray-100 ${selectable && selectedRows.includes(row) ? "bg-blue-100" : ""}`}
          >
            {columns.map((col) => (
              <td key={col.key} className="border-b px-4 py-2">
                {row[col.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
