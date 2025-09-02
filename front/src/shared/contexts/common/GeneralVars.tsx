import { FC, ReactNode, createContext, useContext, useEffect } from "react";
import { SmartRef } from "@/shared/models/common/SmartHook";
import { Team } from "@/shared/models/common/Team";
import { Room } from "@/shared/models/common/Room";
import { Slot } from "@/shared/models/common/Slot";
import { useSmartRef } from "@/shared/utils/common/SmartHook";
import { getTeams } from "@/api/common/Team";
import { getRooms } from "@/api/common/Room";
import { getSlots } from "@/api/common/Slot";

interface GeneralVarsType {
    readonly dev: SmartRef<boolean>;
    readonly teams: SmartRef<Team[]>;
    readonly rooms: SmartRef<Room[]>;
    readonly slots: SmartRef<Slot[]>;
}

const GeneralVarsContext = createContext<GeneralVarsType | undefined>(undefined);

export interface GeneralVarsProviderProps {
    readonly children: ReactNode;
}

export const GeneralVarsProvider: FC<GeneralVarsProviderProps> = (props: GeneralVarsProviderProps): ReactNode => {
    const context_value: GeneralVarsType = {
        dev: useSmartRef(process.env.NODE_ENV == "development"),
        teams: useSmartRef<Team[]>([]),
        rooms: useSmartRef<Room[]>([]),
        slots: useSmartRef<Slot[]>([])
    };

    useEffect(() => {
        getTeams()
            .then(context_value.teams.set)
            .catch(console.log);
        getRooms()
            .then(context_value.rooms.set)
            .catch(console.log);
        getSlots()
            .then(context_value.slots.set)
            .catch(console.log);
    }, []);

    useEffect(() => {
        console.log("Loaded: GeneralVarsProvider");
    }, []);

    useEffect(() => {
        console.log("Rendered: GeneralVarsProvider");
    });

    return (
        <GeneralVarsContext.Provider value={context_value}>
            {props.children}
        </GeneralVarsContext.Provider>
    );
};

export function useGeneralVars(): GeneralVarsType {
    const context = useContext(GeneralVarsContext);

    if (!context)
        throw new Error("useGeneralVars must be used within a GeneralVarsProvider");

    return context;
};
