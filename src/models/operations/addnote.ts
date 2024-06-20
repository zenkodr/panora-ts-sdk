/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddNoteRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean | undefined;
    unifiedNoteInput: components.UnifiedNoteInput;
};

export type AddNoteResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedNoteOutput | undefined;
};

export type AddNoteResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddNoteResponseBody | undefined;
    unifiedNoteOutput?: components.UnifiedNoteOutput | undefined;
};

/** @internal */
export namespace AddNoteRequest$ {
    export const inboundSchema: z.ZodType<AddNoteRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedNoteInput: components.UnifiedNoteInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedNoteInput: "unifiedNoteInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedNoteInput: components.UnifiedNoteInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddNoteRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedNoteInput: components.UnifiedNoteInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedNoteInput: "UnifiedNoteInput",
            });
        });
}

/** @internal */
export namespace AddNoteResponseBody$ {
    export const inboundSchema: z.ZodType<AddNoteResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedNoteOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedNoteOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddNoteResponseBody> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedNoteOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddNoteResponse$ {
    export const inboundSchema: z.ZodType<AddNoteResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddNoteResponseBody$.inboundSchema).optional(),
            UnifiedNoteOutput: components.UnifiedNoteOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedNoteOutput: "unifiedNoteOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddNoteResponseBody$.Outbound | undefined;
        UnifiedNoteOutput?: components.UnifiedNoteOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddNoteResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddNoteResponseBody$.outboundSchema).optional(),
            unifiedNoteOutput: components.UnifiedNoteOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedNoteOutput: "UnifiedNoteOutput",
            });
        });
}
