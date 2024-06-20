/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddJournalEntrysRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedJournalEntryInput>;
};

export type AddJournalEntrysResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedJournalEntryOutput | undefined;
};

export type AddJournalEntrysResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddJournalEntrysResponseBody | undefined;
    unifiedJournalEntryOutputs?: Array<components.UnifiedJournalEntryOutput> | undefined;
};

/** @internal */
export namespace AddJournalEntrysRequest$ {
    export const inboundSchema: z.ZodType<AddJournalEntrysRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedJournalEntryInput$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                connection_token: "connectionToken",
                remote_data: "remoteData",
                "x-connection-token": "xConnectionToken",
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        connection_token: string;
        remote_data?: boolean | undefined;
        "x-connection-token": string;
        RequestBody: Array<components.UnifiedJournalEntryInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddJournalEntrysRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedJournalEntryInput$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                connectionToken: "connection_token",
                remoteData: "remote_data",
                xConnectionToken: "x-connection-token",
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace AddJournalEntrysResponseBody$ {
    export const inboundSchema: z.ZodType<AddJournalEntrysResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedJournalEntryOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedJournalEntryOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddJournalEntrysResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedJournalEntryOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddJournalEntrysResponse$ {
    export const inboundSchema: z.ZodType<AddJournalEntrysResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddJournalEntrysResponseBody$.inboundSchema).optional(),
            UnifiedJournalEntryOutputs: z
                .array(components.UnifiedJournalEntryOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedJournalEntryOutputs: "unifiedJournalEntryOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddJournalEntrysResponseBody$.Outbound | undefined;
        UnifiedJournalEntryOutputs?:
            | Array<components.UnifiedJournalEntryOutput$.Outbound>
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddJournalEntrysResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddJournalEntrysResponseBody$.outboundSchema).optional(),
            unifiedJournalEntryOutputs: z
                .array(components.UnifiedJournalEntryOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedJournalEntryOutputs: "UnifiedJournalEntryOutputs",
            });
        });
}
