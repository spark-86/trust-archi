import { useMemo } from "react";
import sodium from "libsodium-wrappers-sumo";

export const useKey = () => {
    return useMemo(() => {
        const sign = async (message: string, privateKey: string) => {
            await sodium.ready;
            const key = sodium.from_base64(privateKey);
            const msg = sodium.from_string(message);
            const signature = sodium.crypto_sign_detached(msg, key);
            return sodium.to_base64(signature);
        };

        const publicFromPrivate = async (privateKey: string) => {
            await sodium.ready;
            const key = sodium.from_base64(privateKey);
            const publicKey = sodium.crypto_sign_ed25519_sk_to_pk(key);
            return sodium.to_base64(publicKey);
        };

        return { sign, publicFromPrivate };
    }, []);
};
