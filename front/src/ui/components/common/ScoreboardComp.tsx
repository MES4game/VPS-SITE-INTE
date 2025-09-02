import { FC, ReactNode, useEffect, useState } from "react";
import { ComponentProps } from "@/shared/models/common/Props";
import { SmartRef } from "@/shared/models/common/SmartHook";
import { Score } from "@/shared/models/common/Score";
import { useGeneralVars } from "@/shared/contexts/common/GeneralVars";
import "@/ui/components/common/ScoreboardComp.css";

interface CountUpProps extends ComponentProps {
    score: number;
    increment: number;
}

const CountUp: FC<CountUpProps> = (props: CountUpProps): ReactNode => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount(0);

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= props.score) {
                    clearInterval(interval);
                    return props.score;
                }
                return Math.ceil(prev + props.increment);
            });
        }, 50);

        return () => { clearInterval(interval) };
    }, [props.score, props.increment]);

    return <span className={`common-scoreboard-bar-score ${props.className ?? ''}`}>{count}</span>;
};

interface ScoreboardCompProps extends ComponentProps {
    activity_id?: number;
    scores: SmartRef<Score[]>;
}

const ScoreboardComp: FC<ScoreboardCompProps> = (props: ScoreboardCompProps): ReactNode => {
    const { teams } = useGeneralVars();
    const [render_value, setRender] = useState<boolean>(false);

    function reRender() { setRender(!render_value); }

    props.scores.subscribe(reRender);
    teams.subscribe(reRender);

    let max_score = 0;
    props.scores.get().forEach(score => { max_score = Math.max(max_score, score.points) });

    const increment: number = max_score / (5 * 1000 / 50);

    useEffect(() => {
        console.log("Loaded: Scoreboard");
    }, []);

    useEffect(() => {
        console.log("Rendered: Scoreboard");
    });

    return (
        <div key={props.activity_id ?? 0} className={`common-scoreboard ${props.className ?? ''}`} style={props.style}>
            {props.scores.get().map(value => {
                const team = teams.get().find(tmp => tmp.id === value.team_id);

                return (
                    <div className='common-scoreboard-team' key={value.team_id}>
                        <h2 style={{ color: team?.color }}>{team?.name.toUpperCase()}</h2>
                        <div className='common-scoreboard-bar-container'>
                            <div
                                className='common-scoreboard-bar'
                                style={{ background: team?.color, maxHeight: `calc(${(value.points / max_score * 100).toString()}%)` }}
                            >
                                <CountUp score={value.points} increment={increment} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ScoreboardComp;
