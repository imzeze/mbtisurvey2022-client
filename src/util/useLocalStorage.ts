export const useLocalStorage = () => {
    const ISSERVER = typeof window === 'undefined';
    if (!ISSERVER) return true;
    return false;
};
