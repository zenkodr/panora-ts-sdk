/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddScoreCardRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
    unifiedScoreCardInput: components.UnifiedScoreCardInput;
};

export type AddScoreCardResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedScoreCardOutput | undefined;
};

export type AddScoreCardResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddScoreCardResponseBody | undefined;
    unifiedScoreCardOutput?: components.UnifiedScoreCardOutput | undefined;
};

/** @internal */
export namespace AddScoreCardRequest$ {
    export const inboundSchema: z.ZodType<AddScoreCardRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedScoreCardInput: components.UnifiedScoreCardInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedScoreCardInput: "unifiedScoreCardInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedScoreCardInput: components.UnifiedScoreCardInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddScoreCardRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedScoreCardInput: components.UnifiedScoreCardInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedScoreCardInput: "UnifiedScoreCardInput",
            });
        });
}

/** @internal */
export namespace AddScoreCardResponseBody$ {
    export const inboundSchema: z.ZodType<AddScoreCardResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedScoreCardOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedScoreCardOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddScoreCardResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedScoreCardOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddScoreCardResponse$ {
    export const inboundSchema: z.ZodType<AddScoreCardResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddScoreCardResponseBody$.inboundSchema).optional(),
            UnifiedScoreCardOutput: components.UnifiedScoreCardOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedScoreCardOutput: "unifiedScoreCardOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddScoreCardResponseBody$.Outbound | undefined;
        UnifiedScoreCardOutput?: components.UnifiedScoreCardOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddScoreCardResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddScoreCardResponseBody$.outboundSchema).optional(),
            unifiedScoreCardOutput: components.UnifiedScoreCardOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedScoreCardOutput: "UnifiedScoreCardOutput",
            });
        });
}
