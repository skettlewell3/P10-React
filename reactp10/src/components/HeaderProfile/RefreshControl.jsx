import { useState, useCallback, useEffect } from "react";

export default function RefreshControl({ refreshAll }) {
    const [loading, setLoading] = useState(false);
    const [lastUpdated, setLastUpdated] = useState(null);

    const handleRefresh = useCallback(async () => {
        setLoading(true);
        try {
            await refreshAll();
            setLastUpdated(new Date());
        } catch (err) {
            console.error("Failed to refresh data:", err);
        } finally {
            setLoading(false);
        }
    }, [refreshAll]);

    useEffect(() => {
        setLastUpdated(new Date());
    }, []);


    return (
        <div id="refreshControl">
            <button 
                id="refreshButton"
                onClick={handleRefresh} 
                disabled={loading}
            >
                {loading ? "Refreshing..." : "🔄"}
                {lastUpdated && !loading && (
                    <span id="lastUpdated">
                        Last Updated: {lastUpdated.toLocaleTimeString()}
                    </span>
                )}
            </button>
        </div>
    );
}