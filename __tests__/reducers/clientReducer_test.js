import client from '../../src/reducers/clientReducer';

const INITIAL_STATE = {
  client: {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    recipes: [],
    restrictions: []
  },
  loading: false
};

describe('client reducers', () => {
  const pendingAction = { type: 'GET_CLIENT_PENDING' };
  const fulfilledActionA = { type: 'GET_CLIENT_FULFILLED', payload: 'Not Logged In'};
  const fulfilledActionB = { type: 'GET_CLIENT_FULFILLED',
    payload: {
      id: 1,
      first_name: 'Sample',
      last_name: 'Test',
      email: '',
      recipes: [],
      restrictions: []
    }
  };
  const rejectedAction = { type: 'GET_CLIENT_REJECTED' };

  it('returns the initial state', () => {
    expect(client(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  it('checks loading property on state', () => {
    expect(client(null, pendingAction)).toMatchObject({ loading: true });
    expect(client(null, fulfilledActionA)).toMatchObject({ loading: false });
    expect(client(null, rejectedAction)).toMatchObject({ loading: false });
  });

  it('returns rejectedAction response', () => {
    expect(client(null, rejectedAction)).toMatchObject({ error: 'Unable To Fetch Client', client: INITIAL_STATE.client })
  });

  it('handles fulfilled action', () => {
    expect(client(null, fulfilledActionA)).toMatchObject(INITIAL_STATE);
    expect(client(null, fulfilledActionB)).toMatchObject({
      client: {
        id: 1,
        first_name: 'Sample',
        last_name: 'Test',
        email: '',
        recipes: [],
        restrictions: []
      }
    });
  });
});
