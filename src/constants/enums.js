import {Platform, Dimensions} from 'react-native';

// PLATFORM
const PLATFORM_OS = Platform.OS;
// DIMENSIONS
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const DIMENSIONS = {SCREEN_WIDTH, SCREEN_HEIGHT};
// COLORS
const PRIMARY = '#FFFFFF';
const SECONDARY = '#AAAAAA';
const COLORS = {PRIMARY, SECONDARY};

export {PLATFORM_OS, DIMENSIONS, COLORS};
