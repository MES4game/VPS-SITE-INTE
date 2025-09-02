import { FC, ReactNode, useEffect, useState } from "react";
import { ComponentProps } from "@/shared/models/common/Props";
import { SmartRef } from "@/shared/models/common/SmartHook";
import { Record } from "@/shared/models/activity/Record";
import { useGeneralVars } from "@/shared/contexts/common/GeneralVars";
import TableComp from "@/ui/components/common/TableComp";
import "@/ui/components/activity/Records.css";

interface RecordsProps extends ComponentProps {
    records: SmartRef<Record[]>;
}

const Records: FC<RecordsProps> = (props: RecordsProps): ReactNode => {
    const { teams, rooms, slots } = useGeneralVars();
    const [render_value, setRender] = useState<boolean>(false);

    function reRender() { setRender(!render_value); }

    props.records.subscribe(reRender);
    teams.subscribe(reRender);
    rooms.subscribe(reRender);
    slots.subscribe(reRender);

    function displayRowRecord(record: Record, index: number) {
        const team = teams.get().find(value => value.id === record.team_id);
        const room = rooms.get().find(value => value.id === record.room_id);
        const slot = slots.get().find(value => value.id === record.slot_id);

        return (
            <tr key={index}>
                <td style={{ color: team?.color }}>{team?.name}</td>
                <td>{record.team_num}</td>
                <td>{room?.name}</td>
                <td>{slot?.value}</td>
                <td>{record.points}</td>
                <td>{record.bonus}</td>
                <td className="text-left">{record.comment}</td>
            </tr>
        );
    }

    useEffect(() => {
        console.log("Loaded: Records");
    }, []);

    useEffect(() => {
        console.log("Rendered: Records");
    });

    return (
        <TableComp<Record>
            elements={props.records}
            default_sorting_field={'slot_id'}
            heads={[
                { key: 'team_id', value: 'Equipe' },
                { key: 'team_num', value: 'Numéro' },
                { key: 'room_id', value: 'Salle' },
                { key: 'slot_id', value: 'Créneau' },
                { key: 'points', value: 'Points' },
                { key: 'bonus', value: 'Bonus' },
                { value: 'Commentaire' }
            ]}
            displayRowElement={displayRowRecord}
        />
    );
}

export default Records;
