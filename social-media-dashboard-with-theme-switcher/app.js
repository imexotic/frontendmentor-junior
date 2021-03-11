const checkbox = document.getElementById('checkbox');
const themeIndicator = document.getElementById('color-theme')
const bodyClasses = document.body.classList;
const getTheme = JSON.parse(localStorage.getItem('themeSettings'));


const changeTheme = (theme, indicator) => {

    if (theme && indicator) {
        bodyClasses.add(theme)
        themeIndicator.textContent = indicator;
    } else {
        bodyClasses.toggle('dark')
        if (bodyClasses.contains('dark')) {
            updateStorage('dark', 'Dark Mode');
            themeIndicator.textContent = 'Dark Mode';
        } else {
            updateStorage('light', 'Light Mode');
            themeIndicator.textContent = 'Light Mode';
        }
    }
}

const updateStorage = (theme, indicator) => {
    const themeSettings = {
        theme: theme,
        indicator: indicator
    }
    localStorage.setItem('themeSettings', JSON.stringify(themeSettings))
}

window.addEventListener('DOMContentLoaded', () => {
    changeTheme(getTheme.theme, getTheme.indicator);
});

checkbox.addEventListener('change', () => {
    changeTheme();
});
