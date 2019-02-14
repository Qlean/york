import PropTypes from 'prop-types';

export const creationFormPropsShape = PropTypes.shape({
  prefillPhoneNumber: PropTypes.func.isRequired,
  values: PropTypes.shape({
    contact_info: PropTypes.shape({
      phone: PropTypes.string,
    }),
  }),
});

export const messengersShape = PropTypes.arrayOf(PropTypes.shape({
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}).isRequired);

export const menuItemsShape = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
  }).isRequired).isRequired,
  isMobileTitleHidden: PropTypes.bool,
  isTooltip: PropTypes.bool,
}).isRequired);
