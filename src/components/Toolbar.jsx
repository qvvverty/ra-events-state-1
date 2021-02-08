export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  function onClick(click) {
    onSelectFilter(click.target.value);
  }

  return (
    filters.map((filter) => {
      let classes = 'toolbar-btn';
      if (filter === selected) classes += ' selected'; 

      return (
        <button key={filter} value={filter} className={classes} onClick={onClick}>
          {filter}
        </button>
      );
    })
  );
}
