export interface Rhex {
    previous_hash?: string | null;
    protocol: string;
    scope: string;
    nonce: string;
    at?: string; // Because we deal with such high precision JS float doesn't cut it
    record_type: string;
    data: Record<string, unknown>;
    signatures?: object[];
    current_hash?: string;
}

export const DefaultRhex: Rhex = {
    protocol: "",
    scope: "",
    nonce: "",
    record_type: "",
    data: {},
};
