/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddEmailRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
    unifiedEmailInput: components.UnifiedEmailInput;
};

export type AddEmailResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedEmailOutput | undefined;
};

export type AddEmailResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddEmailResponseBody | undefined;
    unifiedEmailOutput?: components.UnifiedEmailOutput | undefined;
};

/** @internal */
export namespace AddEmailRequest$ {
    export const inboundSchema: z.ZodType<AddEmailRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedEmailInput: components.UnifiedEmailInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedEmailInput: "unifiedEmailInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedEmailInput: components.UnifiedEmailInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEmailRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedEmailInput: components.UnifiedEmailInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedEmailInput: "UnifiedEmailInput",
            });
        });
}

/** @internal */
export namespace AddEmailResponseBody$ {
    export const inboundSchema: z.ZodType<AddEmailResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedEmailOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedEmailOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEmailResponseBody> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedEmailOutput$.outboundSchema.optional(),
        }
    );
}

/** @internal */
export namespace AddEmailResponse$ {
    export const inboundSchema: z.ZodType<AddEmailResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddEmailResponseBody$.inboundSchema).optional(),
            UnifiedEmailOutput: components.UnifiedEmailOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedEmailOutput: "unifiedEmailOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddEmailResponseBody$.Outbound | undefined;
        UnifiedEmailOutput?: components.UnifiedEmailOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEmailResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddEmailResponseBody$.outboundSchema).optional(),
            unifiedEmailOutput: components.UnifiedEmailOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedEmailOutput: "UnifiedEmailOutput",
            });
        });
}
