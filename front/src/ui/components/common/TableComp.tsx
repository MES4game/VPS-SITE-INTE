import { ReactNode, useEffect, useState } from "react";
import { ComponentProps } from "@/shared/models/common/Props";
import { SmartRef } from "@/shared/models/common/SmartHook";
import { useSmartRef } from "@/shared/utils/common/SmartHook";
import "@/ui/components/common/TableComp.css";

export interface TableHead<T> {
    key?: keyof T;
    value: string;
    color?: string;
}

interface TableCompProps<T> extends ComponentProps {
    elements: SmartRef<T[]>;
    default_sorting_field: keyof T;
    heads: TableHead<T>[];
    displayRowElement: (value: T, index: number) => ReactNode;
}

const TableComp = <T,>(props: TableCompProps<T>): ReactNode => {
    const [render_value, setRender] = useState<boolean>(false);

    function reRender() { setRender(!render_value); }

    props.elements.subscribe(reRender);

    const sorted_field = useSmartRef<keyof T>(props.default_sorting_field);
    const ascending = useSmartRef<boolean>(true);

    function sortElements() {
        props.elements.set([...props.elements.get()].sort(
            (a, b) => (ascending.get() ? 1 : -1) * (a[sorted_field.get()] > b[sorted_field.get()] ? 1 : -1)
        ));
    }

    function handleSort(field: keyof T | undefined) {
        if (field === undefined) return;
        ascending.set(sorted_field.get() === field ? !ascending.get() : true);
        sorted_field.set(field);
        sortElements();
    }

    useEffect(() => {
        console.log("Loaded: TableComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: TableComp");
    });

    return (
        <div className={`common-table ${props.className ?? ''}`} style={props.style}>
            <table>
                <thead>
                    <tr>
                        {props.heads.map((value, index) => (
                            <th
                                key={index}
                                onClick={() => { handleSort(value.key) }}
                                style={{ color: value.color ?? '' }}
                            >
                                {value.value}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.elements.get().map(props.displayRowElement)}
                </tbody>
            </table>
        </div>
    );
}

export default TableComp;
