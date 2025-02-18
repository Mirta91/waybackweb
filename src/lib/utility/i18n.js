import { derived, writable } from "svelte/store";
import translations from "../translations/translations";

export const locale = writable("en");
export const locales = Object.keys(translations);

export const setLocale = (newLocale) => {
    console.log("setLocale", newLocale);
    locale.set(newLocale);
};

function translate(locale, key, vars) {
    // Let's throw some errors if we're trying to use keys/locales that don't exist.
    // We could improve this by using Typescript and/or fallback values.
    //  console.log(locale, key, vars);
    if (!key) throw new Error("no key provided to $t()");
    if (!locale) throw new Error(`no translation for key "${key}"`);

    // Grab the translation from the translations object.
    let text = translations[locale][key];

    if (!text) {
        console.log(`no translation found for ${locale}.${key}`);
        text = "$(" + key + ")";
    }
    //if (!text) throw new Error(`no translation found for ${locale}.${key}`);

    // Replace any passed in variables in the translation string.
    Object.keys(vars).map((k) => {
        const regex = new RegExp(`{{${k}}}`, "g");
        text = text.replace(regex, vars[k]);
    });

    return text;
}

export const t = derived(
    locale,
    ($locale) =>
        (key, vars = {}) =>
            translate($locale, key, vars),
);
