import {
    AddBookingReq,
    BookingCustomer,
    BookingPrice,
    Client,
    FilterBookingReq,
    LoginModel,
    LoginOTUToken,
    PasswordResetSubmission,
    PlacesAutocompleteInput,
    RegisterModel,
    RequestEmailConfirmation,
    ResponseStatus,
    UpdateBookingReq,
    VehicleType,
} from "$nswag_client/ApiClientV2";
import {
    profile,
    updateProfileRefreshToken,
    updateProfileToken,
} from "$store/store";
import { replace } from "svelte-spa-router";
import { get } from "svelte/store";
import { API_URL } from "./appdata";

// export const API_URL = "http://10.0.2.2:7144";
// // export const API_URL = "http://localhost:7144";

const customFetch = async (
    input: RequestInfo | URL,
    init?: RequestInit,
): Promise<Response> => {
    const profileStore = get(profile);
    init = init || {};

    try {
        let response = await fetch(input, init);        
        if (response.status === 401) {
            const refreshToken = profileStore.refreshToken;
            const client = new Client(API_URL);            

            // exchange current refresh token for a JWT
            try {
                const refreshResponse = await client.authentication_RefreshToken(
                    refreshToken as string,
                );                

                if (refreshResponse.status === ResponseStatus.Success) {
                    updateProfileToken(refreshResponse.token as string);
                    updateProfileRefreshToken(refreshResponse.refreshToken as string);

                    init.headers = {
                        ...init.headers,
                        Authorization: `Bearer ${refreshResponse.token as string}`,
                    };

                    response = await fetch(input, init);
                } else {
                    // if refresh token exchange fails (refresh token is older than xy days, or another error)
                    handleLogout();
                }
            }
            catch (exc) {                
                handleLogout();
            }
        } else if (response.status === 400) {
            handleLogout();
        }
        return response;
    }
    catch (exc) {          
        handleLogout();
    }
};

function handleLogout() {
    updateProfileToken(null);
    updateProfileRefreshToken(null);

    replace("/login"); // Redirect to login
}

const fetchWrapper = { fetch: customFetch };

export const clientV2 = new Client(API_URL, fetchWrapper);

function setTokenFromStore() {
    const token = get(profile)?.token;
    if (token && clientV2.token !== token) {
        clientV2.token = token;
    }
}

export async function login(user: string, pass: string) {
    const loginModel = new LoginModel({
        username: user, //"mirta - stefanac.mirta@gmail.com",
        password: pass, //"123456Qwerty.", //123456Qwerty.
    });

    // Call the authentication API with the baseUrl
    console.time();
    try {
        const response = await clientV2.authentication_Login(loginModel);
        console.log(response);
        //clientV2.token = `${response.token}`;
        // return clientV2;

        return response;
    } catch (exc) {
        console.log("Catch exception", exc);
        return null;
    }
}

export async function loginWithOtuToken(otuToken: string) {
    const loginModel = new LoginOTUToken({
        token: otuToken,
    });

    // Call the authentication API with the baseUrl
    console.time();
    try {
        const response =
            await clientV2.authentication_LoginWithOtuToken(loginModel);
        console.log(response);
        //clientV2.token = `${response.token}`;
        // return clientV2;

        return response;
    } catch (exc) {
        console.log("Catch exception", exc);
        return null;
    }
}

export async function register(email: string, password: string) {
    const regModel = new RegisterModel({
        /* email: "ivan.svaljek@mail.com",
      password: "",
      username: "d00d", */

        email: email, //"stefanac.mirta@gmail.com",
        password: password, //"123qweasdYXC!",
        username: email,
    });

    try {
        setTokenFromStore();
        const response = await clientV2.authentication_Register(regModel);
        console.log(response);
        return response;
    } catch (exc) {
        console.log(exc);
        return null;
    }
}

export async function sendConfirmationLink(email: string) {
    const confirmationLinkModel = new RequestEmailConfirmation({
        username: email,
    });

    try {
        setTokenFromStore();
        const response = await clientV2.authentication_SendConfirmationLink(
            confirmationLinkModel,
        );
        console.log(response);
        return response;
    } catch (exc) {
        console.log(exc);
        return null;
    }
}

export async function searchPlaces(
    place: string,
    base: string,
    radius: number,
) {
    const placeInputModel = new PlacesAutocompleteInput({
        input: place,
        baseLocation: base,
        radius: radius,
    });
    try {
        setTokenFromStore();
        const response =
            await clientV2.placesAutocomplete_SearchPlaces(placeInputModel);
        // console.log(response);
        return response;
    } catch (exc) {
        console.log("Catch exception", exc);
        return null;
    }
}
export async function requestPasswordReset(email: string) {
    const regModel = new RegisterModel({
        email: email,
    });

    try {
        setTokenFromStore();
        const response =
            await clientV2.authentication_RequestPasswordReset(regModel);
        console.log(response);
        return response;
    } catch (exc) {
        console.log(exc);
        return null;
    }
}

export async function getPlaceDetails(placeId: string) {
    /*  const placeIdModel = new PlacesDetailsResponse({
        placeId: placeId
    }); */
    try {
        setTokenFromStore();
        const response =
            await clientV2.placesAutocomplete_GetPlaceDetails(placeId);
        //console.log({ response });
        return response;
    } catch (exc) {
        console.log("Catch exception", exc);
        return null;
    }
}
export async function resetPassword(
    email: string,
    password: string,
    token: string,
) {
    const resetPasswordModel = new PasswordResetSubmission({
        email: email,
        newPassword: password,
        token: token,
    });

    try {
        console.log({ resetPasswordModel });
        const response =
            await clientV2.authentication_ResetPassword(resetPasswordModel);
        console.log(response);
        return response;
    } catch (exc) {
        console.log(exc);
        return null;
    }
}

export async function addBooking(values) {
    const booking = new AddBookingReq({
        dateTransfer: new Date(values.pickupDate),
        dateBooking: new Date(),
        fromPlace: values?.pickupAddress?.place_id,
        toPlace: values?.dropOffAddress?.place_id,
        peopleCount: values.numbOfPassengers,
        price: new BookingPrice({
            amount: parseFloat(values.price.replace(',', '.')),
            deposit: parseFloat(values.deposit.replace(',', '.')) || 0,
        }),
        strFromPlace: values?.pickupAddress?.address,
        strToPlace: values?.dropOffAddress?.address,
        vehicleType: VehicleType.Sedan,
        customer: new BookingCustomer({
            firstName: values.name,
            lastName: values.lastname,
            telephone: values.phone,
        }),
        isAllDay: values.isAllDay,
        isPremium: values.isPremium,
        flightNumber: values.flightNumber,
        note: values.note,
    });

    console.log({ booking });

    try {
        setTokenFromStore();
        const addResponse = await clientV2.booking_AddBooking(booking);
        console.log(addResponse);
        return addResponse;
    } catch (exc) {
        console.log(exc);
        return null;
    }
}

export async function getBookings() {
    try {
        setTokenFromStore();
        const bookingsResponse = await clientV2.booking_GetAllBookings();
        console.log(bookingsResponse);
        return bookingsResponse;
    } catch (exc) {                
        return null;
    }
}

export async function filterBookingsPost(filter: FilterBookingReq) {
    try {
        setTokenFromStore();
        const filterResponse =
            await clientV2.booking_FilterBookingsPost(filter);
        console.log(filterResponse);
        return filterResponse;
    } catch (exc) {        
        return null;
    }
}

export async function deleteBookingById(id: string) {
    try {
        setTokenFromStore();
        const deleteResponse = await clientV2.booking_DeleteBooking(id);
        console.log({ deleteResponse });
        return deleteResponse;
    } catch (exc) {
        console.log(exc);
        return null;
    }
}

export async function updateBookingById(currentTransfer: UpdateBookingReq) {
    try {
        setTokenFromStore();
        const transferId = currentTransfer?.id || "";
        const updateResponse = await clientV2.booking_UpdateBooking(
            transferId,
            currentTransfer,
        );
        console.log({ updateResponse });
        return updateResponse;
    } catch (exc) {
        console.log(exc);
        return null;
    }
}

export async function checkFlightNumber(flightNumber: string) {
    try {
        setTokenFromStore();
        const flightResponse = await clientV2.flight_GetFlight(
            flightNumber,
        );
        console.log(flightResponse);
        return flightResponse;
    } catch (exc) {
        console.log(exc);
        return null;
    }
}