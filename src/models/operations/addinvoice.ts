/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddInvoiceRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedInvoiceInput: components.UnifiedInvoiceInput;
};

export type AddInvoiceResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedInvoiceOutput | undefined;
};

export type AddInvoiceResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddInvoiceResponseBody | undefined;
    unifiedInvoiceOutput?: components.UnifiedInvoiceOutput | undefined;
};

/** @internal */
export namespace AddInvoiceRequest$ {
    export const inboundSchema: z.ZodType<AddInvoiceRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedInvoiceInput: components.UnifiedInvoiceInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedInvoiceInput: "unifiedInvoiceInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedInvoiceInput: components.UnifiedInvoiceInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddInvoiceRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedInvoiceInput: components.UnifiedInvoiceInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedInvoiceInput: "UnifiedInvoiceInput",
            });
        });
}

/** @internal */
export namespace AddInvoiceResponseBody$ {
    export const inboundSchema: z.ZodType<AddInvoiceResponseBody, z.ZodTypeDef, unknown> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedInvoiceOutput$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedInvoiceOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddInvoiceResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedInvoiceOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddInvoiceResponse$ {
    export const inboundSchema: z.ZodType<AddInvoiceResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddInvoiceResponseBody$.inboundSchema).optional(),
            UnifiedInvoiceOutput: components.UnifiedInvoiceOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedInvoiceOutput: "unifiedInvoiceOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddInvoiceResponseBody$.Outbound | undefined;
        UnifiedInvoiceOutput?: components.UnifiedInvoiceOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddInvoiceResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddInvoiceResponseBody$.outboundSchema).optional(),
            unifiedInvoiceOutput: components.UnifiedInvoiceOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedInvoiceOutput: "UnifiedInvoiceOutput",
            });
        });
}
