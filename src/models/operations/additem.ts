/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddItemRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedItemInput: components.UnifiedItemInput;
};

export type AddItemResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedItemOutput | undefined;
};

export type AddItemResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddItemResponseBody | undefined;
    unifiedItemOutput?: components.UnifiedItemOutput | undefined;
};

/** @internal */
export namespace AddItemRequest$ {
    export const inboundSchema: z.ZodType<AddItemRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedItemInput: components.UnifiedItemInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedItemInput: "unifiedItemInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedItemInput: components.UnifiedItemInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddItemRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedItemInput: components.UnifiedItemInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedItemInput: "UnifiedItemInput",
            });
        });
}

/** @internal */
export namespace AddItemResponseBody$ {
    export const inboundSchema: z.ZodType<AddItemResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedItemOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedItemOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddItemResponseBody> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedItemOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddItemResponse$ {
    export const inboundSchema: z.ZodType<AddItemResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddItemResponseBody$.inboundSchema).optional(),
            UnifiedItemOutput: components.UnifiedItemOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedItemOutput: "unifiedItemOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddItemResponseBody$.Outbound | undefined;
        UnifiedItemOutput?: components.UnifiedItemOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddItemResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddItemResponseBody$.outboundSchema).optional(),
            unifiedItemOutput: components.UnifiedItemOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedItemOutput: "UnifiedItemOutput",
            });
        });
}
