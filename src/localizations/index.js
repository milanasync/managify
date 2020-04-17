import LocalizedStrings from 'react-native-localization';

const en = require('./en.json');
const gj = require('./gj.json');

let strings = new LocalizedStrings({
  'en-US': en,
  'gj': gj
});

export default strings;
