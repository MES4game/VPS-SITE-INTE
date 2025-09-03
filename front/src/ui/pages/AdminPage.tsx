import { getActivities } from "@/api/activity/Activity";
import { useGeneralVars } from "@/shared/contexts/common/GeneralVars";
import { Activity } from "@/shared/models/activity/Activity";
import React, { useEffect, useState } from "react";

/*eslint-disable*/
type Option = {
    key: string;
    value: string;
};

interface Props {
    options: Option[];
    onSend: (data: { text: string; number: number; optionKey: string }) => void;
}

const InputContainer: React.FC<Props> = ({ options, onSend }) => {
    const { teams, rooms, slots } = useGeneralVars();
    let activities: Activity[] = [];
    getActivities()
        .then((value) => activities = value)
        .catch(console.log);

    const [password, setPassword] = useState("");
    const [activity_id, setActivityId] = useState<number>(activities[0]?.id || 0);
    const [team_id, setTeamId] = useState<number>(teams.get()[0]?.id || 0);
    const [team_num, setTeamNum] = useState<number>(-1);
    const [room_id, setRoomId] = useState<number>(rooms.get()[0]?.id || 0);
    const [slot_id, setSlotId] = useState<number>(slots.get()[0]?.id || 0);
    const [points, setPoints] = useState<number>(0);
    const [bonus, setBonus] = useState<number>(0);
    const [comment, setComment] = useState<string>("");
    const [selectedKey, setSelectedKey] = useState<string>(options[0]?.key || "");
    
    useEffect(() => {
    }, []);

    const handleSend = () => {
        onSend({
            text: password,
            number: activity_id,
            optionKey: selectedKey,
        });
    };

  return (
    <div className="p-4 border rounded-lg shadow-md flex flex-col gap-3 w-80">
        <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded-md"
        />

        <select
            value={activity_id}
            onChange={(e) => setActivityId(parseInt(e.target.value, 10) || 0)}
            className="border p-2 rounded-md"
        >
            {activities.map((opt) => (
                <option key={opt.id} value={opt.id}>
                    {opt.title}
                </option>
            ))}
        </select>

        <input
            type="number"
            placeholder="Team number"
            value={team_num}
            onChange={(e) => setTeamNum(parseInt(e.target.value, 10) || 0)}
            className="border p-2 rounded-md"
        />

        {/* Dropdown */}
        <select
            value={selectedKey}
            onChange={(e) => setSelectedKey(e.target.value)}
            className="border p-2 rounded-md"
        >
            {options.map((opt) => (
                <option key={opt.key} value={opt.key}>
                    {opt.value}
                </option>
            ))}
        </select>

        <input
            type="number"
            placeholder="Team number"
            value={points}
            onChange={(e) => setPoints(parseInt(e.target.value, 10) || 0)}
            className="border p-2 rounded-md"
        />
        <input
            type="number"
            placeholder="Team number"
            value={bonus}
            onChange={(e) => setBonus(parseInt(e.target.value, 10) || 0)}
            className="border p-2 rounded-md"
        />
        <input
            type="text"
            placeholder="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border p-2 rounded-md"
        />

        {(team_num === -1) || <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
            Send
        </button>}
    </div>
  );
};

export default InputContainer;
