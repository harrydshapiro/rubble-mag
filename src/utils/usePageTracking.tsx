import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

declare global {
    interface Window {
        gtag: any;
    }
}

const usePageTracking = () => {
    const location = useLocation();
    
    const source = useMemo(() => {
        return new URLSearchParams(location.search).get('source')
    }, [location.search])

    useEffect(() => {
        if (!window.location.href.includes('sarahconlisk.com')) {
            return
        }

        window.gtag("event", "page_view", {
            page_path: location.pathname,
            source
        });
    }, [location, source]);
};

export default usePageTracking;