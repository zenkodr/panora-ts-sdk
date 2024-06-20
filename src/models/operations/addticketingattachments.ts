/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddTicketingAttachmentsRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Ticketing software.
     */
    remoteData?: boolean | undefined;
    requestBody: Array<components.UnifiedAttachmentInput>;
};

export type AddTicketingAttachmentsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedAttachmentOutput | undefined;
};

export type AddTicketingAttachmentsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddTicketingAttachmentsResponseBody | undefined;
    unifiedAttachmentOutputs?: Array<components.UnifiedAttachmentOutput> | undefined;
};

/** @internal */
export namespace AddTicketingAttachmentsRequest$ {
    export const inboundSchema: z.ZodType<AddTicketingAttachmentsRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            RequestBody: z.array(components.UnifiedAttachmentInput$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        RequestBody: Array<components.UnifiedAttachmentInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTicketingAttachmentsRequest> =
        z
            .object({
                xConnectionToken: z.string(),
                remoteData: z.boolean().optional(),
                requestBody: z.array(components.UnifiedAttachmentInput$.outboundSchema),
            })
            .transform((v) => {
                return remap$(v, {
                    xConnectionToken: "x-connection-token",
                    remoteData: "remote_data",
                    requestBody: "RequestBody",
                });
            });
}

/** @internal */
export namespace AddTicketingAttachmentsResponseBody$ {
    export const inboundSchema: z.ZodType<
        AddTicketingAttachmentsResponseBody,
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
        AddTicketingAttachmentsResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedAttachmentOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddTicketingAttachmentsResponse$ {
    export const inboundSchema: z.ZodType<AddTicketingAttachmentsResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                object: z.lazy(() => AddTicketingAttachmentsResponseBody$.inboundSchema).optional(),
                UnifiedAttachmentOutputs: z
                    .array(components.UnifiedAttachmentOutput$.inboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    HttpMeta: "httpMeta",
                    UnifiedAttachmentOutputs: "unifiedAttachmentOutputs",
                });
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddTicketingAttachmentsResponseBody$.Outbound | undefined;
        UnifiedAttachmentOutputs?: Array<components.UnifiedAttachmentOutput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddTicketingAttachmentsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddTicketingAttachmentsResponseBody$.outboundSchema).optional(),
            unifiedAttachmentOutputs: z
                .array(components.UnifiedAttachmentOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedAttachmentOutputs: "UnifiedAttachmentOutputs",
            });
        });
}
