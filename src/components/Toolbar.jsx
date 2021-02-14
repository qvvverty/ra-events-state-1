import PropTypes from 'prop-types';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    filters.map((filter) => {
      let classes = 'toolbar-btn';
      if (filter === selected) classes += ' selected'; 

      return (
        <button key={filter} value={filter} className={classes} onClick={() => onSelectFilter(filter)}>
          {filter}
        </button>
      );
    })
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
}
