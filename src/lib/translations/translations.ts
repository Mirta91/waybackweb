/* 
Prefix the translations according to this rules:
  g_expression - global translations used in multiple components
  page_expression - where page is a prefix of the page where the translation is used, for example log_ is used for login page
*/

const globalTranslations = {
    en: {
        g_submit: "Submit",
        g_cancel: "Cancel",
        g_note: "Note",
        g_client: "Client",
        g_phone: "Phone",
        g_delete: "Delete",
        g_edit: "Edit",
        g_add: "Add",
        g_resend: "Resend",
        g_go_back: "Go back to",
        g_okay: "Okay",
        g_alert_email_confirmed: "Email address confirmed!",
        g_currency_symbol: "€",
        g_alert_error: "Something went wrong, try again later!",
    },
    hr: {
        g_submit: "Pošalji",
        g_cancel: "Odustani",
        g_note: "Napomena",
        g_client: "Klijent",
        g_phone: "Telefon",
        g_delete: "Obriši",
        g_edit: "Uredi",
        g_add: "Dodaj",
        g_resend: "Ponovno pošalji",
        g_go_back: "Vrati se na",
        g_okay: "U redu",
        g_alert_email_confirmed: "Vaša e-mail adresa je potvrđena!",
        g_currency_symbol: "€",
        g_alert_error: "Nešto je pošlo po zlu, pokušajte ponovno kasnije!",
    },
};

const formTranslations = {
    en: {
        // Form label translations
        form_label_email: "Email",
        form_label_username: "Username",
        form_label_password: "Password",
        form_label_new_password: "New password",
        form_label_confirm_password: "Confirm new password",
        form_label_customer_name: "CustomerName",
        form_label_customer_lastname: "CustomerLastName",
        form_label_customer_phone: "CustomerPhone",
        form_label_transfer_price: "Price",
        form_label_transfer_deposit: "Deposit",
        form_label_transfer_note: "Note",
        form_label_transfer_premium: "Premium Transfer",
        form_label_transfer_all_day: "All day",
        form_label_transfer_date: "Transfer date",
        form_label_transfer_time: "Transfer time",
        form_label_pickup_address: "PickUp Address",
        form_label_dropoff_address: "DropOff Address",
        form_label_flight_number: "Flight Number",
        form_label_numb_of_passengers: "Number of passengers",

        // Form placeholders translations
        form_placeholder_email: "Enter your email",
        form_placeholder_username: "Enter your username",
        form_placeholder_password: "Enter your password",
        form_placeholder_new_password: "Enter your new password",
        form_placeholder_confirm_password: "Confirm your new password",
        form_placeholder_customer_name: "Customer name",
        form_placeholder_customer_lastname: "Customer last name",
        form_placeholder_customer_phone: "Customer phone",
        form_placeholder_transfer_price: "Full Transfer price (€)",
        form_placeholder_transfer_deposit: "Paid in advance (€)",
        form_placeholder_transfer_note: "Note",
        form_placeholder_transfer_premium: "Premium Transfer",
        form_placeholder_transfer_all_day: "All day",
        form_placeholder_transfer_date: "Transfer date",
        form_placeholder_transfer_time: "Transfer time",
        form_placeholder_pickup_address: "Pickup address",
        form_placeholder_dropoff_address: "Dropoff address",
        form_placeholder_flight_number: "Flight number (optional)",
        form_placeholder_numb_of_passengers: "Number of passengers",

        // Form error translations
        form_error_email_empty: "Email is required",
        form_error_email_invalid: "Invalid email",
        form_error_username: "Invalid username",
        form_error_password_empty: "Password is required",
        form_error_pass_length: "Password must be at least 8 characters long",
        form_error_pass_uppercase:
            "Password must contain at least one uppercase letter",
        form_error_pass_lowercase:
            "Password must contain at least one lowercase letter",
        form_error_pass_special:
            "Password must contain at least one special character",
        form_error_pass_confirm: "Passwords do not match",
        form_error_name_empty: "Name is required",
        form_error_last_name_empty: "Last name is required",
        form_error_pickup_address_empty: "Pick up address is required",
        form_error_drop_off_address_empty: "Drop off address is required",
        form_error_number_type: "Must be a positive number",
        form_error_price_empty: "Price cannot be empty",
        form_error_price_only_numbers: "Price can only contain numbers, a decimal point, or a comma",
        form_error_price_max_digits: "Money, money, money 🤑 !",
        form_error_price_format: "Enter a valid price (max 5 digits before decimal, 2 after)",
        form_error_invalid_date_format: "Invalid date",
        form_error_phone_empty: "Phone number is required",
        form_error_phone_format: "Invalid phone number",
        form_error_number_of_passengers: "Number of passengers is required",
        form_error_deposit_greater_than_price: "Deposit cannot be greater than price",

        // Form success translations
        form_success_transfer_added: "Transfer successfully added",
        form_success_transfer_edited: "Transfer successfully edited",
    },
    hr: {
        // Form label translations
        form_label_email: "E-pošta",
        form_label_username: "Korisničko ime",
        form_label_password: "Lozinka",
        form_label_new_password: "Nova lozinka",
        form_label_confirm_password: "Potvrdi novu lozinku",
        form_label_customer_name: "Ime klijenta",
        form_label_customer_lastname: "Prezime klijenta",
        form_label_customer_phone: "Telefon klijenta",
        form_label_transfer_price: "Cijena",
        form_label_transfer_deposit: "Predujam",
        form_label_transfer_note: "Napomena",
        form_label_transfer_premium: "Premium transfer",
        form_label_transfer_all_day: "Cijeli dan",
        form_label_transfer_date: "Datum transfera",
        form_label_transfer_time: "Vrijeme transfera",
        form_label_pickup_address: "Adresa polaska",
        form_label_dropoff_address: "Adresa dolaska",
        form_label_flight_number: "Broj leta",
        form_label_numb_of_passengers: "Broj putnika",

        // Form placeholders translations
        form_placeholder_email: "Unesite svoj e-mail",
        form_placeholder_username: "Unesite svoje korisničko ime",
        form_placeholder_password: "Unesite svoju lozinku",
        form_placeholder_new_password: "Unesite novu lozinku",
        form_placeholder_confirm_password: "Potvrdite novu lozinku",
        form_placeholder_customer_name: "Ime klijenta",
        form_placeholder_customer_lastname: "Prezime klijenta",
        form_placeholder_customer_phone: "Telefon klijenta",
        form_placeholder_transfer_price: "Puna cijena transfera (€)",
        form_placeholder_transfer_deposit: "Plaćeno unaprijed (€)",
        form_placeholder_transfer_note: "Napomena",
        form_placeholder_transfer_premium: "Premium transfer",
        form_placeholder_transfer_all_day: "Cijeli dan",
        form_placeholder_transfer_date: "Datum transfera",
        form_placeholder_transfer_time: "Vrijeme transfera",
        form_placeholder_pickup_address: "Adresa polaska",
        form_placeholder_dropoff_address: "Adresa dolaska",
        form_placeholder_flight_number: "Broj leta (opcionalno)",
        form_placeholder_numb_of_passengers: "Broj putnika",

        // Form error translations
        form_error_email_empty: "E-pošta je obavezna",
        form_error_email_invalid: "Nevažeća e-pošta",
        form_error_username: "Nevažeće korisničko ime",
        form_error_password_empty: "Lozinka je obavezna",
        form_error_pass_length: "Lozinka mora imati najmanje 8 znakova",
        form_error_pass_uppercase:
            "Lozinka mora sadržavati barem jedno veliko slovo",
        form_error_pass_lowercase:
            "Lozinka mora sadržavati barem jedno malo slovo",
        form_error_pass_special:
            "Lozinka mora sadržavati barem jedan poseban znak",
        form_error_pass_confirm: "Lozinke se ne podudaraju",
        form_error_name_empty: "Ime je obavezno",
        form_error_last_name_empty: "Prezime je obavezno",
        form_error_pickup_address_empty: "Adresa polaska je obavezna",
        form_error_drop_off_address_empty: "Adresa dolaska je obavezna",
        form_error_number_type: "Mora biti pozitivan broj",
        form_error_price_empty: "Cijena je obavezna",
        form_error_invalid_date_format: "Nevažeći datum",
        form_error_phone_format: "Nevažeći broj telefona",
        form_error_deposit_greater_than_price: "Depozit ne može biti veći od cijene",
    },
};

const sideMenuTranslations = {
    en: {
        side_my_profile: "My profile",
        side_my_preferences: "My preferences",
        side_past_transfers: "My past transfers",
        side_contact: "Contact us",
        side_dev_redirect: "Redirect to Svelte Dev",
        side_sign_out: "Sign out",
    },
    hr: {
        side_my_profile: "Moj profil",
        side_my_preferences: "Moje postavke",
        side_past_transfers: "Moji prošli transferi",
        side_contact: "Kontaktirajte nas",
        side_dev_redirect: "Preusmjeri na Svelte Dev",
        side_sign_out: "Odjava",
    },
};

const loginPageTranslations = {
    en: {
        log_title: "Login",
        log_subtitle: "Enter your email and password to login.",
        log_email_forgot: "Forgot your email?",
        log_user_forgot: "Forgot your username?",
        log_pass_forgot: "Forgot your password?",
        log_checkbox: "Keep me signed in",
        log_login_btn: "Login",
        log_no_acc: "Don't have an account?",
        log_signup: "Sign up",
    },
    hr: {
        log_title: "Prijava",
        log_subtitle: "Upišite svoje korisničko ime i lozinku za prijavu.",
        /*log_user_placeholder: "Upišite svoje korisničko ime",
        log_pass_placeholder: "Upišite svoju lozinku",*/
        log_email_forgot: "Zaboravili ste email?",
        log_user_forgot: "Zaboravili ste korisničko ime?",
        log_pass_forgot: "Zaboravili ste lozinku?",
        /*log_user_error: "Pogrešno korisničko ime",
        log_pass_error: "Pogrešna lozinka",*/
        log_checkbox: "Ostani prijavljen",
        log_login_btn: "Prijavi se",
        log_no_acc: "Nemate račun?",
        log_signup: "Registriraj se",
    },
};

const forgotPasswordPageTranslations = {
    en: {
        forgot_pass_title: "Forgot password",
        forgot_pass_subtitle: "Reset your password by entering your email.",
    },
    hr: {
        forgot_pass_title: "Zaboravljena lozinka",
        forgot_pass_subtitle: "Resetirajte lozinku unosom vaše e-pošte.",
    },
};

const forgotPasswordConfirmPageTranslations = {
    en: {
        reset_pass_confirm_title: "Reset password",
        reset_pass_confirm_subtitle1: "Thank you!",
        reset_pass_confirm_subtitle2:
            "Please check your email for further instructions.",
        reset_pass_confirm_msg: "Didn't get the reset email?",
    },
    hr: {
        reset_pass_confirm_title: "Resetiranje lozinke",
        reset_pass_confirm_subtitle1: "Hvala vam!",
        reset_pass_confirm_subtitle2:
            "Provjerite svoj e-mail za daljnje upute.",
        reset_pass_confirm_msg: "Niste dobili e-mail za resetiranje?",
    },
};

const registrationPageTranslations = {
    en: {
        reg_title: "Registration",
        reg_subtitle: "Enter your email and password to register.",
        reg_user_placeholder: "Enter your username",
        reg_pass_placeholder: "Enter your password",
        reg_email_placeholder: "Enter your email",
        reg_btn: "Register",
        reg_login: "login",
    },
    hr: {
        reg_title: "Registracija",
        reg_subtitle: "Unesite svoj e-mail i lozinku za registraciju.",
        reg_user_placeholder: "Unesite korisničko ime",
        reg_pass_placeholder: "Unesite lozinku",
        reg_email_placeholder: "Unesite e-mail",
        reg_btn: "Registriraj se",
        reg_login: "prijava",
    },
};

const registrationConfirmPageTranslations = {
    en: {
        reg_confirm_subtitle1: "Thank you for registering!",
        reg_confirm_subtitle2:
            "Please check your email for further instructions.",
        reg_confirm_msg: "Didn't get the confirmation registration email?",
    },
    hr: {
        reg_confirm_subtitle1: "Hvala na registraciji!",
        reg_confirm_subtitle2: "Provjerite svoj e-mail za daljnje upute.",
        reg_confirm_msg: "Niste dobili e-mail za potvrdu registracije?",
    },
};

const transferPageTranslations = {
    en: {
        trans_my_transfers: "My transfers",
        trans_no_transfers: "You currently don't have any transfers scheduled.",
        trans_add_transfer: "Add a transfer",
        trans_edit_transfer: "Edit transfer",
        trans_amount_to_charge_transfer: "TO CHARGE",
        trans_charged_amount: "CHARGED",
        trans_today_label: "Today",
        trans_tomorrow_label: "Tomorrow",
        trans_no_trans_today: "No transfers scheduled for today",
        trans_no_trans_tomorrow: "No transfers scheduled for tomorrow",
        trans_no_other_trans: "No other transfers scheduled",
        trans_past_transfer_no_transfers: "No completed transfers.",
        trans_past_transfer: "Past transfers",
    },
    hr: {
        trans_my_transfers: "Moji transferi",
        trans_no_transfers: "Trenutno nemate zakazanih transfera.",
        trans_add_transfer: "Dodaj transfer",
        trans_edit_transfer: "Uredi transfer",
        trans_amount_to_charge_transfer: "ZA NAPLATU",
        trans_charged_amount: "NAPLAĆENO",
        trans_today_label: "Danas",
        trans_tomorrow_label: "Sutra",
        trans_no_trans_today: "Danas nema zakazanih transfera",
        trans_no_trans_tomorrow: "Sutra nema zakazanih transfera",
        trans_no_other_trans: "Nema drugih zakazanih transfera",
        trans_past_transfer_no_transfers: "Nemate niti jedan dovršeni transfer.",
        trans_past_transfer: "Prošli transferi",
    },
};

const addTransferPageTranslations = {
    en: {
        add_customer_name: "Customer name",
        add_customer_lastname: "Customer last name",
        add_customer_phone: "Customer phone",
        add_transfer_price: "Transfer price (€)",
        add_transfer_deposit: "Paid in advance (€)",
        add_transfer_note: "Note",
        add_transfer_premium: "Premium Transfer",
        add_transfer_premium_desc: "High class vehicle mandatory (Mercedes / Audi / BMW / ...)",
        add_transfer_all_day: "All day",
        add_transfer_date: "Transfer date",
        add_transfer_time: "Transfer time",
        add_pickup_address: "Pickup address",
        add_dropoff_address: "Dropoff address",
        add_flight_number: "Flight number (optional)",
        add_numb_of_passengers: "Number of passengers",
    },
    hr: {
        add_customer_name: "Ime klijenta",
        add_customer_lastname: "Prezime klijenta",
        add_customer_phone: "Telefon klijenta",
        add_transfer_price: "Cijena transfera (€)",
        add_transfer_deposit: "Plaćeno unaprijed (€)",
        add_transfer_note: "Napomena",
        add_transfer_premium: "Premium transfer",
        add_transfer_premium_desc: "Vozilo visoke klase obavezno (Mercedes / Audi / BMW / ...)",
        add_transfer_all_day: "Cijeli dan",
        add_transfer_date: "Datum transfera",
        add_transfer_time: "Vrijeme transfera",
        add_pickup_address: "Adresa polaska",
        add_dropoff_address: "Adresa dolaska",
        add_flight_number: "Broj leta (opcionalno)",
        add_numb_of_passengers: "Broj putnika",
    },
};

const preferencesPageTranslations = {
    en: {
        pref_title: "My preferences",
        pref_notifications: "Notifications",
        pref_push_notifications_enable: "Enable/disable app notifications",
        pref_email_notifications_enable: "Enable/disable email notifications",
        pref_geolocation: "Geolocation",
        pref_geolocation_enable: "Enable/disable geolocation",
        pref_language: "Preferred language",
        pref_select_language: "Select preferred language",
    },
    hr: {
        pref_title: "Moje postavke",
        pref_notifications: "Obavijesti",
        pref_push_notifications_enable:
            "Omogući/onemogući obavijesti aplikacije",
        pref_email_notifications_enable: "Omogući/onemogući obavijesti e-pošte",
        pref_geolocation: "Geolokacija",
        pref_geolocation_enable: "Omogući/onemogući geolokaciju",
        pref_language: "Preferirani jezik",
        pref_select_language: "Odaberi preferirani jezik",
    },
};

const contactPageTranslations = {
    en: {
        contact_title: "Contact us",
        contact_intro:
            "If you have any issues with the application or require any assistance, do not hesitate to contact us.",
        contact_call_us: "Call us",
        contact_call_us_desc: "Out team is online Mon - Fri 9:00 - 17:00",
        contact_email_us: "Email us",
        contact_email_us_desc: "We will answer your email as soon as possible",
        contact_whatsapp: "WhatsApp",
        contact_whatsapp_desc: "Chat with us on WhatsApp",
        contact_instagram: "Instagram",
        contact_instagram_desc: "Follow us on Instagram",
    },
    hr: {
        contact_title: "Kontaktirajte nas",
        contact_intro:
            "Ako imate problema s aplikacijom ili trebate pomoć, slobodno nas kontaktirajte.",
        contact_call_us: "Nazovite nas",
        contact_call_us_desc: "Naš tim je dostupan pon - pet 9:00 - 17:00",
        contact_email_us: "Pošaljite e-mail",
        contact_email_us_desc: "Odgovorit ćemo na vaš e-mail čim prije",
        contact_whatsapp: "WhatsApp",
        contact_whatsapp_desc: "Razgovarajte s nama na WhatsAppu",
        contact_instagram: "Instagram",
        contact_instagram_desc: "Pratite nas na Instagramu",
    },
};

const transferAmountPopupTranslations = {
    en: {
        transfer_amount_popup_title: "Transfer Price Overview",
        transfer_amount_popup_price_amount_label: "Transfer price",
        transfer_amount_popup_price_deposit_label: "Advance payment",
        transfer_amount_popup_price_remaining_label: "Remaining payment",
    },
    hr: {
        transfer_amount_popup_title: "Pregled cijene transfera",
        transfer_amount_popup_price_amount_label: "Cijena transfera",
        transfer_amount_popup_price_deposit_label: "Predujam",
        transfer_amount_popup_price_remaining_label: "Preostali iznos",
    },
};

const transferSavePopupTranslations = {
    en: {
        popup_saved_transfer_title: "Transfer saved!",
        popup_saved_transfer_text:
            "Your transfer has been successfully saved.",
    },
    hr: {
        popup_saved_transfer_title: "Transfer spremljen!",
        popup_saved_transfer_text: "Vaš transfer je uspješno spremljen.",
    }
};

const transferDeletePopupTranslations = {
    en: {
        popup_delete_transfer_title: "Delete transfer?",
        popup_delete_transfer_text:
            "Are you sure you want to delete the transfer?",
        popup_delete_transfer_placeholder: "Enter transfer ID",
        popup_delete_transfer_button_cancel: "No, cancel",
        popup_delete_transfer_button: "Yes, delete",
    },
    hr: {
        popup_delete_transfer_title: "Obrisati transfer?",
        popup_delete_transfer_text: "Jeste li sigurni da želite obrisati transfer?",
        popup_delete_transfer_placeholder: "Unesite ID transfera",
        popup_delete_transfer_button_cancel: "Ne, odustani",
        popup_delete_transfer_button: "Da, obriši",
    }
};

const calendarViewTranslations = {
    en: {
        cal_my_calendar: "My calendar",
    },
    hr: {
        cal_my_calendar: "Moj kalendar",
    },
};

interface TranslationObject {
    [key: string]: { [key: string]: string };
}

function mergeTranslations(
    ...translationObjects: TranslationObject[]
): TranslationObject {
    const merged: TranslationObject = {};

    translationObjects.forEach((obj) => {
        Object.keys(obj).forEach((lang) => {
            if (!merged[lang]) {
                merged[lang] = {};
            }
            merged[lang] = { ...merged[lang], ...obj[lang] };
        });
    });

    return merged;
}

let translations;

if (!translations) {
    translations = mergeTranslations(
        globalTranslations,
        formTranslations,
        sideMenuTranslations,
        loginPageTranslations,
        forgotPasswordPageTranslations,
        forgotPasswordConfirmPageTranslations,
        registrationPageTranslations,
        registrationConfirmPageTranslations,
        transferPageTranslations,
        addTransferPageTranslations,
        preferencesPageTranslations,
        contactPageTranslations,
        transferAmountPopupTranslations,
        transferDeletePopupTranslations,
        calendarViewTranslations,
        transferSavePopupTranslations,
    );
}
export default translations;
