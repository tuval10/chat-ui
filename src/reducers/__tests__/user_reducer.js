import user from '../user_reducer'
import {
  SET_USER,
} from "../../actions/action_types";
import {user as stubUser} from '../../test_helpers/fixtures'


describe('User Reducer', () => {
  // noinspection ES6ModulesDependencies
  it('has null as default state', () => {
    expect(user(undefined, {type: 'unexpected'})).toBeNull();
  });

  it('handles SET_USER', () => {
    let result = user(undefined, {type: SET_USER, data: stubUser});
    expect(result).toEqual(stubUser);
  });
});