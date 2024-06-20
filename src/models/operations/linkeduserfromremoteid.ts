/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type LinkedUserFromRemoteIdRequest = {
    remoteId: string;
};

export type LinkedUserFromRemoteIdResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace LinkedUserFromRemoteIdRequest$ {
    export const inboundSchema: z.ZodType<LinkedUserFromRemoteIdRequest, z.ZodTypeDef, unknown> =
        z.object({
            remoteId: z.string(),
        });

    export type Outbound = {
        remoteId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LinkedUserFromRemoteIdRequest> =
        z.object({
            remoteId: z.string(),
        });
}

/** @internal */
export namespace LinkedUserFromRemoteIdResponse$ {
    export const inboundSchema: z.ZodType<LinkedUserFromRemoteIdResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LinkedUserFromRemoteIdResponse> =
        z
            .object({
                httpMeta: components.HTTPMetadata$.outboundSchema,
            })
            .transform((v) => {
                return remap$(v, {
                    httpMeta: "HttpMeta",
                });
            });
}
