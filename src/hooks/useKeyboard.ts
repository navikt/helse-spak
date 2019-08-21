import { useEffect, useState } from 'react';

export enum Key {
    Left = 37,
    Right = 39,
    Enter = 13,
    Space = 32
}

interface Map {
    [mapKey: number]: () => void;
}

interface Action {
    keyCode: Key;
    action: () => void;
}

const shouldDisableKeyboard = () => {
    return document.activeElement
        && document.activeElement.tagName.toLowerCase() === 'textarea';
};

export const useKeyboard = (actions: Action[]) => {
    const [map, setMap] = useState<Map>({});

    const handleKeyDown = (e: KeyboardEvent) => {
        if (!shouldDisableKeyboard() && map[e.keyCode]) {
            map[e.keyCode]();
        }
    };

    useEffect(() => {
        actions.forEach(action => {
            setMap(map => ({
                ...map,
                [action.keyCode]: action.action
            }));
        });
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);
};
