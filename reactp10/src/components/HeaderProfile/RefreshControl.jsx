import { useState, useCallback } from "react";

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

    return (
        <div className="refreshControl">
            <button onClick={handleRefresh} disabled={loading}>
                {loading ? "Refreshing..." : "🔄 Refresh"}
            </button>
            {lastUpdated && (
                <span className="lastUpdated">
                    Last Updated: {lastUpdated.toLocaleTimeString()}
                </span>
            )}
        </div>
    );
}