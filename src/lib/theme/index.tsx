export interface Theme {
  name: string;
}

const defaultData: Theme = {
  name: "theme title",
};

const _theme = { current: { ...defaultData } };

export function createTheme(theme?: Theme) {
  _theme.current = { ...defaultData, ...theme };
}

export function getTheme() {
  return { ..._theme.current };
}
