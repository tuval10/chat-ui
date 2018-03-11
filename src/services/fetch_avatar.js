import snorlax from '../assets/001-snorlax.png';
import psyduck from '../assets/002-psyduck.png';
import pikachu from '../assets/003-pikachu.png';
import jigglypuff from '../assets/004-jigglypuff.png';
import bullbasaur from '../assets/005-bullbasaur.png';

const imageByUrl = {
  "001-snorlax.png": snorlax,
  "002-psyduck.png": psyduck,
  "003-pikachu.png": pikachu,
  "004-jigglypuff.png": jigglypuff,
  "005-bullbasaur.png": bullbasaur
};

export default (url) => imageByUrl[url];