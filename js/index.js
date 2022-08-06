const openSubmenu = (id) => {
    const li = document.getElementById(id)
    if (li.className.includes("at-mob-li-show")) {
        console.log(li.className);
        li.className.includes("at-menu-active") ? li.className = "at-menu-active" : li.className = ""
    } else {
        li.className.includes("at-menu-active") ? li.className = "at-menu-active at-mob-li-show" : li.className = "at-mob-li-show"
    }
}

const mobileToggle = () => {
    const nav = document.getElementById('at-header-nav')
    if (nav.className) {
        nav.className = ""
    } else {
        nav.className = "at-head-mob-nav"
    }
}