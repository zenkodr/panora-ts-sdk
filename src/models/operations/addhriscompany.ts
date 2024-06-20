/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddHrisCompanyRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    unifiedCompanyInput: components.UnifiedCompanyInput;
};

export type AddHrisCompanyResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedCompanyOutput | undefined;
};

export type AddHrisCompanyResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddHrisCompanyResponseBody | undefined;
    unifiedCompanyOutput?: components.UnifiedCompanyOutput | undefined;
};

/** @internal */
export namespace AddHrisCompanyRequest$ {
    export const inboundSchema: z.ZodType<AddHrisCompanyRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedCompanyInput: components.UnifiedCompanyInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedCompanyInput: "unifiedCompanyInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedCompanyInput: components.UnifiedCompanyInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddHrisCompanyRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedCompanyInput: components.UnifiedCompanyInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedCompanyInput: "UnifiedCompanyInput",
            });
        });
}

/** @internal */
export namespace AddHrisCompanyResponseBody$ {
    export const inboundSchema: z.ZodType<AddHrisCompanyResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedCompanyOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedCompanyOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddHrisCompanyResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedCompanyOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddHrisCompanyResponse$ {
    export const inboundSchema: z.ZodType<AddHrisCompanyResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddHrisCompanyResponseBody$.inboundSchema).optional(),
            UnifiedCompanyOutput: components.UnifiedCompanyOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedCompanyOutput: "unifiedCompanyOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddHrisCompanyResponseBody$.Outbound | undefined;
        UnifiedCompanyOutput?: components.UnifiedCompanyOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddHrisCompanyResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddHrisCompanyResponseBody$.outboundSchema).optional(),
            unifiedCompanyOutput: components.UnifiedCompanyOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedCompanyOutput: "UnifiedCompanyOutput",
            });
        });
}
