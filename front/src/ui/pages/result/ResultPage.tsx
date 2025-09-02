import { FC, ReactNode, useEffect } from "react";
import { useSmartRef } from "@/shared/utils/common/SmartHook";
import { Score } from "@/shared/models/common/Score";
import { getResultScores } from "@/api/result/ResultScore";
import ScoreboardComp from "@/ui/components/common/ScoreboardComp";
import "@/ui/pages/result/ResultPage.css";

const ResultPage: FC = (): ReactNode => {
    const scores = useSmartRef<Score[]>([]);

    getResultScores()
        .then(scores.set)
        .catch(console.log);

    useEffect(() => {
        console.log("Loaded: ResultPage");
    }, []);

    useEffect(() => {
        console.log("Rendered: ResultPage");
    });

    return (
        <div className={"result-container"}>
            <h1>Résultat Intégration 2025/2026</h1>
            <ScoreboardComp scores={scores} />
        </div>
    );
}

export default ResultPage;
