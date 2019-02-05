import PropTypes from 'prop-types';

export const orderShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  api_token: PropTypes.string.isRequired,
  confirmed_orders_num: PropTypes.number.isRequired,
  future_orders_count: PropTypes.number.isRequired,
  paid_orders_num: PropTypes.number.isRequired,
  is_new_account: PropTypes.bool.isRequired,
  admin: PropTypes.bool.isRequired,
  balance: PropTypes.string.isRequired,
  invite_friends_link: PropTypes.string.isRequired,
  receive_mails: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  done_orders_count: PropTypes.shape({
    basic: PropTypes.number.isRequired,
    lite: PropTypes.number.isRequired,
    pro: PropTypes.number.isRequired,
    deal: PropTypes.number.isRequired,
  }).isRequired,
  identities: PropTypes.array.isRequired,
  experiments: PropTypes.object.isRequired,
  pending_app_actions: PropTypes.array.isRequired,
});

export const settingsShape = PropTypes.shape({
  servicesBundles: PropTypes.shape({
    result: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    entities: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      services: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      fixedDiscountCents: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
});

export const giftsShape = PropTypes.shape({
  selectedGift: PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  availableGiftsCount: PropTypes.number.isRequired,
});

export const orderFlowShape = PropTypes.shape({
  webId: PropTypes.string.isRequired,
});

export const inviteShape = PropTypes.shape({
  invitee: PropTypes.shape({
    first_name: PropTypes.string,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  bonus: PropTypes.number.isRequired,
  state: PropTypes.oneOf(['canceled', 'done', 'waiting_to_be_done']).isRequired,
});

export const inviterStatisticsShape = PropTypes.shape({
  invites: PropTypes.arrayOf(inviteShape).isRequired,
  meta: PropTypes.shape({
    bonus: PropTypes.shape({
      pending: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      balance: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
});

export const reviewShape = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  cleaner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    orders: PropTypes.number.isRequired,
  }).isRequired,
});

export const addressShape = PropTypes.shape({
  id: PropTypes.number,
  apartment: PropTypes.string,
  building: PropTypes.string,
  cash: PropTypes.bool,
  city: PropTypes.string,
  entrance: PropTypes.string,
  floor: PropTypes.string,
  housing: PropTypes.string,
  intercom: PropTypes.string,
  number: PropTypes.string,
  region_code: PropTypes.string,
  region_id: PropTypes.number,
  street: PropTypes.string,
});

export const packageShape = PropTypes.shape({
  subscriptionDurationId: PropTypes.number.isRequired,
  durationMonth: PropTypes.number.isRequired,
  ordersCount: PropTypes.number.isRequired,
  packagePriceCents: PropTypes.number.isRequired,
  percentageDiscount: PropTypes.number.isRequired,
  orderDiscountCents: PropTypes.number.isRequired,
  orderSubtotalCents: PropTypes.number.isRequired,
  overallDiscountCents: PropTypes.number.isRequired,
});

export const dadataSuggestionShape = PropTypes.shape({
  value: PropTypes.string.isRequired,
  unrestrictedValue: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
});

export const cleanerShape = PropTypes.shape({
  id: PropTypes.number,
  full_name: PropTypes.string,
  phone: PropTypes.string,
  short_name: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  rating: PropTypes.number,
});

export const creationFormPropsShape = PropTypes.shape({
  prefillPhoneNumber: PropTypes.func.isRequired,
  values: PropTypes.shape({
    contact_info: PropTypes.shape({
      phone: PropTypes.string,
    }),
  }),
});

export const userFormDataShape = PropTypes.shape({
  phone: PropTypes.string,
});

export const prefilledValuesShape = PropTypes.shape({
  contact_info: PropTypes.shape({
    phone: PropTypes.string,
  }),
});

export const regionsShape = PropTypes.shape({
  entities: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    code: PropTypes.string,
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  result: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
});

export const citiesShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  synonyms: PropTypes.array.isRequired,
  regionId: PropTypes.number,
  regionCode: PropTypes.string,
  afterRepair: PropTypes.bool,
  cash: PropTypes.bool,
  fiasId: PropTypes.string,
});

export const servicesShape = PropTypes.shape({
  service: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    default_quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    input_type: PropTypes.string.isRequired,
    locales: PropTypes.shape({
      name: PropTypes.string.isRequired,
      alt_name: PropTypes.string.isRequired,
      count: PropTypes.shape({
        few: PropTypes.string.isRequired,
        many: PropTypes.string.isRequired,
        one: PropTypes.string.isRequired,
        zero: PropTypes.string.isRequired,
      }),
    }).isRequired,
    max_quantity: PropTypes.number.isRequired,
    min_quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.shape({
    input_type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    service_id: PropTypes.number.isRequired,
  }).isRequired,
});

export const splitTestsShape = PropTypes.objectOf(PropTypes.shape({
  groupSlug: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}).isRequired);

export const servicesPricesShape = PropTypes.shape({
  balconies: PropTypes.number.isRequired,
  balcony_windows: PropTypes.number.isRequired,
  cat_litter_box: PropTypes.number.isRequired,
  customer_provides_consumables: PropTypes.number.isRequired,
  ironing: PropTypes.number.isRequired,
  keys_delivery: PropTypes.number.isRequired,
  keys_pickup: PropTypes.number.isRequired,
  kitchen_cabinets: PropTypes.number.isRequired,
  lustre: PropTypes.number.isRequired,
  microwave: PropTypes.number.isRequired,
  oven: PropTypes.number.isRequired,
  refrigerator: PropTypes.number.isRequired,
  tableware: PropTypes.number.isRequired,
  wardrobe: PropTypes.number.isRequired,
  windows: PropTypes.number.isRequired,
  winter_windows: PropTypes.number.isRequired,
});

export const creditCardShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  root: PropTypes.bool,
  brand: PropTypes.string.isRequired,
});

export const discountShape = PropTypes.shape({
  amount: PropTypes.string.isRequired,
  amount_cents: PropTypes.number.isRequired,
  amount_type: PropTypes.string.isRequired,
  locales: PropTypes.shape({
    label: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
});

export const regionShape = PropTypes.oneOf(['msk', 'spb', 'ekb', 'nsk', 'kzn']);

export const messengersShape = PropTypes.arrayOf(PropTypes.shape({
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
})).isRequired;
