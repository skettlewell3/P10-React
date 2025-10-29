export function useUserPredictions(userId, gameweek) {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setPredictions([]);
      setLoading(false);
      return;
    }

    async function fetchPredictions() {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_predictions')
        .select('*')
        .eq('user_id', userId)
        .eq('gameweek', gameweek);

      if (error) console.error(error);
      else setPredictions(data || []);
      setLoading(false);
    }

    fetchPredictions();
  }, [userId, gameweek]);

  return { predictions, loading };
}
