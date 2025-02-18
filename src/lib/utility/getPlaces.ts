import { searchPlaces } from "$utility/api";

/**
 * Fetches places based on the provided search term.
 * If the result status is "OK" and there are predictions, it fetches detailed information for each place.
 *
 * @param {string} place - The search term for the place.
 * @param {string} [base="Zagreb"] - The base location to search around.
 * @param {number} [radius=20000] - The radius in meters to search within.
 * @returns {Promise<Array<{ id: string, address: string }>>} - A promise that resolves to an array of place objects.
 *
 */
let dropdownList: { id: string; address: string }[] = [];

export interface Place {
    id: string;
    address: string;
}

export default async function getPlaces(
    place: string,
    base: string = "Zagreb",
    radius: number = 20000,
): Promise<Place[]> {
    if (!place) return [];

    try {
        const result = await searchPlaces(place, base, radius);

        if (
            result?.status === "OK" &&
            result?.predictions?.predictions?.length > 0
        ) {
            const places = await Promise.all(
                result.predictions.predictions.map(
                    async (item: { place_id: string; description: string }) => {
                        return {
                            id: item.place_id,
                            place_id: null,
                            address: item.description,
                        };
                    },
                ),
            );

            dropdownList = places;
            return dropdownList;
        } else {
            console.log("No predictions");
            dropdownList = [{ id: "1", address: "No results" }];
            return dropdownList;
        }
    } catch (error) {
        console.error("Error fetching data", error);
        dropdownList = [{ id: "1", address: "Error fetching data" }];
        return dropdownList;
    }
}
