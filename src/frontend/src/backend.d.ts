import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type MessageId = bigint;
export interface ContactMessage {
    id: MessageId;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    getAllMessages(): Promise<Array<ContactMessage>>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<MessageId>;
}
