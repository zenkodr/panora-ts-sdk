/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddTransactionsRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedTransactionInput>;
};

export type AddTransactionsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedTransactionOutput | undefined;
};

export type AddTransactionsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddTransactionsResponseBody | undefined;
    unifiedTransactionOutputs?: Array<components.UnifiedTransactionOutput> | undefined;
};

/** @internal */
export namespace AddTransactionsRequest$ {
    export const inboundSchema: z.ZodType<AddTransactionsRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedTransactionInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedTransactionInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTransactionsRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedTransactionInput$.outboundSchema),
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
export namespace AddTransactionsResponseBody$ {
    export const inboundSchema: z.ZodType<AddTransactionsResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTransactionOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedTransactionOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTransactionsResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTransactionOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddTransactionsResponse$ {
    export const inboundSchema: z.ZodType<AddTransactionsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddTransactionsResponseBody$.inboundSchema).optional(),
            UnifiedTransactionOutputs: z
                .array(components.UnifiedTransactionOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedTransactionOutputs: "unifiedTransactionOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddTransactionsResponseBody$.Outbound | undefined;
        UnifiedTransactionOutputs?:
            | Array<components.UnifiedTransactionOutput$.Outbound>
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTransactionsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddTransactionsResponseBody$.outboundSchema).optional(),
            unifiedTransactionOutputs: z
                .array(components.UnifiedTransactionOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedTransactionOutputs: "UnifiedTransactionOutputs",
            });
        });
}
