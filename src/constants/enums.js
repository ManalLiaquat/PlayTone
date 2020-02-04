import {Platform, Dimensions} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

// PLATFORM
const PLATFORM_OS = Platform.OS;
// DIMENSIONS
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const DIMENSIONS = {SCREEN_WIDTH, SCREEN_HEIGHT};
// COLORS
const PRIMARY = '#FFFFFF';
const SECONDARY = '#AAAAAA';
const COLORS = {PRIMARY, SECONDARY};
// RESPONSIVE SCREEN
const PERCENTAGE_TO_DP = {WP, HP};

export {PLATFORM_OS, DIMENSIONS, COLORS, PERCENTAGE_TO_DP};
