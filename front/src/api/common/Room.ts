import { Room } from "@/shared/models/common/Room";

const ROOMS: Room[] = [
    { id: 1, name: '620-A100' },
    { id: 2, name: '620-A101' },
    { id: 3, name: '620-A102' },
    { id: 4, name: '620-A103' },
    { id: 5, name: '620-A104' },
    { id: 6, name: '620-A105' },
    { id: 7, name: '620-A200' },
    { id: 8, name: '620-A201' },
    { id: 9, name: '620-A202' },
    { id: 10, name: '620-A203' },
    { id: 11, name: '620-A204' },
    { id: 12, name: '620-A205' },
    { id: 13, name: '620-AMPHI' },
    { id: 13, name: '620-B120' }
];

export async function getRooms(): Promise<Room[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");
    return ROOMS;
}
