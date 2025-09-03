/*eslint-disable*/
export async function fetchData(route: string): Promise<any> {
    try {
        const response = await fetch(`https://${process.env.NODE_ENV === "development" ? "dev." : "api."}inte.bde-pps.fr${process.env.NODE_ENV === "development" ? "/api" : ""}${route}`);
        if (!response.ok) throw new Error(`Network response was not ok\nCode: ${response.status.toString()}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("Error fetching data");
    }
}
