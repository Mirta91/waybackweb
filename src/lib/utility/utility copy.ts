import { mainStore, profile, resetProfile } from "$store/store";
import { location, replace } from "svelte-spa-router";
import { get } from "svelte/store";
import { EnumJsMessage } from "../types/EnumJsMessage";
import { routeFailReason } from "../types/routeFailReason";

/**
 * Returns a string of HTML classes based on a given object of class names and boolean values.
 *
 * @param {Object} classObj An object containing class names as keys and boolean values indicating whether or not to include the class.
 * @returns {string} A string of HTML classes.
 */
export function classMap(classObj: { [key: string]: boolean }): string {
    return Object.entries(classObj)
        .filter(([name, value]) => name !== "" && value)
        .map(([name, value]) => name)
        .join(" ");
}

export function prefixFilter(
    obj: { [x: string]: any },
    prefix: string,
): { [x: string]: any } {
    let names = Object.getOwnPropertyNames(obj);
    const newObj = {};
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (
            name.substring(0, prefix.length) === prefix &&
            name.substring(0, prefix.length) !== "class"
        ) {
            newObj[name.substring(prefix.length)] = obj[name];
        }
    }
    return newObj;
}

export async function generateGoogleMapsLink(endLat: number, endLng: number) {
    const mainStoreObj = get(mainStore);

    console.log(mainStoreObj);

    const startLat: number = mainStoreObj?.location?.[0];
    const startLng: number = mainStoreObj?.location?.[1];

    // Generate the Google Maps link with dynamic start and end coordinates
    const googleMapsLink: string =
        startLat && startLng && endLat && endLng
            ? `https://www.google.com/maps/dir/?api=1&origin=${startLat},${startLng}&destination=${endLat},${endLng}&travelmode=driving`
            : "";

    return googleMapsLink; // Return the generated link
}

export function isNullOrEmpty(value: string | null | undefined): boolean {
    return !value || value.trim().length === 0;
}

export function formatDateForTransfersTitle(dateString: string): string {
    const date = new Date(dateString);
    const today = new Date();

    const day = date.getDate();
    const month = date
        .toLocaleDateString("en-US", { month: "short" }) //TODO locale
        .toUpperCase();
    const dayOfWeek = date
        .toLocaleDateString("en-US", { weekday: "short" }) //TODO locale
        .toUpperCase();

    const year = date.getFullYear();
    const currentYear = today.getFullYear();

    // Include the year if it's not the current year
    const formattedDate = `${day}. ${month} (${dayOfWeek})`;
    return year !== currentYear ? `${formattedDate} ${year}` : formattedDate;
}

export function formatDateLong(dateString: string): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day}. ${month}, ${year}`;
}

export function formatDateToISO(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error("Invalid date provided");
    }
    return date.toISOString().split("T")[0];
}

export function formatDateTimeLocal(value: string): string {
    if (!value) {
        return "";
    }
    const date = new Date(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function checkHoursDifferenceFromDate(date: Date) {
    let currentDate = new Date();
    let differenceInMilliseconds = date.getTime() - currentDate.getTime();
    let differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
    
    return differenceInHours <= 5;
}

export function checkHoursDifferenceFromTwoDates(lowerDate: Date, higherDate: Date) {    
    let differenceInMilliseconds = higherDate.getTime() - lowerDate.getTime();
    let differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
    
    return differenceInHours <= 1;
}

export function getSearchParams() {
    const hash = window.location.hash;
    const queryString = hash.includes("?")
        ? hash.split("?")[1]
        : window.location.search;
    return new URLSearchParams(queryString);
}

export function copyTextToClipboard(text) {     
    navigator.clipboard.writeText(text).then(() => {        
        HybridWebView.SendRawMessageToDotNet(JSON.stringify({ action: EnumJsMessage.CopyToClipboard, value: text }));
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

export function refreshRoute() {
    const currentRoute = get(location); // Get the current route
    replace('/refresh-temp'); // Navigate to a dummy route
    setTimeout(() => replace(currentRoute), 0); // Navigate back
}

export function signOut() {
    console.log("sign out");
    resetProfile();
    replace("/login");
}

export async function checkAuth(detail: any): Promise<boolean> {    
    const authToken = get(profile)?.token || "";

    detail.userData = {
        reason: routeFailReason.notLoggedIn,
    };
    
    return !isNullOrEmpty(authToken);
}