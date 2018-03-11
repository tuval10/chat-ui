import {setUser} from '../user';
import {SET_USER} from "../action_types"
import {AVATAR_IMAGES, PIKACHU} from "../../constants";
import {user} from '../../test_helpers/fixtures';

const expectedAvatars = [
  "001-snorlax.png",
  "002-psyduck.png",
  "003-pikachu.png",
  "004-jigglypuff.png",
  "005-bullbasaur.png"
];
let {userId} = user;

describe('setUser action', () => {
  it('returns action with type SET_USER', () => {
    let result = setUser(userId, -1);
    let expectedData = {userId, avatar: PIKACHU};
    expect(result).toEqual({type: SET_USER, data: expectedData});
  });

  describe('returns action with correct avatar', () => {
    it('for correct indexes', () => {
      for (let i = 0; i < expectedAvatars.length; i++) {
        let result = setUser(userId, i);
        let expectedData = {userId, avatar: expectedAvatars[i]};
        expect(result).toEqual({type: SET_USER, data: expectedData});
      }
    });

    it('for incorrect indexes - it sets pikachu', () => {
      let result = setUser(userId, -1);
      let expectedData = {userId, avatar: PIKACHU};
      expect(result).toEqual({type: SET_USER, data: expectedData});
      result = setUser(userId, AVATAR_IMAGES.length);
      expectedData = {userId, avatar: PIKACHU};
      expect(result).toEqual({type: SET_USER, data: expectedData});
    });
  })
});