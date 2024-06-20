/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedNoteInputFieldMappings = {};

export type UnifiedNoteInput = {
    /**
     * The content of the note
     */
    content: string;
    /**
     * The uuid of the user tied the note
     */
    userId?: string | undefined;
    /**
     * The uuid of the company tied to the note
     */
    companyId?: string | undefined;
    /**
     * The uuid fo the contact tied to the note
     */
    contactId?: string | undefined;
    /**
     * The uuid of the deal tied to the note
     */
    dealId?: string | undefined;
    fieldMappings: UnifiedNoteInputFieldMappings;
};

/** @internal */
export namespace UnifiedNoteInputFieldMappings$ {
    export const inboundSchema: z.ZodType<UnifiedNoteInputFieldMappings, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedNoteInputFieldMappings> =
        z.object({});
}

/** @internal */
export namespace UnifiedNoteInput$ {
    export const inboundSchema: z.ZodType<UnifiedNoteInput, z.ZodTypeDef, unknown> = z
        .object({
            content: z.string(),
            user_id: z.string().optional(),
            company_id: z.string().optional(),
            contact_id: z.string().optional(),
            deal_id: z.string().optional(),
            field_mappings: z.lazy(() => UnifiedNoteInputFieldMappings$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                user_id: "userId",
                company_id: "companyId",
                contact_id: "contactId",
                deal_id: "dealId",
                field_mappings: "fieldMappings",
            });
        });

    export type Outbound = {
        content: string;
        user_id?: string | undefined;
        company_id?: string | undefined;
        contact_id?: string | undefined;
        deal_id?: string | undefined;
        field_mappings: UnifiedNoteInputFieldMappings$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedNoteInput> = z
        .object({
            content: z.string(),
            userId: z.string().optional(),
            companyId: z.string().optional(),
            contactId: z.string().optional(),
            dealId: z.string().optional(),
            fieldMappings: z.lazy(() => UnifiedNoteInputFieldMappings$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                userId: "user_id",
                companyId: "company_id",
                contactId: "contact_id",
                dealId: "deal_id",
                fieldMappings: "field_mappings",
            });
        });
}
