export default function PackingChecklist() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Packing Checklist 🎒</h1>

      <div style={styles.item}>
        <input type="checkbox" /> Clothes
      </div>

      <div style={styles.item}>
        <input type="checkbox" /> Passport
      </div>

      <div style={styles.item}>
        <input type="checkbox" /> Charger
      </div>

      <div style={styles.item}>
        <input type="checkbox" /> Medicines
      </div>
    </div>
  );
}

const styles = {
  item: {
    background: "#fff",
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
};