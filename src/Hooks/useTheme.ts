import { DefaultTheme } from '@react-navigation/native';
import { Common, Fonts, Gutters, Images, Layout, Variables } from '@/Theme';
import { Theme, ThemeNavigationTheme, ThemeNavigationColors } from '@/Theme/theme';

export default function () {
  const themeVariables = Variables;

  const fonts = Fonts(themeVariables);
  const gutters = Gutters(themeVariables);
  const images = Images(themeVariables);
  const layout = Layout(themeVariables);
  const common = Common({
    ...themeVariables,
    Layout: Layout(themeVariables),
    Gutters: Gutters(themeVariables),
    Fonts: Fonts(themeVariables),
    Images: Images(themeVariables),
  });

  // Build the default theme
  const baseTheme: Theme<
    typeof fonts,
    typeof gutters,
    typeof images,
    typeof layout,
    typeof common
  > = {
    Fonts: fonts,
    Gutters: gutters,
    Images: images,
    Layout: layout,
    Common: common,
    ...themeVariables,
  };

  // Merge and return the current Theme
  return buildTheme(baseTheme);
}

/**
 * Provide all the theme exposed with useTheme()
 */
const buildTheme = <F, G, I, L, C>(baseTheme: Theme<F, G, I, L, C>) => {
  return {
    ...baseTheme,
    NavigationTheme: mergeNavigationTheme(DefaultTheme, baseTheme.NavigationColors),
  };
};

/**
 * Merge the React Navigation Theme
 *
 * @param reactNavigationTheme
 * @param overrideColors
 * @return {{colors}}
 */
const mergeNavigationTheme = (
  reactNavigationTheme: ThemeNavigationTheme,
  overrideColors: Partial<ThemeNavigationColors>,
) => ({
  ...reactNavigationTheme,
  colors: {
    ...reactNavigationTheme.colors,
    ...overrideColors,
  },
});
