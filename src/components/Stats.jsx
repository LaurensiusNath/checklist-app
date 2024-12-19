function Stats({ items }) {
  const totItems = items.length;
  const totCheckedItems = items.filter((item) => item.isDone === true).length;
  const percentage =
    totItems > 0 ? ((totCheckedItems / totItems) * 100).toFixed(1) : 0;

  return (
    <footer className="stats">
      <span>{`Kamu memiliki ${totItems} catatan dan baru ${totCheckedItems} yang di checklist (${percentage}%)`}</span>
    </footer>
  );
}

export default Stats;
