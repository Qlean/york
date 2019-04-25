import PropTypes from 'prop-types';

export const creationFormPropsShape = {
  prefillPhoneNumber: PropTypes.func.isRequired,
  values: PropTypes.shape({
    contact_info: PropTypes.shape({
      phone: PropTypes.string,
    }),
  }),
};

export const messengersShape = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export const menuItemsShape = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
  }).isRequired).isRequired,
  isMobileTitleHidden: PropTypes.bool,
  isTooltip: PropTypes.bool,
};
