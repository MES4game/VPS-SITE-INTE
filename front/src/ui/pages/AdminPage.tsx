import React, { useEffect, useState } from "react";
import { useGeneralVars } from "@/shared/contexts/common/GeneralVars";
import { Challenge } from "@/shared/models/challenge/Challenge";
import { useSmartRef } from "@/shared/utils/common/SmartHook";
import { getChallenges } from "@/api/challenge/Challenge";
import "@/ui/pages/AdminPage.css";

/*eslint-disable*/
const AdminPage: React.FC = () => {
    const { teams } = useGeneralVars();
    const [render_value, setRender] = useState<boolean>(false);

    function reRender() { setRender(!render_value); }

    const [sorted_teams, setSortedTeams] = useState([...teams.get()].sort((a, b) => (a.id > b.id ? 1 : -1)));
    const [password, setPassword] = useState("");
    const challenges = useSmartRef<Challenge[]>([]);

    challenges.subscribe(reRender);
    teams.subscribe(() => {
        setSortedTeams([...teams.get()].sort((a, b) => (a.id > b.id ? 1 : -1)));
        reRender();
    });

    function displayRowChallenge(challenge: Challenge, index: number) {
        return (
            <tr key={index}>
                <td>{challenge.title}</td>
                <td>{challenge.points}</td>
                <td>{challenge.max_done}</td>
                {sorted_teams.map((value) => (
                    <td>
                        <button onClick={() => { handleSub(challenge.id, value.id) }} disabled={(challenge.done.get(value.id.toString()) ?? 0) > 0}>-</button>
                        <p>{challenge.done.get(value.id.toString()) ?? 0}</p>
                        <button onClick={() => { handleAdd(challenge.id, value.id) }} disabled={(challenge.done.get(value.id.toString()) ?? 0) < challenge.max_done ||  challenge.max_done === -1}>+</button>
                    </td>
                ))}
            </tr>
        );
    }

    const props = {
        elements: challenges,
        default_sorting_field: 'id' as keyof Challenge,
        heads: [
            { key: 'id', value: 'Défi' },
            { key: 'points', value: 'Points' },
            { key: 'max_done', value: 'Maximum' },
            ...sorted_teams.map((value) => { return { value: value.name, color: value.color }; })
        ] as { key: keyof Challenge; value: string; color: string }[],
        displayRowElement: displayRowChallenge
    };

    const sorted_field = useSmartRef<keyof Challenge>(props.default_sorting_field);
    const ascending = useSmartRef<boolean>(true);

    function sortElements() {
        props.elements.set([...props.elements.get()].sort(
            (a, b) => (ascending.get() ? 1 : -1) * ((a[sorted_field.get()] ?? 0) > (b[sorted_field.get()] ?? 0) ? 1 : -1)
        ));
    }

    function handleSort(field: keyof Challenge | undefined) {
        if (field === undefined) return;
        ascending.set(sorted_field.get() === field ? !ascending.get() : true);
        sorted_field.set(field);
        sortElements();
    }

    useEffect(() => {
        getChallenges()
            .then(challenges.set)
            .catch(console.log);
    }, []);

    async function handleAdd(challenge_id: number, team_id: number) {
        const response = await fetch(`https://${process.env.NODE_ENV === "development" ? "dev." : "api."}inte.bde-pps.fr${process.env.NODE_ENV === "development" ? "/api" : ""}/challenge/done`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: password,
                challenge_id,
                team_id
            }),
        });

        if (!response.ok) alert("Request failed: " + response.status);

        getChallenges()
            .then(challenges.set)
            .catch(console.log);
    };

    async function handleSub(challenge_id: number, team_id: number) {
        const response = await fetch(`https://${process.env.NODE_ENV === "development" ? "dev." : "api."}inte.bde-pps.fr${process.env.NODE_ENV === "development" ? "/api" : ""}/challenge/done`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: password,
                challenge_id,
                team_id
            }),
        });

        if (!response.ok) alert("Request failed: " + response.status);

        getChallenges()
            .then(challenges.set)
            .catch(console.log);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded-md"
            />
            <div className="admin-table">
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
        </div>
    );
};

export default AdminPage;
