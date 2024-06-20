/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddCashflowStatementRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedCashflowStatementInput: components.UnifiedCashflowStatementInput;
};

export type AddCashflowStatementResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedCashflowStatementOutput | undefined;
};

export type AddCashflowStatementResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddCashflowStatementResponseBody | undefined;
    unifiedCashflowStatementOutput?: components.UnifiedCashflowStatementOutput | undefined;
};

/** @internal */
export namespace AddCashflowStatementRequest$ {
    export const inboundSchema: z.ZodType<AddCashflowStatementRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedCashflowStatementInput: components.UnifiedCashflowStatementInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedCashflowStatementInput: "unifiedCashflowStatementInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedCashflowStatementInput: components.UnifiedCashflowStatementInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddCashflowStatementRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedCashflowStatementInput: components.UnifiedCashflowStatementInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedCashflowStatementInput: "UnifiedCashflowStatementInput",
            });
        });
}

/** @internal */
export namespace AddCashflowStatementResponseBody$ {
    export const inboundSchema: z.ZodType<AddCashflowStatementResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedCashflowStatementOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedCashflowStatementOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddCashflowStatementResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedCashflowStatementOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddCashflowStatementResponse$ {
    export const inboundSchema: z.ZodType<AddCashflowStatementResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddCashflowStatementResponseBody$.inboundSchema).optional(),
            UnifiedCashflowStatementOutput:
                components.UnifiedCashflowStatementOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedCashflowStatementOutput: "unifiedCashflowStatementOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddCashflowStatementResponseBody$.Outbound | undefined;
        UnifiedCashflowStatementOutput?:
            | components.UnifiedCashflowStatementOutput$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddCashflowStatementResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddCashflowStatementResponseBody$.outboundSchema).optional(),
            unifiedCashflowStatementOutput:
                components.UnifiedCashflowStatementOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedCashflowStatementOutput: "UnifiedCashflowStatementOutput",
            });
        });
}
