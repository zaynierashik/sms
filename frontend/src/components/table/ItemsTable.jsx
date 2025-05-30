import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function ItemsTable({
    columns = [],
    data = [],
    onSearch,          // (query: string) => void
    filters = null,    // JSX for filter dropdowns (optional)
    onSelect = null,   // (selectedIds: []) => void
    selectedIds = [],  // array of selected row IDs for external control (optional)
    snLabel = "S.N.",
}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (onSelect) {
            onSelect(selected);
        }
    }, [selected]);

    const toggleSelectAll = () => {
        if (selected.length === data.length) {
            setSelected([]);
        } else {
            setSelected(data.map((item) => item.id));
        }
    };

    const toggleRow = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (onSearch) onSearch(query);
    };

    return (
        <div className="overflow-hidden rounded-xl  bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            {(onSearch || filters) && (
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-1 pb-5">
                    {onSearch && (
                        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search..." className="border border-gray-200 px-3 py-2.5 text-gray-500 dark:text-gray-600 rounded-md text-sm w-full md:w-[80%]"/>
                    )}
                    {filters}
                </div>
            )}

            <div className="max-w-full overflow-x-auto">
                <Table>
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            {/* {onSelect && (
                                <TableCell isHeader className="px-5 py-3 text-start align-middle">
                                    <input type="checkbox" checked={selected.length === data.length} onChange={toggleSelectAll}/>
                                </TableCell>
                            )} */}

                            <TableCell key="sn" isHeader className="px-5 py-3 font-medium text-start text-theme-base dark:text-gray-400">
                                {snLabel}
                            </TableCell>
                            {columns.map((col) => (
                                <TableCell key={col.accessor} isHeader className="px-5 py-3 font-medium text-start text-theme-base dark:text-gray-400">
                                    {col.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {data.map((row, idx) => (
                            <TableRow key={row.id || idx}>
                                {/* {onSelect && (
                                    <TableCell className="px-5">
                                        <input type="checkbox" checked={selected.includes(row.id)} onChange={() => toggleRow(row.id)}/>
                                    </TableCell>
                                )} */}
                                
                                <TableCell className="px-5 py-4 text-start font-normal text-theme-base text-gray-500 dark:text-gray-400">{idx + 1}</TableCell>

                                {columns.map((col) => (
                                    <TableCell key={col.accessor} onClick={col.accessor === "actions" ? (e) => e.stopPropagation() : undefined}
									className="px-5 py-4 text-start font-normal text-theme-base text-gray-500 dark:text-gray-400">
                                        {col.render ? (
                                            col.render(row)
                                        ) : col.accessor === "actions" ? (
                                            <Link to="/collector-details" state={{ collector: row }} className="text-gray-50 hover:underline flex items-center">
                                                <EyeIcon className="w-5 h-5" />
                                            </Link>
                                        ) : (
                                            row[col.accessor]
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}