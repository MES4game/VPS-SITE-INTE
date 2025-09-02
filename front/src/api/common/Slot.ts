import { Slot } from "@/shared/models/common/Slot";

const SLOTS: Slot[] = [
    { id: 1, value: '14h35-14h45' },
    { id: 2, value: '14h45-14h55' },
    { id: 3, value: '14h55-15h05' },
    { id: 4, value: '15h05-15h15' },
    { id: 5, value: '15h15-15h25' },
    { id: 6, value: '15h25-15h35' },
    { id: 7, value: '15h35-15h45' },
    { id: 8, value: '15h45-15h55' },
    { id: 9, value: '15h55-16h05' },
    { id: 10, value: '16h05-16h15' },
    { id: 11, value: '16h15-16h25' },
    { id: 12, value: '16h25-16h35' },
    { id: 13, value: '16h35-16h45' },
    { id: 14, value: '16h45-16h55' },
    { id: 15, value: '16h55-17h05' },
    { id: 16, value: '17h05-17h15' },
    { id: 17, value: '17h15-17h25' },
    { id: 18, value: '17h25-17h35' }
];

export async function getSlots(): Promise<Slot[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");
    return SLOTS;
}
