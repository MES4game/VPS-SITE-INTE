import { useRef } from "react";
import { SmartRef } from "@/shared/models/common/SmartHook";

export function useSmartRef<T>(init_value: T): SmartRef<T> {
    const ref = useRef<T>(init_value);
    const listeners = useRef<Set<() => void>>(new Set());

    function get (): T {
        return ref.current;
    };

    function set (value: T): void {
        if (ref.current !== value) {
            ref.current = value;
            listeners.current.forEach(callback => { callback() });
        }
    };

    function subscribe (callback: () => void): () => void {
        listeners.current.add(callback);
        return () => { listeners.current.delete(callback) };
    };

    return { get, set, subscribe };
}
