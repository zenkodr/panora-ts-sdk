/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetCustomProviderPropertiesRequest = {
    linkedUserId: string;
    providerId: string;
    vertical: string;
};

export type GetCustomProviderPropertiesResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace GetCustomProviderPropertiesRequest$ {
    export const inboundSchema: z.ZodType<
        GetCustomProviderPropertiesRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        linkedUserId: z.string(),
        providerId: z.string(),
        vertical: z.string(),
    });

    export type Outbound = {
        linkedUserId: string;
        providerId: string;
        vertical: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCustomProviderPropertiesRequest
    > = z.object({
        linkedUserId: z.string(),
        providerId: z.string(),
        vertical: z.string(),
    });
}

/** @internal */
export namespace GetCustomProviderPropertiesResponse$ {
    export const inboundSchema: z.ZodType<
        GetCustomProviderPropertiesResponse,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCustomProviderPropertiesResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}
