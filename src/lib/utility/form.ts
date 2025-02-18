import { t } from "$utility/i18n";
import { get } from "svelte/store";
import z from "zod";

const translationStore = get(t);

//define here reusable schemas:
const numberOrStringSchema = z.union([z.number(), z.string()]);
const phoneSchema = z.string().refine(
    (val) => {
        return /^(\+|0)[0-9]{1,16}$/.test(val);
    },
    {
        message: translationStore("form_error_phone_format"),
    },
);
/*const phoneSchema = z
    .string()
    .min(1, { message: translationStore("form_error_phone_empty") }) // Ensure the field isn't empty
    .refine(
        (val) => {
            const phoneNumber = parsePhoneNumberFromString(val);
            return phoneNumber && phoneNumber.isValid();
        },
        {
            message: translationStore("form_error_phone_format"), // Custom error message
        }
    );*/

export const _loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: translationStore("form_error_email_empty") })
        .email({ message: translationStore("form_error_email_invalid") }),
    password: z
        .string()
        .min(1, { message: translationStore("form_error_password_empty") }),
});

export const _resetPasswordSchema = z.object({
    email: z
        .string()
        .min(1, { message: translationStore("form_error_email_empty") })
        .email({ message: translationStore("form_error_email_invalid") }),
});

const numberIfNotEmptySchema = z
  .string()
  .superRefine((val, ctx) => {
    if (val === "") return; // Skip validation for empty strings

    const validations = [
      {
        check: !/[^0-9.,]/.test(val), // No unwanted characters
        message: translationStore("form_error_price_only_numbers"),
      },
      {
        check: val.length <= 8, // Length within the limit
        message: translationStore("form_error_price_max_digits"),
      },
      {
        check: /^(?:\d{1,5})(?:[.,]\d{1,2})?$/.test(val), // Valid format
        message: translationStore("form_error_price_format"),
      },
      {
        check: !isNaN(Number(val.replace(",", "."))) && Number(val.replace(",", ".")) >= 0, // Numeric value >= 0
        message: translationStore("form_error_number_type"),
      },
    ];

    validations.forEach(({ check, message }) => {
      if (!check) ctx.addIssue({ code: z.ZodIssueCode.custom, message });
    });
  });


const numberPriceStringSchema = z
  .string()
  .min(1, { message: translationStore("form_error_price_empty") })
  .refine(
    (val) => {
      // Ensure that no unwanted characters are included
      const invalidCharRegex = /[^0-9.,]/;
      return !invalidCharRegex.test(val);  // Return true if no invalid characters are found
    },
    {
      message: translationStore("form_error_price_only_numbers"),
    }
  )
  .refine(
    (val) => {
      return val.length <= 8; // Ensure the length is within the limit
    },
    {
      message: translationStore("form_error_price_max_digits"),
    }
  )
  .refine(
    (val) => {
      const regex = /^(?:\d{1,5})(?:[.,]\d{1,2})?$/;
      return regex.test(val);
    },
    {
      message: translationStore("form_error_price_format"),
    }
  );



export const _changePasswordSchema = z
    .object({
        password: z
            .string()
            .min(1, { message: translationStore("form_error_password_empty") })
            .min(8, { message: translationStore("form_error_pass_length") })
            .regex(/[A-Z]/, {
                message: translationStore("form_error_pass_uppercase"),
            })
            .regex(/[a-z]/, {
                message: translationStore("form_error_pass_lowercase"),
            })
            .regex(/[!@#$%^&*(),.?":{}|<>]/, {
                message: translationStore("form_error_pass_special"),
            }),
        confirmPassword: z.string(),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirmPassword) {
            ctx.addIssue({
                path: ["confirmPassword"],
                message: translationStore("form_error_pass_confirm"),
            });
        }
    });

export const _registerSchema = z.object({
    email: z
        .string()
        .min(1, { message: translationStore("form_error_email_empty") })
        .email({ message: translationStore("form_error_email_invalid") }),
    password: z
        .string()
        .min(1, { message: translationStore("form_error_password_empty") })
        .min(8, { message: translationStore("form_error_pass_length") })
        .regex(/[A-Z]/, {
            message: translationStore("form_error_pass_uppercase"),
        })
        .regex(/[a-z]/, {
            message: translationStore("form_error_pass_lowercase"),
        })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, {
            message: translationStore("form_error_pass_special"),
        }),
});

const pickupAddressSchema = z.object({
    id: z.string().optional(),
    place_id: z.number().int().optional(),
    address: z.string().min(1, {
        message: translationStore("form_error_pickup_address_empty"),
    }),
});

const dropoffAddressSchema = z.object({
    id: z.string().optional(),
    place_id: z.number().int().optional(),
    address: z.string().min(1, {
        message: translationStore("form_error_drop_off_address_empty"),
    }),
});

export const _deleteTransferSchema = (id: number) => z.object({
    deleteTransfer: z.string().refine(
        (val) => val === id.toString(),
        {
            message: translationStore("form_error_transfer_id_mismatch"),
        }
    ),
});

export const _addTransferSchema = z.object({
    name: z
        .string()
        .min(1, { message: translationStore("form_error_name_empty") }),
    lastname: z
        .string()
        .min(1, { message: translationStore("form_error_last_name_empty") }),
    phone: phoneSchema,
    pickupAddress: pickupAddressSchema,
    dropOffAddress: dropoffAddressSchema,
    flightNumber: numberOrStringSchema.optional(),
    numbOfPassengers: z.number()
        .int({ message: translationStore("form_error_number_of_passengers") })
        .positive({ message: translationStore("form_error_number_of_passengers") }),
    price: numberPriceStringSchema,
    deposit: numberIfNotEmptySchema,
    note: z.string().optional(),
    isPremium: z.boolean(),
    isAllDay: z.boolean(),
    pickupDate: z.string().refine(
        (val) => {
            const date = new Date(val);
            return !isNaN(date.getTime());
        },
        {
            message: translationStore("form_error_invalid_date_format"),
        },
    ),
}).refine((data) => { 
    const price = parseFloat(data.price);
    const deposit = parseFloat(data.deposit || '0');
    return deposit <= price;
}, {
    message: translationStore("form_error_deposit_greater_than_price"),
    path: ["deposit"] 
});

export function validateForm(errors) {
    return Object.values(errors).every((value) => value === null);
}
