/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetAccountingAttachmentRequest = {
    /**
     * id of the attachment you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type GetAccountingAttachmentResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedAttachmentOutput | undefined;
};

export type GetAccountingAttachmentResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetAccountingAttachmentResponseBody | undefined;
};

/** @internal */
export namespace GetAccountingAttachmentRequest$ {
    export const inboundSchema: z.ZodType<GetAccountingAttachmentRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            remote_data: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remote_data: "remoteData",
            });
        });

    export type Outbound = {
        id: string;
        remote_data?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAccountingAttachmentRequest> =
        z
            .object({
                id: z.string(),
                remoteData: z.boolean().optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    remoteData: "remote_data",
                });
            });
}

/** @internal */
export namespace GetAccountingAttachmentResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetAccountingAttachmentResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedAttachmentOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedAttachmentOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingAttachmentResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedAttachmentOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace GetAccountingAttachmentResponse$ {
    export const inboundSchema: z.ZodType<GetAccountingAttachmentResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                object: z.lazy(() => GetAccountingAttachmentResponseBody$.inboundSchema).optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    HttpMeta: "httpMeta",
                });
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetAccountingAttachmentResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingAttachmentResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetAccountingAttachmentResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}
