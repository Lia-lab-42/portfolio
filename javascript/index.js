
// Gestion du theme light et dark
const THEME_KEY_NAME = "theme"

// vérifie si un theme est enregistré dans le navigateur
const favoriteTheme = localStorage.getItem(THEME_KEY_NAME)

// met a jour le theme avec la valeur favorite
if(favoriteTheme) {

    setTheme(favoriteTheme)
}

// selectionne le bouton de changement de theme
const btnTheme = document.querySelector("#toggle-theme-btn")
const iconTheme = document.querySelector("#toggle-theme-btn > span")

// écoute les click sur le changement de theme
btnTheme.addEventListener("click", () => {

    // lorsque l'utilisateur clique sur changer le theme
    
    // vérifie l'état actuel du théme
    const currentState = iconTheme.textContent.trim() === "dark_mode" ? "dark": "light"
    
    // change le theme
    setTheme(currentState)

    // change le theme favoris du navigateur
    setFavoriteTheme(currentState)
})

function setTheme(theme) {

    theme = theme.trim()

    if(theme === "dark" || theme === "light") {

        // change l'icon du theme
        document.querySelector("#toggle-theme-btn > span").textContent = theme === "dark" ? "light_mode": "dark_mode"
        
        // change la valeur de l'attribut data-theme qui fait fonctionner le theme avec Bulma
        document.querySelector("html").setAttribute("data-theme", theme)
    }
}

function setFavoriteTheme(theme) {
    localStorage.setItem(THEME_KEY_NAME, theme.trim())
}