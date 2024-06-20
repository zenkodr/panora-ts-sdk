/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddInterviewRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
    unifiedInterviewInput: components.UnifiedInterviewInput;
};

export type AddInterviewResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedInterviewOutput | undefined;
};

export type AddInterviewResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddInterviewResponseBody | undefined;
    unifiedInterviewOutput?: components.UnifiedInterviewOutput | undefined;
};

/** @internal */
export namespace AddInterviewRequest$ {
    export const inboundSchema: z.ZodType<AddInterviewRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedInterviewInput: components.UnifiedInterviewInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedInterviewInput: "unifiedInterviewInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedInterviewInput: components.UnifiedInterviewInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddInterviewRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedInterviewInput: components.UnifiedInterviewInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedInterviewInput: "UnifiedInterviewInput",
            });
        });
}

/** @internal */
export namespace AddInterviewResponseBody$ {
    export const inboundSchema: z.ZodType<AddInterviewResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedInterviewOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedInterviewOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddInterviewResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedInterviewOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddInterviewResponse$ {
    export const inboundSchema: z.ZodType<AddInterviewResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddInterviewResponseBody$.inboundSchema).optional(),
            UnifiedInterviewOutput: components.UnifiedInterviewOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedInterviewOutput: "unifiedInterviewOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddInterviewResponseBody$.Outbound | undefined;
        UnifiedInterviewOutput?: components.UnifiedInterviewOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddInterviewResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddInterviewResponseBody$.outboundSchema).optional(),
            unifiedInterviewOutput: components.UnifiedInterviewOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedInterviewOutput: "UnifiedInterviewOutput",
            });
        });
}
